import './App.css';
import Search from './Components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ShoppingList from "./Components/ShoppingList";
import AllProducts from "./Components/Products";

function App() {
  return (
    <div>
      <Navbar className="bg-body-tertiary navbar" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/walmart-logo-png-6.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <b>WalSmart</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App bg main-content" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/home" element={<Search />}  />
            <Route path="/list" element={<ShoppingList />} />
            <Route path="/items" element={<AllProducts item = 'cotton' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
