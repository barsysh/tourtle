import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://en.wikipedia.org/wiki/Gal%C3%A1pagos_tortoise" target="_blank">
          <img src="https://i.pinimg.com/736x/7d/60/2e/7d602e2adf1c513ceed8cd19b5c1d217.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Chelonoidis niger</h1>
      <p className="read-the-docs">
           With lifespans in the wild of over 100 years, it is one of the longest-lived vertebrates. Captive Galapagos tortoises can live up to 177 years. For example, a captive individual, Harriet, lived for at least 175 years. Spanish explorers, who discovered the islands in the 16th century, named them after the Spanish galápago, meaning "tortoise".
      </p>
    </>
  )
}

export default App
