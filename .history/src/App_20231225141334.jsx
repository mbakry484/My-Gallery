
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'
import Sunsets from "./components/Sunsets";
const App=()=> {
  return (
    <div>
    <Router>
          <Header />
          R
    <Routes path="/sunsets" element={<Sunsets />}/>
          <Buttons />
          <Images />
    </Router>
  </div>
  )
} 

export default App
