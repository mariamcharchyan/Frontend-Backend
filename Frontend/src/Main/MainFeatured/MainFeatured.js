import f1 from './pictures/f1.jpg'
import f2 from './pictures/f2.jpeg'
import f3 from './pictures/f3.jpeg'

export default function MainFeatured(){
    return(
        <>
            <div className="box-featured1">
                <div className="box-featured2">
                    <img src={f1} alt="" />
                </div>  
                <div className="box-featured3">  
                    <p className="toy-name-featured">Developing cabin</p>
                    <p className="toy-value-featured">$ 50 USD</p>
                </div>
            </div>  
            <div className="box-featured1">
                <div className="box-featured2">
                    <img src={f2} alt="" />
                </div>  
                <div className="box-featured3">  
                    <p className="toy-name-featured">Ice cream machine</p>
                    <p className="toy-value-featured">$ 70 USD</p>
                </div>
            </div> 
            <div className="box-featured1">
                <div className="box-featured2">
                    <img src={f3} alt="" />
                </div>  
                <div className="box-featured3">  
                    <p className="toy-name-featured">Mini kitchen</p>
                    <p className="toy-value-featured">$ 100 USD</p>
                </div>
            </div> 
        </>
    )
}