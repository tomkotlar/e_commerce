import React from 'react'
import "./Header.styles.scss"
import {ReactComponent as Logo} from '../../graphic_assets/crown.svg'
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils"
import { connect } from 'react-redux'
import CardIcon from "../card-icon/CardIcon";
import CardDropdown from '../card-dropdown/CardDropdown';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/' >
                <Logo className='logo' />  
            </Link>
            <div className='options'>
                <Link className='option' to='/' >
                   HOME
                </Link>
                <Link className='option' to='/shop' >
                    SHOP
                </Link>
                <Link className='option' to='/contact' >
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={ () => auth.signOut()} >
                        SIGN OUT
                    </div> 
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
                <CardIcon />
            </div>
            <CardDropdown />
        </div>
    )
}

const mapStateProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateProps)(Header)

