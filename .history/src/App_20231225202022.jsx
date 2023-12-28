import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'
import Sunsets from "./pages/Sunsets";


const App = () => {
  return (
    <div>
      <rBrowserouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sunsets" element={<Sunsets />} /> 
        </Routes>
        <Header />
        <Buttons />
        <Images />
      </rBrowserouter>
    </div>
  );
};

export default App;
