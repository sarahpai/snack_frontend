import React from 'react'

class SnackCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {spans: 0}
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load',this.setSpans)
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight
		const spans = Math.ceil(height / 10)
		this.setState({ spans })
		
	};


	render() {
		const { slot_id, price } = this.props.image
		
		return (
			<div className="snack-box" style={{ gridRowEnd: `span ${this.state.spans}`}}>
				<img
					ref={this.imageRef}
					alt={this.props.image.slot_id}
					src={this.props.image.image}
					className="snack-img"
				/>
				<div className="ui mini label snackItemSlot" style={{ borderRadius: "0.2rem", textTransform: 'uppercase', backgroundColor: '#141411b3', color: 'rgb(250, 250, 250)', fontFamily: 'Lato', WebkitFontSmoothing: 'antialiased'}}>
					{slot_id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${price}
					
				</div>	
			 </div>
		);
	}
}
export default SnackCard;