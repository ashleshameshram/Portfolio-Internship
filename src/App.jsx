import Navbar from "./Navbar.jsx"
import Home from './component/Home.jsx'
import AboutMe from './component/AboutMe.jsx'
import Skills from './component/Skills.jsx'
import Project from './component/Project.jsx'
import Contact from './component/Contact.jsx'

function App() {
  return (
   <>
    <Navbar /> 
    <main>
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </main>
   </>
  )
}

export default App
