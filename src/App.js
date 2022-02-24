import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
              <Route exact path="/" element ={<Home />}/>
              <Route exact path="/dashboard" element ={<Dashboard />}/>
              {/* <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
