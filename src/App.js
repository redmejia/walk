import './App.css';
import Cards from './Components/Cards/Cards';
import CatNav from './Components/CategorieNav/CatNav';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <CatNav />
      <Cards />
      <div className="App">
        <h1>hello, world.!</h1>
      </div>
    </>
  );
}

export default App;
