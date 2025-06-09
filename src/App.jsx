import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/projects' element ={<Projects/>} />
      <Route path='contact' element ={<Contact/>}/>
    </Routes>
  </Router>
  )
}

export default App
