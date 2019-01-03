import React from 'react'

class PopularSnack extends React.Component {
	
	state = {
	  snack: []	
	}
	

	
	render() {
		console.log("props from popular snack",this.props);
		
		return (
			<div>Hi from Popular Snack</div>
		)
	}
}
export default PopularSnack