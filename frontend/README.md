# Task Management App

This is a simple Task Management web application with a Node.js/Express backend and a React (CDN) frontend.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)

## Getting Started

### 1. Backend Setup

1. Open a terminal and navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run at [http://localhost:3000](http://localhost:3000).

### 2. Frontend Setup

1. Open the `frontend/index.html` file directly in your web browser (e.g., Chrome, Firefox, Edge).
   - No build step or server is required for the frontend.
   - Make sure the backend server is running before using the frontend.

## Usage

- The frontend will connect to the backend at `http://localhost:3000` for all API requests.
- You can create, update, and delete tasks using the web interface.

## Project Structure

```
Task Management App/
  backend/         # Node.js/Express backend
    package.json
    server.js
  frontend/        # React (CDN) frontend
    index.html
```

## Notes
- The backend uses in-memory storage; tasks will be lost when the server restarts.
- The frontend uses React, Axios, and Tailwind CSS via CDN links in `index.html`.

## License

This project is licensed under the ISC License. 