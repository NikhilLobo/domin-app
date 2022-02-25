import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
              <Route exact path="/" element ={<Home />}/>
              <Route exact path="/dashboard" element ={<Dashboard />}/>
              <Route exact path="/add" element ={<AddProduct />}/>
              <Route exact path="/collections/:id" element ={<ProductDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
