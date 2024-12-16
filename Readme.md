# Robo App

A web application built with **React** and **Tailwind CSS** for the frontend, **FastAPI** for the backend, and **Socket.IO** for real-time communication.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

---

## Features

- **Frontend**: Built with React and styled using Tailwind CSS.
- **Backend**: Powered by FastAPI.
- **Real-Time Communication**: Implemented using Socket.IO.

---

## Prerequisites

Ensure you have the following installed:

1. **Node.js** (v14 or higher)
2. **Python** (v3.9 or higher)
3. **pip** (Python package manager)
4. **Virtual Environment** (optional but recommended for Python)
5. **Git** (for version control)

---

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000` by default.

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:

   ```bash
   uvicorn main:app --reload
   ```

The backend will run on `http://127.0.0.1:8000` by default.

---

## Running the Project

1. Ensure both the frontend and backend are running:

   - Frontend: `http://localhost:3000`
   - Backend: `http://127.0.0.1:8000`

2. Verify that Socket.IO is working correctly by checking real-time interactions between the frontend and backend.

---


## Usage

1. Open the frontend at `http://localhost:3000`.
2. Interact with the application to see real-time updates via Socket.IO.
3. Check API responses from the backend at `http://127.0.0.1:8000/docs` (FastAPI Swagger UI).

---

## Technologies Used

- **Frontend**:

  - React
  - Tailwind CSS

- **Backend**:

  - FastAPI
  - Python

- **Real-Time Communication**:

  - Socket.IO

---

