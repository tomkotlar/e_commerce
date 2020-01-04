export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existinCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if (existinCartItem) {
    return cartItems.map(cartItem =>
      cartItem === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
