import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'; 
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from "./components/Login";
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Nav />
    <Routes>

    <Route element={ <PrivateComponent /> }>
    <Route path="/" element={<h1> This is Profile Page </h1>} />
    <Route path="/add" element={ <AddProduct /> } />
    <Route path="/logout" element={<h1> LogOut Page </h1>} />
    <Route path="/update/:id" element={ <UpdateProduct /> } />
    <Route path="/products" element={ <ProductList /> } />
    
    </Route>
    <Route path="/signup" element={ <SignUp />} />
    <Route path="/login" element={ <Login />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
