---
layout: page
title: AI Ops Simulator
description: A text-based command-line tool providing interactive tutorials on AI Operations tools and concepts, enabling hands-on learning in a safe, simulated environment.
img: assets/img/projects/ai_ops_simulator/ai_ops_simulator_cover.png
importance: 1
category: fun
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/ai_ops_simulator/ai_ops_cover.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Command-line interface for practicing AI Ops concepts and tools without risk.
</div>

# Purpose

The **AI Ops Simulator** is a **command-line training tool** that helps learners explore and practice the fundamentals of AI Operations (AI Ops).  
It provides **interactive, text-based tutorials** that simulate real-world scenarios with popular infrastructure and machine learning tools, all without the risks of deploying on live systems.  

By combining hands-on learning with a safe environment, it’s ideal for developers, researchers, and students who want to gain confidence in AI Ops workflows.

# Concept

The simulator offers a structured way to learn by walking through **practical tutorials**. Each tutorial focuses on a single tool or concept, allowing learners to:

- Execute commands in a **mock environment**.  
- See **immediate feedback** and explanations.  
- Understand the workflow behind managing **AI infrastructure and workloads**.  

# Features

- **Interactive CLI Tutorials** – Step-by-step instructions with feedback.  
- **Tool-Specific Modules** – Tutorials cover key AI Ops tools:  
  - **Kubernetes** – Container orchestration basics.  
  - **Kubeflow** – MLOps pipelines and workflow management.  
  - **Terraform** – Infrastructure as Code concepts.  
  - **JAX** – Accelerated numerical computing.  
  - **PyTorch** – Model training and deployment.  
  - **ONNX** – Model optimization and interoperability.  
- **Simulated Environments** – Commands execute in safe, mock setups.  
- **Documentation Integration** – Quick access to reference material during tutorials.  

# Tutorials

The simulator includes a growing collection of **interactive tutorials**.  
Users can explore them by typing:

```bash
tutorial
tutorial list – View available tutorials

tutorial show <ID> – Inspect the skills covered

tutorial start <ID> – Begin a tutorial

Installation & Setup
To get started, clone the repository and set up a Python environment:

```bash
git clone https://github.com/patrickcapaldo/ai-ops-simulator
cd ai-ops-simulator
```

# Create a virtual environment:

```bash
# Linux/macOS
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
.\venv\Scripts\activate
```

# Install the dependencies:

```bash
pip install -r requirements.txt
```

# Usage
Start the simulator with:

```bash
python src/main.py
```

Once running, explore tutorials or practice simulated commands directly.

## Example Commands

The simulator includes mock commands for different tools, allowing safe experimentation:

- Kubernetes: `kubectl apply -f <file>`
- Kubeflow: `kfp run submit <file>`
- Terraform: `terraform plan`, `terraform apply`, `terraform destroy`
- JAX: `jax.jit(<function>)`
- PyTorch: `submit <job_id> <node_id>`, `debug <job_id>`
- ONNX: `convert-onnx <job_id>`

## Help

Enter the following to view available commands, or use exit to quit the application:

```bash
help
```

## GitHub

Click <a href='https://github.com/patrickcapaldo/ai-ops-simulator'>here</a> to find the source code on GitHub.