import React from "react"
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./HeaderContainer.styles"
import { ReactComponent as Logo } from "../../graphic_assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CardIcon from "../card-icon/CardIcon"
import CardDropdown from "../card-dropdown/CardDropdown"
import { selectCurrentUser } from "../../redux/user/user.selector"
import { selectCartHidden } from "../../redux/cart/cart.selectors"

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/">HOME</OptionLink>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ?
         (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> ) 
         : 
         (<OptionLink to="/signin">SIGN IN</OptionLink>)
         }
        <CardIcon />
      </OptionsContainer>
      {hidden ? null : <CardDropdown />}
    </HeaderContainer>
  )
}

// nested destructuring
const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateProps)(Header)
