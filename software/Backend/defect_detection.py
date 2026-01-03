import cv2
import numpy as np

def classify_inclusions(image):
    """
    Very basic rules for classifying inclusion types from image.
    These are proxies based on shapes and pixel patterns.
    """

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Edge detection (fractures)
    edges = cv2.Canny(blurred, 50, 150)

    # Detect bright point clusters (pinpoints / crystals)
    _, point_thresh = cv2.threshold(gray, 220, 255, cv2.THRESH_BINARY)

    # Detect elongated lines (needles)
    lines = cv2.HoughLinesP(edges, 1, np.pi/180, threshold=60,
                            minLineLength=30, maxLineGap=10)

    inclusion_types = []

    # If many long edges → fractures / feathers
    if cv2.countNonZero(edges) > 3000:
        inclusion_types.append("fractures/feathers")

    # If many bright clusters → pinpoints / crystals
    clusters = cv2.countNonZero(point_thresh)
    if clusters > 500:
        inclusion_types.append("pinpoints/crystals")

    # If line segments detected → needle inclusions
    if lines is not None and len(lines) > 5:
        inclusion_types.append("needle–type")

    # If none detected → hazy / cloud pattern
    if not inclusion_types:
        inclusion_types.append("cloud / subtle")

    return inclusion_types


def detect_defects(image):
    """
    Returns inclusion types and a proxy severity score.
    """

    types = classify_inclusions(image)

    # A simple severity score: number of types seen
    severity = len(types) * 10

    return {
        "inclusion_types": types,
        "severity_score": severity
    }
