import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Cardapio from "./components/pages/Cardapio";
import Contato from "./components/pages/Contato";
import Header from "./components/layout/Header";

function App() {
  return (
    
    <Router>
      <Header />
      

      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route  exact path="/Sobre" element={<Sobre />}  />
        <Route exact path="/Cardapio" element={<Cardapio />}  />
        <Route exact path="/Contato" element={<Contato />}  />
      </Routes>
    </Router>
  );
}


export default App;
