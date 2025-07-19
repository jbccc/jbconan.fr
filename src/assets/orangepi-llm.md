# OrangePI LLM Inference Setup

## Self-hosted Large Language Model Inference on ARM

### Project Overview

This project involves setting up inference for Large Language Models on an ARM-based single-board computer, specifically using an Orange PI 5 device. I downloaded a pre-trained model, ran inference using rkllm, and served it through the network using FastAPI.

### Motivation

The goal was to create an affordable, energy-efficient setup for running LLM inference locally on edge hardware, avoiding cloud dependencies for personal use and experimentation.

### Technical Architecture

#### Hardware Setup
- **Primary Node**: Orange PI 5 with 32GB RAM
- **Storage**: NVMe SSD for fast model loading
- **Networking**: Gigabit Ethernet for serving inferences

#### Software Stack
- **Base OS**: Ubuntu 22.04 LTS for ARM64
- **Inference Engine**: rkllm for model execution
- **Model Serving**: FastAPI-based server for network access
- **Monitoring**: Basic system monitoring

### Key Steps and Implementation

#### Model Acquisition
- Downloaded a pre-trained LLM model suitable for ARM architecture

#### Inference Setup
- Installed and configured rkllm on the Orange PI 5
- Loaded the downloaded model into rkllm
- Ran initial inference tests to verify functionality

#### Network Serving
- Implemented a FastAPI server to expose the inference endpoint
- Configured the server to handle requests over the local network
- Added basic authentication and rate limiting

### Results

- Successfully ran inference on downloaded models
- Achieved reasonable latency for local network requests
- Power consumption: Low wattage suitable for always-on operation

### Applications

- Personal AI assistant for various tasks
- Local development and testing of LLM applications
- Educational tool for understanding LLM inference on edge devices

### Technical Specifications

- **Model Support**: Compatible with models optimized for rkllm
- **Inference Speed**: Dependent on model size and hardware
- **Concurrent Users**: Handles multiple requests via FastAPI

### Future Improvements

- Optimize for larger models
- Add support for model fine-tuning
- Improve monitoring and logging
- Explore clustering multiple Orange PI devices

### Repository

The setup scripts, FastAPI server code, and configuration files are available in the project repository. 