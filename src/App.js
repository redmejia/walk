import './App.css';
import Products from './Components/Products/Products';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductNav from './Components/ProductNav/ProductNav';
import GoHome from './Components/GoHome/GoHome';



const App = () => {
  return (
    <>
      <Router>
        <GoHome />
        <Switch>
          <Route exact path="/">
            <ProductNav />
            <Welcome />
          </Route>
          <Route>
            <Products />
          </Route>
        </Switch>
      </Router>
        </>
  );
}

export default App;
