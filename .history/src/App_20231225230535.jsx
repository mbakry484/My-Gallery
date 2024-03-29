import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Sunsets from "./pages/Sunsets";
import Animals from "./pages/Animals";
import Insects from "./pages/Insects";
import Randoms from "./pages/Randoms";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/sunsets" element={<Sunsets />} /> 
          <Route path=/animals" element={<Animals />}

        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
