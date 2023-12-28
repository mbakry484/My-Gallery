import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Sunsets from "./pages/Sunsets";
import Animals from "./pages/Animals";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/sunsets" element={<Sunsets />} /> 

        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
