<div align="center">

# 💎 Intelligent Gem Cutting Robotic Arm
**BSc (Hons) in Information Technology – Final Year Research Project** *Sri Lanka Institute of Information Technology (SLIIT)* 

*Autonomous Intelligent Machines and Systems – RP-25J-231*

---

[![Robotics](https://img.shields.io/badge/Robotics-blue?style=for-the-badge)](https://www.sliit.lk/)
[![Embedded Systems](https://img.shields.io/badge/Embedded%20Systems-orange?style=for-the-badge)](https://www.sliit.lk/)
[![Machine Learning](https://img.shields.io/badge/Machine%20Learning-green?style=for-the-badge)](https://www.sliit.lk/)
[![3D Modelling](https://img.shields.io/badge/3D%20Modelling-blue?style=for-the-badge)](https://www.sliit.lk/)

</div>

---

## 📝 Project Overview
This project aims to develop an intelligent robotic arm that automates the gemstone cutting process through robotics and artificial intelligence. Traditional gem cutting in Sri Lanka is labor-intensive, requires high skill, and often results in inconsistency.

The proposed system introduces a **semi-autonomous robotic solution** capable of identifying, evaluating, and cutting gemstones with precision and minimal human intervention. 

The research integrates **machine learning, robotics, embedded systems, and 3D Modelling** to create a prototype that can intelligently analyze gem characteristics and execute optimized cutting operations.

---

## 📐 Architectural Diagram


---

## 🔄 System Workflow
The system performs four key functions:

### 1️⃣ Robotic Arm Design, Control & Execution
#### **Overview**
This component focuses on controlling the robotic arm for gemstone cutting. The system combines hardware assembly, ROS 2 simulation, and web-based configuration to enable precise and programmable arm movements. The system allows simulation and real-time control of the arm, translating commands from the web app into servo motor actions.


> [!NOTE]
> The hardware used in this project is designed for academic purposes. It is a prototype setup and not intended for production-level deployment. The focus is on experimentation, learning, and demonstrating robotic arm control principles.

#### **1.1 Hardware Components**
| Category | Item | Specification |
| :--- | :--- | :--- |
| **Actuators** | 6× MG996R Servo Motors | High torque for precision |
| **Controllers** | ESP 32 S3 board | Primary Logic |
| **Computing** | Raspberry Pi 4 (4GB) | ROS 2 Environment |
| **Power** | 5V 20A & 5V 3A | Dual Supply System |
| **Interface** | PCA 9685 | Servo Controller Board |
| **Structure** | 6-DOF Robot Arm Kit | DIY Robotic Frame |
| **Misc** | Breadboard / Cables | Type-C / Micro USB / Jumper |

#### **1.2 Software & Simulation**
* **Operating System:** Ubuntu 24.04  
* **Framework:** ROS 2 Jazzy with Gazebo Harmonic for simulation  
* **Interface:** Web app configuration to bridge hardware and simulation via ROS 2 bridge  
* **Path Generation:** Creates precision cutting plans and movement trajectories based on stone analysis.

#### **1.3 Execution & Planning Strategy**
* **Movement Control:** Translates complex faceting coordinates into real-time servo pulses for high-precision cutting.
* **Path Planning:** Generates optimized cutting plans to navigate the arm along calculated trajectories, ensuring minimal material waste.
  
#### **1.4 Function**
The robotic arm performs precise physical movements for cutting operations. The system allows simulation and real-time control of the arm, translating commands from the web app into servo motor actions.

#### **1.5 Future Works**
* Adaptive Cutting with AI Feedback:** Equip sensors (force, vibration, optical) to adjust cutting paths in real-time. Implement reinforcement learning for optimal strategies.
* Multi-Arm Systems:** Expand to multi-arm setups for faster manufacturing and collaborative jewelry production.
* Cloud Operation:** Develop a web dashboard for remote control, analytics, performance logs, and predictive maintenance.

---

### 2️⃣ Gem Identification
#### **2.1 Overview**
This component implements a machine learning–based gemstone identification and authenticity classification system tailored for Sri Lankan gemstones. This component implements a data-driven gemstone identification and authenticity assessment system designed with a focus on Sri Lankan gemstones. It serves as a decision-support and pre-screening module, assisting users in distinguishing natural, synthetic, imitation, and treated stones using measurable gemological properties.

The system combines visual information and key physical parameters to reduce reliance on subjective manual inspection and improve consistency in preliminary gem evaluation.

> [!NOTE]
> This is developed for academic purposes to demonstrate data-driven modeling. Evaluation focuses on methodology, not industrial-grade certification accuracy.

#### **2.2 Dataset Description**
The model is trained using a synthetically generated dataset containing 3,000+ records, constructed according to standard gemological reference ranges. The dataset represents realistic variations observed in Sri Lankan gem materials.:
* **Images,Refractive Index (RI), Specific Gravity (SG), Hardness (Mohs scale)**
* *Includes 34 Sri Lankan gemstone types (natural, Synthetic and treated stones, imitation and non-gem but valuable).*

#### **2.3 Model & Tools**
* **Approach:** Two-stage classification (Type identification + Authenticity classification).
* **Model:** Random Forest classifiers.
* **Tools:** `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `joblib`.
* **Environment:** Google Colab.

#### **2.4 Future Works**
* Incorporate real laboratory gemological data.
* Add hierarchical classification and additional physical/optical features.
* Combine tabular data with image-based or spectral features.

---

### 3️⃣ Gem Evaluation

#### **3.1 Overview**

The function operates as an extension of the gem identification module, where the identified gem type, gem color, and captured gemstone images are provided as input data. The system analyzes the gem’s features and determines the optimal cutting method using AI-based or rule-driven logic to maximize gem value and minimize material loss.

> [!NOTE]
> This component is developed for academic and research purposes to demonstrate data-driven modeling. Evaluation focuses on conceptual methodology and implementation rather than industrial-grade certification.

#### **3.2 Image Preprocessing & Defect Detection**

Captured images are preprocessed to improve quality. Techniques such as noise removal, contrast enhancement, and segmentation are applied.

* **Process Flow:**
* Image quality is enhanced.
* Defective regions are identified using a supervised multi-class defect detection model.
* A visual defect map is generated and visualized.


* **Technical Detail:** The model is trained to identify five different types of gemstone defects using approximately **10,000 labeled images per defect category**.
* **Tools & Technologies:** `OpenCV`, `NumPy`, `TensorFlow / PyTorch`, `Python`.

#### **3.3 Weight Measurement**

The physical weight of the gemstone is measured using hardware sensors to ensure precise value estimation.

* **Mechanism:** Load cell sensor connected to an **HX711 module**.
* **Process Flow:**
* Gem is placed on the load cell.
* Sensor readings are captured and processed.
* Weight is digitally recorded for the integrated feature set.


* **Hardware:** Load Cell, HX711.

#### **3.4 Gem Value Estimation**

The system estimates the gemstone value by combining detected defects, measured weight, gem type, and reference market price data.

| Input Feature | Source |
| --- | --- |
| **Defect Map** | Multi-class Detection Model (PyTorch) |
| **Physical Weight** | Load Cell + HX711 Module |
| **Gem Type/Color** | Identification Module |
| **Market Reference** | Pricing Data Model |

**Final Output:** The system provides a fully automated and data-driven solution including a **visual defect map**, **accurate gemstone weight**, and an **estimated gemstone value**.

---

### 4️⃣ Cut Type Recommendation

#### **4.1 Overview**

This component recommends the most suitable gemstone cut type and predicts cutter-ready geometric parameters based on gemstone material properties and physical dimensions. The objective is to ensure cut feasibility while minimizing material wastage.

> [!NOTE]
>This component is developed for academic purposes to demonstrate data-driven cut planning. The emphasis is on methodological design rather than industrial-grade cutting optimization.

#### **4.2 Input Feature Processing**

The Cut Type Recommendation module receives structured inputs from previous modules:

From Gem Identification: Gem Type, Refractive Index (RI)
From Gem Evaluation: Carat Weight , Length (mm), Width (mm), Height (mm)

Derived Parameters:

Aspect Ratio – calculated as Length divided by Width, used to analyze shape suitability.

Depth Ratio – calculated as Height divided by Width, used to differentiate cut families.

These features are used to recommend the most suitable cut type and suggest initial cutting parameters.

#### **4.3 Cut Recommendation Models **
The cut recommendation process is divided into two stages, supported by derived parameters from gemstone dimensions and properties:

Stage 1: Exact Cut Family Classification
Determines the broad category of cut based on gemstone properties and derived features such as aspect ratio, depth ratio, and estimated volume.

Supported Cut Families: Brilliant, Step, Mixed, Cabochon

Model: CatBoost Classifier

Purpose: Handles categorical gemstone types and non-linear relationships to select a suitable cut family.

Stage 2: Cut Type Prediction

Selects the precise cut within the identified family to ensure maximum yield and aesthetic quality.

Examples:
Brilliant: Round, Oval, Pear, Marquise
Model: XGBoost Classifier

Purpose: Provides logical consistency with cut family and improves exact cut prediction accuracy.

Cut Parameter Prediction
Once the exact cut type is selected, the system predicts cut-specific geometric parameters to guide cutting operations:

Table Percentage,Crown Angle,Pavilion Angle,Total Depth Percentage

Separate regression models are trained for each cut family to improve parameter accuracy and minimize gemstone material loss.

Final Output:
The system provides a data-driven cut recommendation including a suitable cut family, exact cut type selection, and adjusted geometric cut parameters to support efficient gemstone cutting.
---


<div align="center">

### 🛠️ Technical Stack
<img src="https://skillicons.dev/icons?i=ros,raspberrypi,linux,python,cpp,ubuntu,pytorch,tensorflow,opencv" />

</div>


















