
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'

const App=()=> {
  return (
    <div>
    <Router>
    <Link to="/">
          <Header />
          </Link>
    <Routes path="/sunsets" element/>
          <Buttons />
          <Images />
    </Router>
  </div>
  )
} 

export default App
