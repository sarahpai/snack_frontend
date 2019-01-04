import React from 'react'



export default class Machine extends React.Component {

	render() {
		return (
			<>
				<div className="formField">
				<form className="form-inline " onSubmit={this.props.handleSubmit}>
				<div className="form-group mx-sm-3 mb-2">
					<input onChange={this.props.handleSnack} value={this.props.snackInput} name="snacks" type="text" className="form-control" placeholder="Add your snacks"/>
				</div>
					<button className="snackBtn" type="submit" ></button>
					<button onClick={this.props.checkout}  type="submit" className="checkoutBtn"></button>
					</form>
				</div>
			</>
		)
	}
}