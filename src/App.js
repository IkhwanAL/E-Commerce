import HomePage from './pages/HomePage/HomePage.component'
import Collection from './pages/ShopPage/shop.component'
import SignInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage.component'
import Header from './component/header/header.component'

import { Route, Switch } from "react-router-dom";
import React, { Component } from 'react'

import { auth, createUserProfileRef } from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null,
    }
  }

  userSubscription = null;

  componentDidMount(){
    this.userSubscription = auth.onAuthStateChanged(async (user) => {
      if(user){
        const userRef = await createUserProfileRef(user);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
      }else{
        this.setState({currentUser: user});
      }
      
    })
  }
  componentWillUnmount(){
    this.userSubscription();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={Collection}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
