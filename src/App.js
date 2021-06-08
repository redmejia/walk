import './App.css';
import Products from './Components/Products/Products';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductNav from './Components/ProductNav/ProductNav';
import TopNav from './Components/TopNav/TopNav';

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
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
