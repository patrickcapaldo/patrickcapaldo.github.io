---
layout: page
title: RheumActive
description: A system to track the range of motion of joints in the human body, particularly for people with rheumatoid arthritis.
img: assets/img/projects/rheumactive/RheumActive_Cover.png
importance: 1
category: fun
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/rheumactive/RheumActive_Cover.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Image of the MPU6050 accelerometers and Arduino Nano used for RheumActive.
</div>

# Disclaimer

The devices and designs provided are shared freely for educational and informational purposes. The creators do not accept any liability for any injury, damage, or loss caused by the use of these designs

# Motivation

RheumActive (a play on the word 'rheumatic') is a system designed to track the joint range of motion for people with rheumatoid arthritis, like myself, and ultimately improve the quality of life for people with this disease. Rheumatoid arthritis (RA) is a chronic autoimmune disease that causes pain, inflammation, swelling, and stiffness in the joints as the surrounding bones deform and fuse together. There is no cure for rheumatoid arthritis and thus it's effects accumulate continuously over a lifetime, leading to significant physical and mental deterioration. The disease causes periods (sometimes lasting many weeks) of more intense symptoms (more pain, more stiffness, reduced range of motion) called flare-ups which are difficult to predict and vary in their causes from person to person. However, early diagnosis and appropraite treatment can meaningfully mitigate the effects of RA and reduce the frequency of flare-ups. RheumActive aims to provide another dimension of information and analysis for people with RA that assists with tracking their joint movement (with or without a flare-up), identifies personal causes of flare-ups so that they can be anticipated and mitigated in the future, and encourages remaining active despite the disease.

# System

The RheumActive system consists of hardware, to measure and transmit the range of motion of the joints of the person, and software, to analyse the measurements and provide insights into the effects of RA on this person.

## Hardware

The hardware used to record and transmit the measurements of joint movement are listed as follows:

* MPU 6050 (2x): The accelerometers (6 degrees of freedom, 3 axis analog gyro) used to measure the joint range of motion. 
* Arduino ABX00083 Nano Card ESP32 with Nano Headers: To aggregate and transmit the accelerometer data via USB-C and Bluetooth.
* Jumper Cables and Breadbaord: To connect the accelerometers to the Arduino Nano for testing.
* Velcro Reel and Buckles: To strap to the body and hold the accelerometers whilst measuring range of motion.
* Soldering Kit: To solder headers (pins) to the accelerometers.
* Gorilla Tape: To stick down the part of the velcro strap that holds the buckle in place.
* Double-Sided Tape and Adhesive Pads: To stick the accelerometers to the velcro straps.

## Software

The software that is used to aggregate and display the readings from the accelerometers is provided in the [this GitHub repository](https://github.com/patrickcapaldo/rheumactive). 

## Challenges

Serial Buffer
- Problem: The GUI was displaying the accelerometer measurements with a significant delay (>10 seconds) that only worsened the longer the system was running.
- Root Cause: After some debugging, I discovered that the serial buffer (a temporary storage space for data received through a serial port) was being overloaded as it building up quicker than the Python program could process and display it.
- Solution: Implementing a serial buffer flusher that resets the serial buffer once it exceeds a certain threshold (e.g., an arbitrary value of 1024 was used). This ensures that the buffer doesn't 'back-up' too much and keeps the most recent data close to the processing being done by the Python program before it is displayed in the GUI.
