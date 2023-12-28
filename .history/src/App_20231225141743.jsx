
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'
import Sunsets from "./components/Sunsets";
const App=()=> {
  return (
    <div>
    <Router>
          <Route path="/" element={<App />} />
          <Routes path="/sunsets" element={<Sunsets />}/>
          <Header />
          <Buttons />
          <Images />
    </Router>
  </div>
  )
} 

export default App
