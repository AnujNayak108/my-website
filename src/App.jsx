import React from 'react'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  return (
    <div>
      <div className="bg-slate-900 lg:w-screen">
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
