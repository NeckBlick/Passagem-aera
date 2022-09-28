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
import Assento from './pages/Assento';


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
<<<<<<< HEAD
                <Route path="/edituser/:id" element={ <EditUser/> }/>              
                <Route path="/assento" element={ <Assento/> }/>              
=======
                <Route path="/edituser/:id" element={ <EditUser/> }/>           
>>>>>>> 54069b1940aa2d3e70d6268428974ff091f9d222
            </Routes>
        </BrowserRouter>

  );
}

export default App;
