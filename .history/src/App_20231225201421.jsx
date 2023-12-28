import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Buttons from './components/Buttons'
import Images from './components/Images'
import Sunsets from "./pages/Sunsets";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={ <Header />} />
          <Route path="/sunsets" element={<Sunsets />} /> 
        </Routes>
        <Header />
        <Buttons />
        <Images />
      </Router>
    </div>
  );
};

export default App;
