import React from 'react'
class SquiggleParticle extends React.PureComponent {
  
	static SIZE_RANGE = [15, 45];
	static ROTATION_RANGE = [-15, 15];
  
	constructor(props) {
	  super(props);
	  const size = generateWholeNumber(...SquiggleParticle.SIZE_RANGE);
	  this.style = {
		fill: generateRandomColor(),
		width: size,
		height: size,
		transform: `rotateZ(${generateWholeNumber(...SquiggleParticle.ROTATION_RANGE)}deg)`,
		left: generateWholeNumber(0, window.innerWidth),
		top: generateWholeNumber(-TOP_OFFSET, 0)
	  };
	}
  
	componentDidMount() {
	  const {left} = this.style;
	  const {ROTATION_RANGE} = SquiggleParticle;
	  setTimeout(() => {
		const node = ReactDOM.findDOMNode(this.ref);
		node.style.top = window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px';
		node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
		node.style.transform = `rotateZ(${generateWholeNumber(...ROTATION_RANGE)}deg)`;
	  },0);
	}
  
	render() {
	  return (
		<svg 
		  ref={ref => this.ref = ref} 
		  className='particle'
		  style={this.style}
		  xmlns="http://www.w3.org/2000/svg" 
		  viewBox="0 0 512 512">
		  <path fill={this.style.fill} d="M428.127,0l-12.716,10.062l12.718-10.06c8.785,11.101,19.716,24.917,19.716,51.051 s-10.932,39.951-19.716,51.053c-7.382,9.331-12.716,16.072-12.716,30.927c0,14.854,5.334,21.594,12.716,30.925   c8.784,11.101,19.716,24.917,19.716,51.05c0,26.135-10.931,39.949-19.715,51.051c-7.383,9.331-12.717,16.072-12.717,30.927   c0,14.855,5.332,21.593,12.711,30.919l-25.435,20.124c-8.781-11.097-19.708-24.909-19.708-51.042 c0-26.135,10.931-39.949,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.927c0-14.855-5.335-21.595-12.717-30.926 c-8.784-11.101-19.715-24.916-19.715-51.049s10.931-39.95,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.928 c0-14.855-5.335-21.596-12.718-30.927L428.127,0z"/>
		  </svg>
	  );
	}
}
  
export default SquiggleParticle;