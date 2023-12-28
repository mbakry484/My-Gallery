import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'
import Sunsets from "./pages/Sunsets";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sunsets" element={<Sunsets />} /> 
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
