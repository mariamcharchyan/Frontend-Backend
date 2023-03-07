import { Link } from 'react-router-dom';
// import BoxToysData from './BoxsToysData';
import { useEffect, useState } from 'react';

export default function MainBoxToys(){
const [boxToysData, setBoxToysData] = useState([]);
useEffect(() => {
    fetch('http://localhost:3001')
    .then(res => res.json())
    .then(data => setBoxToysData(data))

},[])
    return(
        <>
        {boxToysData.map((toy, index) => (
        <Link to = {`/shop/${toy.id}`} key={index} >
            <div className='box-toy'>
                <img src={toy.img}/>
                <h4>{toy.name}</h4>
                <p>$ {toy.price} USD</p>
            </div>
        </Link>
            
        ))}
        </>
    )
    
}