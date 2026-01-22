import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Services } from './components/Services'

function App() {


  return (
   <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
