import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Sunsets from "./components/pages/Sunsets";
import Animals from "./components/pages/Animals";
import Insects from "./components/pages/Insects";
import Randoms from "./components/pages/Randoms";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <header></header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/sunsets" element={<Sunsets />} /> 
          <Route path="/animals" element={<Animals />} />
          <Route path="/insects" element={<Insects />} />
          <Route path="/randoms" element={<Randoms />} />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
