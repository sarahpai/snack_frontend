import React from 'react'
// COLORS = ['#2ecc71','#3498db','#e67e22','#e67e22','#e74c3c'];
// TOP_OFFSET = window.innerHeight;
// LEFT_OFFSET = 250;

const generateWholeNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const generateRandomColor = () => COLORS[generateWholeNumber(0,COLORS.length)];

class CircularParticle extends React.PureComponent {
  
	static SIZE_RANGE = [5, 10];
	static ROTATION_RANGE = [0, 45];
  
	constructor(props) {
	  super(props);
	  const {SIZE_RANGE, ROTATION_RANGE} = CircularParticle;
	  const size = generateWholeNumber(...SIZE_RANGE);
	  this.style = {
		backgroundColor: generateRandomColor(),
		width: size,
		height: size,
		borderRadius: size,
		transform: `rotateZ(${generateWholeNumber(...ROTATION_RANGE)}deg)`,
		left: generateWholeNumber(0, window.innerWidth),
		top: generateWholeNumber(-TOP_OFFSET, 0)
	  };
	}
  
	componentDidMount() {
	  const {left} = this.style;
	  const {ROTATION_RANGE} = CircularParticle;
	  setTimeout(() => {
		const node = ReactDOM.findDOMNode(this.ref);
		node.style.top = window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px';
		node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
	  },0);
	}
	
	render() {
	  
	  return (
		<div ref={ref => this.ref = ref} className='particle' style={this.style}/>
	  );
	}
}
export default CircularParticle;