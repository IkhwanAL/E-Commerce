import HomePage from './pages/HomePage/HomePage.component'
import Collection from './pages/ShopPage/shop.component'
import SignInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage.component'
import Header from './component/header/header.component'

import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action.redux'

import { auth, createUserProfileRef } from './firebase/firebase.utils';

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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
