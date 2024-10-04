import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import OurServices from './Components/OurServices'
import OurClints from './Components/OurClints'
import ContactForm from './Components/Contact'
import Footer from './Components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
    <div className="containt">
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <OurServices />
      </section>

      <section id="clients">
        <OurClints />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </div>
    <Footer />
    </Router>
    
  </StrictMode>
);