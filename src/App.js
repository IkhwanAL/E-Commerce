import HomePage from './pages/HomePage/HomePage.component';
import Collection from './pages/ShopPage/shop.component';
import SignInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage.component';
import Header from './component/header/header.component';
import checkoutPage from './pages/CheckoutPage/checkout.component';

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.action.redux';
import { auth, createUserProfileRef } from './firebase/firebase.utils';

import React, { Component } from 'react'

class App extends Component {
  userSubscription = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.userSubscription = auth.onAuthStateChanged(async (user) => {
      if(user){
        const userRef = await createUserProfileRef(user);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }else{
        setCurrentUser(user);
      }
      
    })
  }
  componentWillUnmount(){
    this.userSubscription();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={Collection}/>
          <Route exact
            path="/signin"
            render={
              () => this.props.currentUser 
                ? <Redirect to="/" /> 
                : <SignInAndSignUpPage/>
            }/>
          <Route exact path="/checkout" component={checkoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ // Just Show the Data
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({ // Set The Data Into Redux
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
