
import logo from './logo.png';
import basket from './basket.png';
import {Link } from 'react-router-dom';
import { TfiAlignJustify } from "react-icons/tfi";
import { GoX } from "react-icons/go";
import { useState } from 'react';


export default function Header({cartItems}) {

    const [isMobile, setIsMobile] = useState(false);
    return(
    <><header className="App-header">
        <div className="nav_Bar">
            <div className="nav_Bar_Left">
                <div className="nav-Left_Items">
                    <div className="nav-img">
                        <img src= {logo} className="brand-logo" alt="Logo"/>
                    </div>
                    <div className="nav-Left-Text">
                        <Link to="/" className="link">Home</Link>
                        <Link to="shop" className="link">Shop</Link>
                        <Link to="#" className="link">Blog</Link>
                        <Link to="aboute" className="link">About</Link>
                        <Link to="#" className="link">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="nav_Bar_Right">
                <div className="nav-Right_Items">
                    <div className="nav-Right-Text">
                        <Link to="subscribe" className="link">Subscribe</Link>
                        <Link to="#" className="link">FAQ</Link>
                    </div>
                    <div className="nav-Right_Input">
                        <input  className="search-box" type="text"  placeholder="Search"/>
                    </div>
                    <Link to="basket" className="nac_basket">
                        <div className="nac_basket-img">
                            <img src={basket} className="basket-img" alt=""/>
                            <div id="basket">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>


            {/* responsiv-1-- */}

            <div className='dropdown-nav-Right_Items'>
                <div className="nav-Right_Items">
                    <div className="nav-Right-Text">
                        <Link to="subscribe" className="link">Subscribe</Link>
                        <Link to="#" className="link">FAQ</Link>
                    </div>
                    <div className="nav-Right_Input">
                        <input  className="search-box" type="text"  placeholder="Search"/>
                    </div>
                    <Link to="basket" className="nac_basket">
                        <div className="nac_basket-img">
                            <img src={basket} className="basket-img" alt=""/>
                            <div id="basket">
                            {cartItems.length === 0 ? "" : cartItems.length}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
           

           {/* responsiv-1-for-mobile */}

            <div className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<GoX className='nav-bar-icon'/>
                ) : (
                <TfiAlignJustify className='nav-bar-icon'/>)}
            </div> 
            
        </div>
        <div className={isMobile ? 'dropdown-nav-bar':'dropdown-nav'}>
            <div className='dropdown-nav-bar-box'>
                <Link to="/" className="link">Home</Link>
                <Link to="shop" className="link">Shop</Link>
                <Link to="#" className="link">Blog</Link>
                <Link to="aboute" className="link">About</Link>
                <Link to="#" className="link">Contact</Link>
                <br/>
                <Link to="subscribe" className="link">Subscribe</Link>
                <Link to="#" className="link">FAQ</Link>
                <br/>
                <input  className="search-box" type="text"  placeholder="Search"/>
                <br/>
                <Link to="basket" className="nac_basket">
                    <div className="nac_basket-img">
                        <img src={basket} className="basket-img" alt=""/>
                        <div id="basket">
                            {cartItems.length === 0 ? "" : cartItems.length}
                        </div>
                    </div>
                </Link>    
            </div>
        </div>
        </header>
    </>
);
}