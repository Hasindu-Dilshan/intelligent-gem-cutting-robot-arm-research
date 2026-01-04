**Intelligent Gem Cutting Robotic Arm**

BSc (Hons) in Information Technology – Final Year Research Project  
**Sri Lanka Institute of Information Technology (SLIIT)**  
**Research Group:** Autonomous Intelligent Machines and Systems - RP-25J-231

---

Project Overview

This project aims to develop an intelligent robotic arm that automates the gemstone cutting process through robotics and artificial intelligence.
Traditional gem cutting in Sri Lanka is labor-intensive, requires high skill, and often results in inconsistency.

The proposed system introduces a semi-autonomous robotic solution capable of identifying, evaluating, and cutting gemstones with precision and minimal human intervention.

The research integrates machine learning, robotics, embedded systems, and 3D Modelling to create a prototype that can intelligently analyze gem characteristics and execute optimized cutting operations.

---

System Workflow

The system performs **four key functions**:

1. Robotic Arm Control
   
Overview

This component focuses on controlling the robotic arm for gemstone cutting. The system combines hardware assembly, ROS 2 simulation, and web-based configuration to enable precise and programmable arm movements.

Hardware Components:

6× MG996R Servo Motors
ESP 32 S3 board
Raspberry Pi 4 (4GB)
5V 20A Power Supply
5V 3A Power Supply
Breadboard
PCA 9685 servo controller board
Type-C or Micro USB data cable
Female-to-female jumper cables
6-DOF Robot Arm DIY Kit

Software & Simulation:

Ubuntu 24.04
ROS 2 Jazzy with Gazebo Harmonic for simulation
Web app configuration to bridge hardware and simulation via ROS 2 bridge

Function:
The robotic arm performs precise physical movements for cutting operations. The system allows simulation and real-time control of the arm, translating commands from the web app into servo motor actions.

2. **Gem Identification**  
   A camera scans the gemstone, and a **machine learning model** classifies the gem type and estimates its weight based on image and sensor data.

3. **Gem Evaluation & Cut Planning**  
   The system analyzes the gem’s features and determines the optimal cutting method using **AI-based or rule-driven logic** to maximize gem value and minimize material loss.

4. **Cut Execution**  
   The robotic arm executes the cutting process according to pre-calculated angles and paths, producing a polished gem ready for further refinement or sale.

---


