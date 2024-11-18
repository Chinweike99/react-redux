
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/login';
import Contact from './Components/Contact';
import { Provider } from 'react-redux';
import { store } from './Components/store';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/contact'}>Contact</Link>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
