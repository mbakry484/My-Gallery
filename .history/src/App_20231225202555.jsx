import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Sunsets from "./pages/Sunsets";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Sunsets />} /> 
          <Route path="/sunsets" element={<Sunsets />} /> 
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
