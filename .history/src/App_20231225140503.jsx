
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'

const App=()=> {
  return (
    <div>
    <Router>
      
          <Header />
          <Buttons />
          <Images />
    </Router>
  </div>
  )
} 

export default App
