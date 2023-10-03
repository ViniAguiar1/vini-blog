import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import '../style.css'
import userImage from './img/user.svg'
import viniPhoto from './img/vini1.jpeg'
import viniPhoto2 from './img/vini2.jpg'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    </>
  )
}

export default App
