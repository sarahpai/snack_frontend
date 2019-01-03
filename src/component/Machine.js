import React from 'react'



export default class Machine extends React.Component {

	render() {
		return (
			<>
				<form className="form-inline formStyle" onSubmit={this.props.handleSubmit}>
				<div className="form-group mx-sm-3 mb-2">
					<input onChange={this.props.handleSnack} value={this.props.snackInput} name="snacks" type="text" className="form-control" placeholder="Add your snacks"/>
				</div>
					<button className="snackBtn" type="submit" id="add">+</button>
					<button onClick={this.props.checkout} id="checkout" type="submit" className="btn btn-primary mb-2">checkout</button>
				</form>
			</>
		)
	}
}