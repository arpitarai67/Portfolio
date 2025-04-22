import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Skills from "./pages/Skills"
import Layout from "./pages/Layout"

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element = {<Home />}></Route>
          <Route path="/about" element = {<About />}></Route> 
          <Route path="project" element = {<Project />}></Route>
          <Route path="skills" element = {<Skills />}></Route>
          <Route path="contact" element = {<Contact />}></Route>
          <Route path = "*" element = {<Error/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

