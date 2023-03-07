import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';




export default function MainBoxToysCard(){
    
    const {id} = useParams();

    const [boxToysDataCard, setBoxToysDataCard] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/toy/'+id)
        .then(res => res.json())
        .then(data => setBoxToysDataCard(data))
    },[])
    // const toy=boxToysData

    //+,-
            // const [productQuantity, setProductQuantity] = useState(1);
            //     const handleIncrement = () => {
            //         setProductQuantity(productQuantity + 1);
            //     };
            //     const handleDecrement = () => {
            //         setProductQuantity(productQuantity - 1);
            //         if (productQuantity<=1){
            //             setProductQuantity(1);
            //         }
            //     };
    
    // zambyuxi hamr
        // const [totalQuantity, setTotalQuantity] = useState(0);
        // const handleButtonClick = () => {
        // setTotalQuantity(totalQuantity + productQuantity);
        // };
    // console.log(totalQuantity);
    // console.log(productQuantity);
    
    return(
        <div key={boxToysDataCard.id} className='box-toy-cards'>
            <div className='box-toy-card-columns'>
                <div className='box-toy-card-column-1'>
                    <img src={boxToysDataCard.img}/>
                </div>
                <div className='box-toy-card-column-2'>   
                    <h4>{boxToysDataCard.name}</h4>
                    <h3>Description</h3>
                    <hr/>
                    <p>{boxToysDataCard.description}</p>
                    <p className = "price">$ {boxToysDataCard.price} USD</p>
                    {/* productQuantity*
                    <div className='productQuantity'>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={productQuantity}  />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                        <button className='button' onClick={handleButtonClick}>Add To Card</button>
                        <p>Card` {totalQuantity}</p> */}
                </div>
            </div>   
        </div>
    )
    
}