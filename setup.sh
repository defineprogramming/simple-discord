#!/bin/bash

# Update system packages
sudo apt-get update

# Install Python3 and Pip3
sudo apt-get install python3.8 python3-pip -y

# Install virtualenv
sudo pip3 install virtualenv

# Create a virtual environment
virtualenv venv

# Activate the virtual environment
source venv/bin/activate

# Install the dependencies from requirements.txt
pip3 install -r requirements.txt

# Run the application
python3 app/main.py