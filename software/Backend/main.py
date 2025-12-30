from fastapi import FastAPI, UploadFile, File
from typing import List
import cv2
import numpy as np

from defect_detection import detect_defects

app = FastAPI(
    title="Gem Defect Detection API",
    description="Detect gemstone surface defects using multiple images",
    version="1.0"
)

@app.post("/detect-defects/")
async def detect_gem_defects(files: List[UploadFile] = File(...)):
    """
    Accept multiple gemstone images (top, side, bottom views)
    and return combined defect percentage.
    """

    defect_scores = []

    for file in files:
        image_bytes = await file.read()
        image_array = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

        if image is None:
            return {"error": f"Invalid image file: {file.filename}"}

        score = detect_defects(image)
        defect_scores.append(score)

    final_defect = round(sum(defect_scores) / len(defect_scores), 2)

    return {
        "images_received": len(files),
        "individual_defect_percentages": defect_scores,
        "final_defect_percentage": final_defect,
        "gem_quality": "GOOD" if final_defect < 5 else "DEFECTED"
    }
