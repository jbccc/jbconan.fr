# OrangePI LLM Inference API

## Llama Inference on ARM Single-Board Computer

### Overview

Set up a Llama model inference API running on an Orange PI 5 with 32GB RAM using rkllm and FastAPI.

### Setup

- **Hardware**: Orange PI 5 (16GB RAM, NVMe SSD)
- **Model**: Llama model optimized for ARM architecture
- **Inference Engine**: rkllm for model execution
- **API Server**: FastAPI for network requests

### Implementation

1. Downloaded pre-trained Llama model compatible with rkllm
2. Configured rkllm on Orange PI 5 running Ubuntu 22.04 ARM64
3. Built FastAPI server to expose inference endpoints
4. Deployed as always-on local inference service

### Results

- Low-power, local LLM inference without cloud dependencies
- Reasonable latency for personal use and experimentation
- Network-accessible API for various applications 