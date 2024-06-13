# Weather-Application
The Weather Application provides real-time weather information based on current location and user-inputted city names.
## Table of Contents
-[Project Overview](#project-overview)
-[Features](#features)
-[Setup](#setup)
-[Usage](#usage)
-[Technologies Used](#technologies-used)
-[File Structure](#file-structure)
-[API Integration](#api-integration)
-[License](#license)
## Project Overview
The Weather Application is designed to offer users real-time weather information for any location they search for. It fetches data from the OpenWeather API and displays it in an intuitive and user-friendly interface.
## Features
- **Real-time Weather Data:** Fetches current weather data for any location.
- **Search Functionality:** Allows users to search for weather information by city name.
- **Responsive Design:** Adapts to various screen sizes for optimal viewing on all devices.
- **Interactive UI:** Utilizes Vite-React and Tailwind CSS for a modern, interactive user experience.
## Setup
### Prerequisites
- Node.js and npm (Node Package Manager) installed
- An API key from OpenWeather (https://openweathermap.org/api)
### Steps
1. Clone the repository:
   `git clone https://github.com/your-username/weather-app.git`
2. Navigate to the project directory:
   `cd weather-app`
3. Install the dependencies:
   `npm install`
4. Create a `.env` file in the root of the project and add your OpenWeather API key:
   `VITE_OPENWEATHER_API_KEY=your_api_key_here`
5. Start the development server:
   `npm run dev`
6. Open the application in your browser:
   `http://localhost:3000`
## Usage
- Enter a city name in the search bar and click "Search" or press Enter.
- View the current weather information displayed, including temperature, weather condition, humidity, and wind speed.
## Technologies Used
- **Vite:** Frontend tooling for faster builds and hot module replacement.
- **React:**  JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Node.js:**  JavaScript runtime for backend services.
- **OpenWeather API:**  API for fetching weather data.
- **JavaScript:** Programming language used for both frontend and backend.
- **HTML & CSS:**  Markup and styling of the application.
## File Structure
```bash
weather-app/
│
├── public/
│   └── vite.svg                
│
├── src/
│   ├── components/               # React components
│   │   ├── dropDownMenu.jsx      # Component for dropdown menu
│   │   ├── Forecast.jsx          # Component to display weather forecast
│   │   ├── Inputs.jsx            # Component for inputs
│   │   ├── TempAndDetails.jsx    # Component for temperature and weather details
│   │   ├── TimeAndLocation.jsx   # Component for time and location
│   │   └── TopButtons.jsx        # Component for top buttons
│   │
│   ├── assets/                   # Images and other assets
│   │   ├── backgroundVideo.mp4   # Background video for the app
│   │   └── weather-icon.png      # Weather icon
│   │
│   ├── services/                 # Services for API calls
│   │   └── weatherService.js     # Service for fetching weather data
│   │
│   ├── App.jsx                   # Main React component
│   ├── main.jsx                  # Entry point for React
│   └── index.css                 # Main CSS file
│
├── index.html                    # Main HTML file
├── package.json                  # NPM dependencies and scripts
├── package-lock.json             # NPM lock file
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite configuration
```
