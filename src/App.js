
import './style.css';
import {Nav} from './components/Nav'
// import { Hero } from './components/Hero';
// import { Banner } from './components/Banner';
// import { News } from './components/News'
// import { Products } from './components/Products';
// import { Footer } from './components/Footer';
import { Categories } from './pages/Categories';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { Home } from './pages/Home'; 
import { ProductPage } from './pages/ProductPage';
import { All } from './categories/All';
import { Electronics } from './categories/Electronics';
import { Furniture } from './categories/Furniture';
import { Lamps } from './categories/Lamps';
import { Kitchen } from './categories/Kitchen';
import { Chairs } from './categories/Chairs';
import { Skincare } from './categories/Skincare';

 

function App() {
  return (
    <div className="App">
      
       {/* <Hero/>
      <Products/>
       <Banner/>
      <News/>
      <Footer/> 
      <Categories/> */}
      
       < Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='categories' element={<Categories/>}>
                <Route path='all' element={ <All />}/>
                <Route path='furniture' element={<Furniture/>}/>
                <Route path='electronics' element={<Electronics/>} />
                <Route path='lamps' element={<Lamps/>}  />
                <Route path='kitchen' element={<Kitchen/>}  />
                <Route path='chairs' element={<Chairs/>}  />
                <Route path='skin-care' element={<Skincare/>}  />
                <Route path='*' element={<h1>Error</h1>}  />
          </Route>
          <Route path='productpage' element={<ProductPage/>} >
            <Route path=':id' element={<ProductPage/>} />
          </Route>
        </Routes>
      

    </div>
  );
}

export default App;
