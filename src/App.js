import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-oxford_blue-900 text-white' : 'bg-oxford_blue-100 text-oxford_blue-900'}`}>
      {/* Header */}
      <header className="bg-verdigris-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Aryan Pandey</h1>
        <h2 className="text-2xl mt-2">Software Developer</h2>
        <nav className="mt-4">
          <a href="#about" className="mx-4 hover:underline">About</a>
          <a href="#projects" className="mx-4 hover:underline">Projects</a>
          <a href="#skills" className="mx-4 hover:underline">Skills</a>
          <a href="#contact" className="mx-4 hover:underline">Contact</a>
          <button onClick={toggleDarkMode} className="ml-4 p-2">
            <i className={`fa ${darkMode ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
          </button>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4">
            Hello! I am Aryan Pandey, a passionate Software Developer with a knack for building user-friendly applications.
          </p>
        </div>
      </section>

      {/* Relevant Projects Section */}
      <section id="projects" className="flex-grow flex items-center justify-center p-6 bg-gray-200 dark:bg-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Relevant Projects</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1: Code Editor */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="font-bold">Code Editor</h3>
              <p className="mt-2">Code editor supporting HTML, CSS, JavaScript</p>
              <p>Instant output displayed alongside the code</p>
              <p>Simple, intuitive interface for beginners and professionals</p>
              <a href="https://github.com/ImAryanPandey/CodeEditor" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-verdigris-500 text-white px-4 py-2 rounded hover:bg-verdigris-600">View Project</a>
            </div>
            {/* Project 2: Netflix Clone */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="font-bold">Netflix Clone</h3>
              <p className="mt-2">Netflix clone built with HTML, CSS, JavaScript</p>
              <p>Enhanced my understanding of CSS</p>
              <p>Structured layout and clean design similar to the original platform</p>
              <a href="https://github.com/ImAryanPandey/NetflixClone" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-verdigris-500 text-white px-4 py-2 rounded hover:bg-verdigris-600">View Project</a>
            </div>
            {/* Project 3: Weather App */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="font-bold">Weather App</h3>
              <p className="mt-2">Fetches and displays real-time weather data from an API</p>
              <p>Provides hourly and 5-day forecasts based on city keyword or user's geolocation</p>
              <p>Clean UI with easy-to-read weather information</p>
              <a href="https://github.com/ImAryanPandey/WeatherWebApp" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-verdigris-500 text-white px-4 py-2 rounded hover:bg-verdigris-600">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Proficiencies Section */}
      <section id="skills" className="flex-grow flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Skills & Proficiencies</h2>
          <p className="mt-4">Proficient in HTML, CSS, JavaScript, and building intuitive user interfaces.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-4">Feel free to reach out via the links below.</p>
          <p className="mt-2">Phone: +91-783707xxxx</p>
          <p className="mt-2">Email: <a href="mailto:aryan513pandey@gmail.com" className="text-verdigris-500">aryan513pandey@gmail.com</a></p>
          <a href="https://www.linkedin.com/in/imaryanpandey" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-verdigris-500 text-white px-4 py-2 rounded hover:bg-verdigris-600">LinkedIn</a>
          <a href="https://github.com/ImAryanPandey" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-verdigris-500 text-white px-4 py-2 rounded hover:bg-verdigris-600 ml-4">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-oxford_blue-700 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Aryan Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
