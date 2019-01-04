import React, { Component } from 'react';
import SnackContainer from '../component/SnackContainer'
import Machine from '../component/Machine'
import CartContainer from '../component/CartContainer'
import PopularSnack from '../component/PopularSnack'
import swal from 'sweetalert';
import Particles from '../component/confetti/Particles'

class App extends Component {
  static id = 1;
  state = {
    snacks: [],
    term: "",
    foundSnack: [],
    cartTotal: 0,
    updatedSnack: [],
    particles: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/snacks")
      .then(r => r.json())
      .then(d => this.setState({snacks: d}))
  }
// ----
  clean(id) {
    this.setState({
      particles: this.state.particles.filter(_id => _id !== id)
    });
  }
  
  handleOnClick = () => {
    const id = App.id;
    App.id++;
    
    this.setState({
      particles: [...this.state.particles, id]
    });
    setTimeout(() => {
      this.clean(id);
    }, 5000);
  }
  
// ----
  handleSnack = (event) => {  
    let snackInput = event.target.value
    this.setState({
      term: snackInput
    })
  }

  findSnackToAdd = (input) => {
   return this.state.snacks.find((snack) => {
     return snack.slot_id === input
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let currentSnack = this.findSnackToAdd(this.state.term)
    let snackPrice = currentSnack.price
      fetch(`http://localhost:3001/api/v1/snacks/${currentSnack.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          quantity: `${currentSnack.quantity}`-1
        }) 
      }) 
        .then( 
          this.setState(prevState=>({foundSnack: [...this.state.foundSnack, currentSnack], cartTotal: this.state.cartTotal + snackPrice, term: "" }), () => console.log("added Snack", this.state.foundSnack, this.state.cartTotal))
        )
    } 
	
  handleCheckout = (event) => {
    event.preventDefault()
    swal({
      title: "Enjoy!",
      text: "all them snackssss! ❤️",
      icon: "success",
      button: "😋"
    });
    this.setState({ foundSnack: [], cartTotal: 0 })
  }

  render() {
    const {particles} = this.state;
    const {innerWidth} = window
    return (
      
     <>
        <div className='app'>
          {particles.map(id => (
            <Particles key={id} count={Math.floor(innerWidth / 20)}/>
          ))}
          <div className='button' onClick={this.handleOnClick}>
            <div className='popper'/>
            CLICK ME!</div>
        </div>
   
      <div className="backgroundImage">
      <div className="header"> 
          <Particles/>
          <PopularSnack snacks={this.state.currentSnack}/>
          <SnackContainer snacks={this.state.snacks} />
          <Machine snackInput={this.state.term} handleSnack={this.handleSnack} handleSubmit={this.handleSubmit} checkout={this.handleCheckout}/>
          <CartContainer cartItems={this.state.foundSnack} cartTotal={this.state.cartTotal} />
          </div>
        </div>
        </>
    );
  }
}

export default App;


