import './App.css';
import Header from './Header/Header';
import Aboute from './Header/Header-komponents/Aboute/Aboute';
import Home from './Header/Header-komponents/Home/Home';
import Footer from './Footer/Footer';
import { Routes, Route} from 'react-router-dom';
import Main from './Main/Main';
import MainBoxToysCard from './Main/MainBoxToys/MainBoxToysCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from './Header/Header-komponents/Subscribe/LoginForm/LoginForm';
import LoggedIn from './Header/Header-komponents/Subscribe/Loggedin/Loggedin';
import Basket from './Header/Header-komponents/Basket/Basket';





function App() {
  //from MainBoxToys data
  const [boxToysData, setBoxToysData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001')
    .then(res => res.json())
    .then(data => setBoxToysData(data))
  },[])

  //from card
  const [cartItems, setCartItems] = useState([]);
  const handelAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) =>item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const handelRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id 
          ? {...ProductExist, quantity: ProductExist.quantity - 1}
          : item
        )
      );
    }
  }
const handeleCartClearance = () => {
  setCartItems([]);
}
  //Aboute LoginForm and LoggedIn components
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Main boxToysData={boxToysData} handelAddProduct={handelAddProduct}/>}/>
          <Route path='/shop/:id' element={<MainBoxToysCard />}/>
          <Route path='/aboute' element={<Aboute />}/>
          <Route path='/subscribe' element={isLoggedIn ? (
            <LoggedIn setIsLoggedIn={setIsLoggedIn}/>
            ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
          )}/>
          <Route path='/basket' element={<Basket 
                                            cartItems={cartItems} 
                                            setCartItems={setCartItems} 
                                            handelAddProduct={handelAddProduct} 
                                            handelRemoveProduct={handelRemoveProduct}
                                            handeleCartClearance={handeleCartClearance}
                                            />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
