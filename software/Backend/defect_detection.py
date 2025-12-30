import cv2
import numpy as np

def detect_defects(image):
    """
    Detect surface defects in a gemstone image using image processing.
    Returns defect percentage.
    """

    # Convert to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Reduce noise
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Edge detection (cracks / scratches)
    edges = cv2.Canny(blurred, 50, 150)

    # Enhance detected edges
    kernel = np.ones((3, 3), np.uint8)
    dilated_edges = cv2.dilate(edges, kernel, iterations=1)

    # Calculate defect area
    defect_pixels = np.count_nonzero(dilated_edges)
    total_pixels = dilated_edges.size

    defect_percentage = (defect_pixels / total_pixels) * 100

    return round(defect_percentage, 2)
