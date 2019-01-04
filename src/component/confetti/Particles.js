import React from 'react'
import SquiggleParticle from './SquiggleParticle'
import CircularParticle from './CircularParticle'

// COLORS = ['#2ecc71','#3498db','#e67e22','#e67e22','#e74c3c'];
// TOP_OFFSET = window.innerHeight;
// LEFT_OFFSET = 250;

const generateWholeNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

// const generateRandomColor = () => COLORS[generateWholeNumber(0,['#2ecc71','#3498db','#e67e22','#e67e22','#e74c3c'].length)];


class Particles extends React.PureComponent {
  
	render() {
	  let {count: n} = this.props;
	  const particles = [];
	  const types = [SquiggleParticle, CircularParticle, CircularParticle];
	  
	  while(n--) {
		const Particle = types[generateWholeNumber(0,3)];
		particles.push(
		  <Particle key={n}/>
		);
	  }
	  
	  return (
		<div className='particles'>
		  {particles}
		</div>
	  );
	}
}
export default Particles;