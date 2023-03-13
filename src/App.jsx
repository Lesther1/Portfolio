import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

function App() {


  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  )
}

export default App
