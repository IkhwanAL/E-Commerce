import HomePage from './pages/HomePage/HomePage.component'
import Collection from './pages/ShopPage/shop.component'
import SignInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage.component'
import Header from './component/header/header.component'

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={Collection}/>
        <Route exact path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
