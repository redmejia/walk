import './App.css';
import Products from './Components/Products/Products';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductNav from './Components/ProductNav/ProductNav';



const App = () => {
  return (
    <>
      <Router>
        <ProductNav />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route>
            <Products />
          </Route>
        </Switch>
      </Router>
      {/* user register/login */}
    </>
  );
}

export default App;
