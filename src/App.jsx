import './App.css'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Service from "./Components/Service/Service"
import Project from "./Components/Project/Project"
import Testimonial from './Components/Testimonial/Testimonial'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'


function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <Service/>
      <Project/>
      <Testimonial/>
      <Team/>
      <Contact/>
    </>
  )
}

export default App
