**Intelligent Gem Cutting Robotic Arm**

BSc (Hons) in Information Technology – Final Year Research Project
Sri Lanka Institute of Information Technology (SLIIT)
Research Group: Autonomous Intelligent Machines and Systems – RP-25J-231

---

**Project Overview**

This project aims to develop an intelligent robotic arm that automates the gemstone cutting process through robotics and artificial intelligence.
Traditional gem cutting in Sri Lanka is labor-intensive, requires high skill, and often results in inconsistency.

The proposed system introduces a semi-autonomous robotic solution capable of identifying, evaluating, and cutting gemstones with precision and minimal human intervention.

The research integrates machine learning, robotics, embedded systems, and 3D Modelling to create a prototype that can intelligently analyze gem characteristics and execute optimized cutting operations.

---

**Architectural Diagram**

---

**System Workflow**

The system performs four key functions:

**1. Robotic Arm Control**

Overview

This component focuses on controlling the robotic arm for gemstone cutting. The system combines hardware assembly, ROS 2 simulation, and web-based configuration to enable precise and programmable arm movements.

Note: The hardware used in this project is designed for academic purposes. It is a prototype setup and not intended for production-level deployment. The focus is on experimentation, learning, and demonstrating robotic arm control principles.

1.1 Hardware Components

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

1.2 Software & Simulation

Ubuntu 24.04

ROS 2 Jazzy with Gazebo Harmonic for simulation

Web app configuration to bridge hardware and simulation via ROS 2 bridge

1.3 Function

The robotic arm performs precise physical movements for cutting operations. The system allows simulation and real-time control of the arm, translating commands from the web app into servo motor actions.

1.4 Future Works 

1.4.1 Adaptive Cutting with AI Feedback

Equip the robotic arm with sensors (force, vibration, optical) to adjust cutting paths in real-time for maximum precision.

Implement reinforcement learning so the system learns optimal cutting strategies over time.

1.4.2 Multi-Arm or Collaborative Robotic Systems

Expand to multi-arm setups for faster or more complex gemstone cutting.

Explore collaborative robotics for semi-automated jewelry manufacturing.

1.4.3 Cloud-Based Remote Operation

Develop a web dashboard to monitor and control the robotic arm remotely.

Include analytics, performance logs, and predictive maintenance alerts for improved usability.

---

2. Gem Identification

2.1 Overview

This component implements a machine learning–based gemstone identification and authenticity classification system tailored for Sri Lankan gemstones. It functions as a decision-support and pre-screening tool, using measurable physical properties rather than replacing certified laboratory testing.

Note: This component is developed for academic and research purposes to demonstrate data-driven modeling and analysis. Evaluation focuses on conceptual understanding, methodology, and implementation, not industrial-grade certification accuracy.

2.2 Dataset Description

A synthetically generated tabular dataset with 5,000+ records was used, based on scientifically valid gemological ranges.
Each record represents a gemstone sample described by:

Refractive Index (RI)

Specific Gravity (SG)

Hardness (Mohs scale)

The dataset includes 21 Sri Lankan gemstone types, covering natural gemstones, valuable synthetic or treated stones, and imitation materials.

2.3 Model & Tools

Approach: Two-stage classification (gem type identification + authenticity/value classification)

Model: Random Forest classifiers

Tools & Libraries: pandas, numpy, scikit-learn, matplotlib, joblib

Environment: Google Colab

2.4 Future Works

Incorporate real laboratory gemological data for validation

Add additional physical and optical features

Introduce hierarchical classification for improved accuracy

Combine tabular data with image-based or spectral features

Integrate identification results with robotic cut-planning module

---

3. Gem Evaluation & Cut Planning

The system analyzes the gem’s features and determines the optimal cutting method using AI-based or rule-driven logic to maximize gem value and minimize material loss.

4. Cut Execution

The robotic arm executes the cutting process according to pre-calculated angles and paths, producing a polished gem ready for further refinement or sale.

---
