# 🌦️ AWS Weather Dashboard

A serverless weather dashboard built with React for the frontend and AWS services for the backend. This project demonstrates how to build and deploy a full-stack cloud application using modern web technologies and Amazon Web Services.

## 📌 Features

- 🔍 Search for any city worldwide and view current weather conditions
- 🌡️ Display temperature, feels-like, min/max values, humidity, wind, and pressure
- 🌦️ Show weather icons and descriptions for better visualization
- 🎨 Modern UI with animated backgrounds and gradient text effects
- ☁️ Fully deployed on AWS using serverless architecture

## 🏗️ Architecture

This project follows a serverless architecture using AWS:

- Frontend:
  - Built with React (JavaScript, HTML, CSS)
  - Deployed on AWS S3 (static website hosting)
  - Served globally via AWS CloudFront for performance and HTTPS
- Backend:
  - AWS Lambda function fetches weather data from the OpenWeatherMap API
  - AWS API Gateway exposes the Lambda as a secure REST endpoint
  - CORS configured for frontend ↔ backend communication
- Other AWS Services:
  - IAM Roles/Policies for secure Lambda execution
  - CloudWatch Logs for monitoring Lambda

 ## 🛠️ Technologies Used

- Frontend:
  - React (with components, hooks, and Axios for API calls)
  - CSS for styling (custom + animations)
- Backend:
  - AWS Lambda (Node.js runtime)
  - API Gateway (HTTP API)
  - Axios (for calling OpenWeather API from Lambda)
- Cloud Deployment:
  - AWS S3 (static frontend hosting)
  - AWS CloudFront (CDN + HTTPS)
  - AWS IAM (permissions)
  - AWS CloudWatch (logs/monitoring)
 
## 🚀 How It Works

1. The user enters a city in the React frontend
2. The frontend makes a request to API Gateway
3. API Gateway triggers the Lambda function
4. The Lambda function calls the OpenWeatherMap API with the city name
5. Weather data is returned back to the frontend and displayed in a styled card

# 📷 Screenshots
