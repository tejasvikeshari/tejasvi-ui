import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Loader from './components/Loader'
import AnimatedBackground from './components/AnimatedBackground'
import CursorGlow from './components/CursorGlow'
import ScrollProgressBar from './components/ScrollProgressBar'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Journey from './components/Journey'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 })
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Experience />
        <Journey />
  
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
