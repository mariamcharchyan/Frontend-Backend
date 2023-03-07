import './App.css';
import Header from './Header/Header';
import Aboute from './Header/Header-komponents/Aboute/Aboute';
import Home from './Header/Header-komponents/Home/Home';
import Footer from './Footer/Footer';
import { Routes, Route} from 'react-router-dom';
import Main from './Main/Main';
import MainBoxToysCard from './Main/MainBoxToys/MainBoxToysCard';
import { useState } from 'react';
import LoginForm from './Header/Header-komponents/Subscribe/LoginForm/LoginForm';
import LoggedIn from './Header/Header-komponents/Subscribe/Loggedin/Loggedin';
import Basket from './Header/Header-komponents/Basket/Basket';





function App() {
  //Aboute LoginForm and LoggedIn components
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Main />}/>
          <Route path='/shop/:id' element={<MainBoxToysCard />}/>
          <Route path='/aboute' element={<Aboute />}/>
          <Route path='/subscribe' element={isLoggedIn ? (
            <LoggedIn setIsLoggedIn={setIsLoggedIn}/>
            ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
          )}/>
          <Route path='/basket' element={<Basket />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
