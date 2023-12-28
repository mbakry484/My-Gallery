
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'
import Sunsets from "./components/Sunsets";
const App=()=> {
  return (
    <div>
    <Router>
          <Routes path="/" element={<App />} />
          <Routes path="/sunsets" element={<Sunsets />}>
            
            </Routes>
          <Header />
          <Buttons />
          <Images />
    </Router>
  </div>
  )
} 

export default App
