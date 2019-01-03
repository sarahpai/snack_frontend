import React from 'react'
import '../../src/assets/css/cart.css'


class Cart extends React.Component {

	state = {
		snackPrice: ""
	}

	cartPrice = (price) => {
		let snackPrice = this.props.item.price 
		return snackPrice
	}

	render() {
		console.log(this.props.item.price);
		return (
			
			<div className="snackCartContainer">
				<img height="50" alt={this.props.item.slot_id} src={this.props.item.image}  />
			</div>
		)
	}
}


export default Cart;

