import HomePage from './pages/HomePage/HomePage.component'
import { Route, Switch } from "react-router-dom";

const AnotherPage = props => {
  console.log(props)
  return(
    <div>
        <h1>Hello World, </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/hats" component={AnotherPage}/>
      </Switch>
    </div>
  );
}

export default App;
