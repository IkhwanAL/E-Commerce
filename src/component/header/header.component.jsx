import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cartDropdown/cart-dropdown.component'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">    
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option" >SHOP</Link>
                <Link to="/contact" className="option" >CONTACT</Link>
                {
                    currentUser ? (
                        <div className="option" onClick={() => auth.signOut().then(() => {
                            console.log("Api Sign Out Called");
                        }).catch(function(error){
                            console.log(error)
                        })}>
                            SIGN OUT
                        </div>
                        ):(
                            <Link to="/signin" className="option">SIGN IN</Link>
                        )
                    // End 
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/> 
            }
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => {
    return ({
        currentUser,
        hidden
    })
}

export default connect(mapStateToProps)(Header);