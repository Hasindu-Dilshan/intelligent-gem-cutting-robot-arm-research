<div align="center">

# 💎 Intelligent Gem Cutting Robotic Arm
### BSc (Hons) in Information Technology – Final Year Research Project
**Sri Lanka Institute of Information Technology (SLIIT)** *Research Group: Autonomous Intelligent Machines and Systems – RP-25J-231*

---

[![Research-SLIIT](https://img.shields.io/badge/Research-SLIIT-blue?style=for-the-badge&logo=googlescholar&logoColor=white)](https://www.sliit.lk/)
[![ROS2-Jazzy](https://img.shields.io/badge/ROS2-Jazzy-22314E?style=for-the-badge&logo=ros&logoColor=white)](https://docs.ros.org/en/jazzy/)
[![Ubuntu-24.04](https://img.shields.io/badge/Ubuntu-24.04-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![Python-ML](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

</div>

---

## 📖 Project Overview
Traditional gem cutting in Sri Lanka is labor-intensive, requiring extreme manual skill and often resulting in human error and inconsistency. This project aims to revolutionize the industry by developing an **Intelligent Robotic Arm** that automates the cutting process using **Artificial Intelligence** and **Robotics**.

This semi-autonomous solution integrates:
* **Machine Learning** for precise gemstone identification.
* **ROS 2 & Gazebo** for advanced robotic simulation and control.
* **Embedded Systems** for real-time hardware execution.
* **3D Modelling** for optimized cut planning.

---

## 🏗️ System Architecture


---

## 🛠️ System Workflow

### 1. 🦾 Robotic Arm Control & Hardware
This module serves as the physical interface, bridging high-level software commands with precise mechanical motion.

#### **Core Specifications**
* **Kinematics:** 6-DOF (Degrees of Freedom) Robot Arm.
* **Micro-controllers:** ESP32-S3 for fast processing and Raspberry Pi 4 (4GB) for ROS 2 nodes.
* **Actuators:** 6× MG996R High-Torque Servo Motors driven by a PCA 9685 Servo Controller.
* **Power Management:** Dual-rail supply (5V 20A for servos | 5V 3A for logic) to ensure torque stability.

#### **Simulation & Real-time Sync**
* **OS:** Ubuntu 24.04 (Noble Numbat).
* **Simulation Environment:** ROS 2 Jazzy with Gazebo Harmonic.
* **Bridge:** Custom Web App configuration to translate simulated movements into real-world servo pulses via a ROS 2 bridge.

---

### 🔍 2. Gem Identification (ML Engine)
A decision-support tool designed specifically for the unique gemological landscape of Sri Lanka.

* **Classification Strategy:** Two-stage Random Forest Classifier.
* **Dataset:** 5,000+ synthetic records modeled after valid gemological ranges.
* **Key Parameters Analyzed:**
    * **RI:** Refractive Index
    * **SG:** Specific Gravity
    * **Mohs Scale:** Mineral Hardness
* **Scope:** Capable of classifying 21 distinct types, including natural stones, synthetics, and imitations.

---

### 📐 3. Gem Evaluation & Cut Planning
The system analyzes the physical features of the rough stone to determine the **Optimal Faceting Path**.
* **Objective:** Maximize carat weight and value while minimizing material loss.
* **Logic:** Uses rule-driven AI to calculate the best angles for light reflection and brilliance.

---

### ⚙️ 4. Cut Execution
The final phase where the robotic arm executes the calculated angles. 
* **Precision:** Path planning ensures smooth transitions between faceting angles.
* **Final Output:** A polished, high-precision gemstone ready for the market.

---

## 🚀 Technical Stack

<table align="center">
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=py" width="48" height="48" alt="Python" />
      <br>Python
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=cpp" width="48" height="48" alt="C++" />
      <br>C++
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=ros" width="48" height="48" alt="ROS2" />
      <br>ROS 2
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=raspberrypi" width="48" height="48" alt="RPi" />
      <br>Raspberry Pi
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=linux" width="48" height="48" alt="Linux" />
      <br>Ubuntu
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=sklearn" width="48" height="48" alt="Scikit-Learn" />
      <br>ML
    </td>
  </tr>
</table>

---

## 🔮 Future Roadmap
- [ ] **Adaptive AI Feedback:** Real-time path adjustment using force/vibration sensors.
- [ ] **Collaborative Multi-Arm:** Expanding to multi-arm setups for faster manufacturing.
- [ ] **Cloud Dashboard:** Remote monitoring, performance logs, and predictive maintenance.

---

> **Note:** This project is a prototype developed for academic research at SLIIT and is not intended for industrial-grade deployment in its current form.

<div align="center">
  <sub>© 2024-2025 | SLIIT AIMS Research Group</sub>
</div>
