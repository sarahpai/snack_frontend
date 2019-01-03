import React from 'react'
import Cart from './Cart'

const CartContainer = ({ cartItems, cartTotal }) => {

	const appendItem = cartItems.map((i) => {
		return <Cart key={i.id} item={i} />;
	});
		return (
			<div className="cartDispenser">
				<div className="cart-total">Cart Total: ${cartTotal}</div>
				{appendItem}
			</div>
			)

}
export default CartContainer;