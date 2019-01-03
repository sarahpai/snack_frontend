import React from 'react'
import SnackCard from './SnackCard'
import '../../src/assets/css/vendingMachine.css'

const SnackContainer = (props) => {
		// console.log("props are in snacks",props.snacks);
	const snacks = props.snacks.map((snack) => {
		return <SnackCard key={snack.id} image={snack} />
	})
	return (
		<div className="image-list snackContainer-border">{snacks}</div>
	)
}
export default SnackContainer;

