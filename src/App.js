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
      {/* <div className="App">
        <h1>hello, world.!</h1>
      </div> */}
    </>
  );
}

export default App;
