import React from "react"
import Header from "./components/sections/header/Header"
import Hero from "./components/sections/hero/Hero"
import Services from "./components/sections/services/Services"
import About from "./components/sections/about/About"

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[var(--color-5)] via-[var(--color-4)] to-[var(--color-3)] scroll-smooth'>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </div>

    
  )
}

export default App
