import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from './pages/Login';
import Logado from './pages/Logado';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';
import Admin from './pages/Admin';
import EditUser from './pages/EditUser';


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cadastro" element={ <Cadastro/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/logado" element={ <Logado/> }/>
                <Route path="/carrinho/:id" element={ <Carrinho/> }/>
                <Route path="/pagamento" element={ <Pagamento/> }/>
                <Route path="/wp-admin" element={ <Admin/> }/>
                <Route path="/edituser/:id" element={ <EditUser/> }/>              
            </Routes>
        </BrowserRouter>

  );
}

export default App;
