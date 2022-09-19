import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from './pages/Login';
import Logado from './pages/Logado';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cadastro" element={ <Cadastro/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/logado" element={ <Logado/> }/>
                <Route path="/carrinho" element={ <Carrinho/> }/>
            </Routes>
        </BrowserRouter>

  );
}

export default App;
