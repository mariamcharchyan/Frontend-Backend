import Categories from './Categories/Categories'
import MainBoxToys from './MainBoxToys/MainBoxToys'
import MainFeatured from './MainFeatured/MainFeatured';



export default function Main({boxToysData, handelAddProduct}) {
return(
<>
<main className="App-main">
<div className="box">
    <div className="cat-feat">
        <div className="categories">
            <h3>Categories</h3>
            <Categories />
        </div>
        <div className="featured">
            <h3>Featured</h3>
            <MainFeatured />
        </div>
    </div>
    <div id="box-toys" className="box-toys">
        <MainBoxToys boxToysData={boxToysData} handelAddProduct={handelAddProduct}/>
    </div>
</div>
</main>
</>
);
}