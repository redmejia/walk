import './App.css';
import CatNav from './Components/CategorieNav/CatNav';
import NavBar from './Components/NavBar/NavBar';
import Product from './Components/Product/Product';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="product-navs">
        <CatNav />
        <Product />
      </div>
    </>
  );
}

export default App;
