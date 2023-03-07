import './Home.css'
import logoHome from './logoHome.png';
import Carousel from './Carousel'
import boy1 from './boy-2-1.png'
import boy2 from './boy-2-2.png'
import children1 from './boy-girl1.png'
import children2 from './boy-girl.png'
import {Link } from 'react-router-dom';

export default function Home(){
    return(
        <Carousel>
            <div className = "item item-1">
                <img src={logoHome }/>
            </div>
            <div className = "item item-2">
                <div className = "item-2-container">
                    <div>
                        <img src={boy1}/>
                    </div>
                    <div>
                        <p>Welcome to the world of toys!</p>
                    </div>
                    <div>
                        <img src={boy2}/>
                    </div>
                </div>
            </div>
            <div className = "item item-3">
                <div className='item-2-container'>
                    <img src={children2}/>
                    <div className='button'>
                        <Link to="shop">
                            <button>START SHOPPING!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

  
  
  
  