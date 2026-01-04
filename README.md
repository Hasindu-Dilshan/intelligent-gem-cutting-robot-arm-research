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

### 1️⃣ Robotic Arm Control
#### **Overview**
This component focuses on controlling the robotic arm for gemstone cutting. The system combines hardware assembly, ROS 2 simulation, and web-based configuration to enable precise and programmable arm movements.


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

#### **1.3 Function**
The robotic arm performs precise physical movements for cutting operations. The system allows simulation and real-time control of the arm, translating commands from the web app into servo motor actions.

#### **1.4 Future Works**
* **1.4.1 Adaptive Cutting with AI Feedback:** Equip sensors (force, vibration, optical) to adjust cutting paths in real-time. Implement reinforcement learning for optimal strategies.
* **1.4.2 Multi-Arm Systems:** Expand to multi-arm setups for faster manufacturing and collaborative jewelry production.
* **1.4.3 Cloud Operation:** Develop a web dashboard for remote control, analytics, performance logs, and predictive maintenance.

---

### 2️⃣ Gem Identification
#### **2.1 Overview**
This component implements a machine learning–based gemstone identification and authenticity classification system tailored for Sri Lankan gemstones. It functions as a decision-support and pre-screening tool using measurable physical properties.

> [!NOTE]
> This is developed for academic purposes to demonstrate data-driven modeling. Evaluation focuses on methodology, not industrial-grade certification accuracy.

#### **2.2 Dataset Description**
A synthetically generated tabular dataset with **5,000+ records** based on scientifically valid gemological ranges:
* **Refractive Index (RI), Specific Gravity (SG), Hardness (Mohs scale)**
* *Includes 21 Sri Lankan gemstone types (natural, synthetic, and imitation).*

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

To keep this consistent with your professional GitHub README, I have used **GitHub-style alert blocks**, **bold data points**, and **technical tables**. I have organized your new content for **Section 3** to be as long and detailed as the previous sections while maintaining your exact wording and technical flow.

Add this into your `README.md` at the **Section 3: Gem Evaluation & Cut Planning** area:

---

### 3️⃣ Gem Evaluation & Cut Planning

#### **3.1 Overview**

The function operates as an extension of the gem identification module, where the identified gem type, gem color, and captured gemstone images are provided as input data. The system analyzes the gem’s features and determines the optimal cutting method using AI-based or rule-driven logic to maximize gem value and minimize material loss.

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

### 4️⃣ Cut Execution

The robotic arm executes the cutting process according to pre-calculated angles and paths, producing a polished gem ready for further refinement or sale.

---

### 4️⃣ Cut Execution
The robotic arm executes the cutting process according to pre-calculated angles and paths, producing a polished gem ready for further refinement or sale.

---

<div align="center">

### 🛠️ Technical Stack
<img src="https://skillicons.dev/icons?i=ros,raspberrypi,linux,python,cpp,ubuntu,pyTorch,tensorFlow,openCv" />

</div>







