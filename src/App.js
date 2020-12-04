import HomePage from './pages/HomePage/HomePage.component'
import Collection from './pages/ShopPage/shop.component'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={Collection}/>  
      </Switch>
    </div>
  );
}

export default App;
