Simple React Counter Application
This is a basic, yet feature-rich, counter application built with React. It demonstrates fundamental React concepts such as state management (useState), component composition, event handling, and conditional rendering, along with practical styling techniques using CSS Modules and custom fonts. It also includes a dark/light mode toggle and prevents the counter from going below zero.

Features
Increment/Decrement Counter: Buttons to increase and decrease the numerical count.

Reset Functionality: A button to reset the counter back to zero.

Non-Negative Count: The counter cannot decrease below 0.

Dark/Light Mode Toggle: A dedicated button to switch between light and dark themes for the counter's UI.

Component-Based Architecture: The theme toggle is extracted into its own reusable component (ThemeToggleButton).

CSS Modules: Styles are scoped to individual components using CSS Modules to prevent global style conflicts.

Custom Font Integration: Demonstrates how to load and apply a custom font to the application.

Image Icon: Includes an image icon displayed above the counter.

Technologies Used
React: A JavaScript library for building user interfaces.

CSS Modules: For scoped component-specific styling.

JavaScript (ES6+): For application logic.

Project Structure
my-counter-app/
├── public/
│   └── index.html               # Main HTML file
├── src/
│   ├── assets/
│   │   └── icon.png             # Image icon used in the Counter component
│   ├── fonts/
│   │   └── YourCustomFont.ttf   # Custom font file (replace with your own)
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global CSS for App (optional)
│   ├── Counter.jsx              # The core Counter component
│   ├── Counter.module.css       # CSS Modules for Counter component
│   ├── ThemeToggleButton.jsx    # Component for theme switching
│   ├── ThemeToggleButton.module.css # CSS Modules for ThemeToggleButton
│   └── index.js                 # React entry point
├── package.json                 # Project dependencies and scripts
└── README.md                    # This file

Setup and Running the Application
Follow these steps to get the project up and running on your local machine.

Prerequisites
Node.js (LTS version recommended)

npm or Yarn

Installation
Clone the repository (if applicable) or create a new React app:

If starting from scratch:

# Using Vite (recommended for speed)
npm create vite@latest my-counter-app -- --template react
cd my-counter-app
npm install

Or using Create React App:

npx create-react-app my-counter-app
cd my-counter-app
npm install

Place your assets:

Create a folder src/assets and place your image icon (e.g., icon.png) inside it.

Create a folder src/fonts and place your custom font file (e.g., YourCustomFont.ttf) inside it.

Create/Update the component files:

Create src/Counter.jsx and src/Counter.module.css.

Create src/ThemeToggleButton.jsx and src/ThemeToggleButton.module.css.

Update the content of these files with the code provided in the previous responses.

Update src/App.jsx:
Ensure your src/App.jsx imports and renders the Counter component:

import React from 'react';
import Counter from './Counter';
// import './App.css'; // Uncomment if you have global App styles

function App() {
return (
<div className="App">
<header className="App-header">
{/* You can add a global title here if you wish */}
</header>
<main>
<Counter />
</main>
</div>
);
}

export default App;

Update src/index.js (or src/main.jsx for Vite):
Ensure it renders the App component:

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css'; // Uncomment if you have global index styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

Running the Application
After setting up the files, run the development server:

# For Vite
npm run dev

# For Create React App
npm start

The application will open in your browser, typically at http://localhost:5173 (Vite) or http://localhost:3000 (Create React App).