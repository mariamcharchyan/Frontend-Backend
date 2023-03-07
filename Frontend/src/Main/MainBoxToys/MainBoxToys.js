import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MainBoxToys({boxToysData, handelAddProduct}){
// const [boxToysData, setBoxToysData] = useState([]);
// useEffect(() => {
//     fetch('http://localhost:3001')
//     .then(res => res.json())
//     .then(data => setBoxToysData(data))
// },[])
    return(
        <>
        {boxToysData.map((toyData, index) => (
        
            <div className='box-toy' key={index} >
                <Link to = {`/shop/${toyData.id}`}>
                <img src={toyData.img}/>
                </Link>
                <h4>{toyData.name}</h4>
                <p>$ {toyData.price} USD</p>
                <div className="product-add">
                    <button 
                        className="product-add-button"
                        onClick={() => handelAddProduct(toyData)}
                    > 
                        Add to Cart
                    </button>
                </div>
            </div>
        
            
        ))}
        </>
    )
    
}