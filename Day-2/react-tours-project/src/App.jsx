import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
 <>
    <NavBar />
    <Hero />
    <About />
    <Services />
    <Tours  />
    <Footer  />
 </>
  )
}

export default App
