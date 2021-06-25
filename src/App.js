import './App.css';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductNav from './Components/ProductNav/ProductNav';
import TopNav from './Components/TopNav/TopNav';
import Product from './Components/Product/Product';

import WomensBoots from './Components/Categories/Womens/WomensBoots'
import Heels from './Components/Categories/Womens/Heels';
import MensBoots from './Components/Categories/Mens/MensBoots';
import Sport from './Components/Categories/Mens/Sport';
import Promo from './Components/Promos/Promo';
import MyOrders from './Components/MyOrders/MyOrders';

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
        <ProductNav />
        <Switch>
          <Route exact path="/" component={Welcome} />

          {/* Womens categorie */}
          <Route path="/womens/boots" component={WomensBoots} />
          <Route path="/heels" component={Heels} />

          {/* Mens categorie */}
          <Route path="/mens/boots" component={MensBoots} />
          <Route path="/sport" component={Sport} />

          <Route path="/product/pro-name/:name/pro-id/:id" component={Product} />
          <Route path="/promotion/pro-name/:name/pro-id/:id" component={Promo} />

          <Route path="/my-order" component={MyOrders} />
        </Switch>
      </Router>
    </>
  );
}


export default App;
