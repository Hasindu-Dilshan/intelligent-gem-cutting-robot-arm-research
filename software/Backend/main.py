from fastapi import FastAPI, UploadFile, File
import cv2
import numpy as np

from defect_detection import detect_defects
from weight_calculation import calculate_weight
from value_estimation import estimate_value

app = FastAPI()

@app.post("/analyze-gem/")
async def analyze_gem(
    gem_type: str,
    images: list[UploadFile] = File(...)
):
    image_list = []

    for file in images:
        contents = await file.read()
        np_img = np.frombuffer(contents, np.uint8)
        image = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
        image_list.append(image)

    defect_percentages = [detect_defects(img) for img in image_list]
    avg_defect = round(sum(defect_percentages) / len(defect_percentages), 2)

    weight = calculate_weight(image_list, gem_type)
    value = estimate_value(gem_type, weight, avg_defect)

    return {
        "gem_type": gem_type,
        "defect_percentage": avg_defect,
        "weight_carats": weight,
        "estimated_value_usd": value
    }
