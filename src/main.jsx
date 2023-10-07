import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/header/Header.jsx'
import Formation from './components/formation/Formation.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skill from './components/skills/Skill.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Formation />
    {/* <Projects /> */}
    <Skill />
  </React.StrictMode>,
)
