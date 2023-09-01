import logo from './logo.svg';
import './App.css';
import Forms from './components';
import Login from './components/Login';
import {Route, BrowserRouter as Router, Routes} from'react-router-dom';
import User from './components/user';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Routes>
      <Route exact path="/"  element={<Login />} />
      <Route path="/forms"  element={<Forms/>} />
      <Route path="/user"  element={<User/>} />
      </Routes>
      </Router>
     
    </div>
    
  );
}

export default App;
