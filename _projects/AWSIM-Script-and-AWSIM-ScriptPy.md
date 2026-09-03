---
layout: page
title: 'AWSIM-Script and AWSIM-ScriptPy: Scenario specification languages for ADSs'
description: 
# img: assets/img/projects/benchmark-uturn.jpg
importance: 3
category: ads
related_publications: true
---

AWSIM-Script {% cite TranIEEETR2025 %} and AWSIM-ScriptPy {% cite TranCOMPSAC2026 %} are two scenario specification languages designed for autonomous driving simulation, particularly focusing on the Autoware platform with [AWSIM](https://github.com/fomaad/AWSIM-ScriptPy) and [AWSIM-Labs](https://github.com/duongtd23/AWSIM-Labs) simulators. 

AWSIM-Script was developed as a domain-specific language (DSL) with its own syntax and semantics. The language usage with a scenario specification example are available at [this GitHub repository](https://github.com/fomaad/AWSIM-ScriptPy/blob/main/Origin-AWSIM-Script.md).

A limitation of AWSIM-Script is that: when the user want to extend the language with, for example, new driving behaviors, the user needs to modify the language grammar (defined in ANTLR4) and recompile the language parser, and the whole simulator (as AWSIM-Script was implemented directly inside the AWSIM-Labs simulator). To address this limitation, AWSIM-ScriptPy was developed, adopting a
client–simulator architecture, in which AWSIM-Labs/AWSIM act as a simulation server while scenario descriptions and control logic are executed on the client side. Users can compose complex behaviors using modular actions, define custom statebased triggers, and dynamically interact with the simulator entirely from the client side based on Python.
For more details about AWSIM-ScriptPy, please refer to the [AWSIM-ScriptPy GitHub repository](https://github.com/fomaad/AWSIM-ScriptPy).

### Autoware+AWSIM Docker environment 
If you would like to have a ready-to-run Autoware+AWSIM environment to try out the scenario specification language, please check out our provided Docker image with instructions here: [https://github.com/fomaad/AWSIM#docker-image-with-awsim-and-autoware](https://github.com/fomaad/AWSIM#docker-image-with-awsim-and-autoware). This Docker image contains pre-installed Autoware and AWSIM simulator so that you can run the example scenarios provided in the AWSIM-ScriptPy repository without any additional setup.