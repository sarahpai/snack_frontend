import React, { Component } from 'react';
import SnackContainer from '../component/SnackContainer'
import Machine from '../component/Machine'
import CartContainer from '../component/CartContainer'
// import PopularSnack from '../component/PopularSnack'
import swal from 'sweetalert'
import '../assets/css/confetti.css'
import Confetti from '../component/Confetti'
class App extends Component {
  
  state = {
    snacks: [],
    term: "",
    foundSnack: [],
    cartTotal: 0,
    checkoutCart: [],
    confetti: false
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/snacks")
      .then(r => r.json())
      .then(d => this.setState({ snacks: d }))
  }
  
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
    // fetch(`http://localhost:3001/api/v1/snacks/${currentSnack.id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   body: JSON.stringify({
    //     quantity: `${currentSnack.quantity}` - 1
    //   })
    // })
    //   .then(
        this.setState(prevState => ({ foundSnack: [...this.state.foundSnack, currentSnack], cartTotal: this.state.cartTotal + snackPrice, term: "" }), () => console.log("added Snack", this.state.foundSnack, this.state.cartTotal))
      // )
  }

  cartCheckout = (snacksArr) => {
    let snacksList = this.state.foundSnack
    snacksList.map((s) => {
      return s
    },()=>console.log(snacksList)
    )
  }
  
  stopConfetti = () => {
    if (this.state.confetti) {
       this.setState({ foundSnack: [], cartTotal: 0, confetti: false })} 
    }
  
  handleCheckout = (event) => {
    event.preventDefault()
    this.setState({confetti: true})
    swal({
      title: "Enjoy!",
      text: "all them snackssss! ❤️",
      icon: "success",
      button: "😋"
    }).then(() => { this.stopConfetti() })
  }
   

  
  render() {
    return(
    <>
      <div className="backgroundImage">
          
            {this.state.confetti ? <Confetti /> :
              <>
              {/* <PopularSnack snacks={this.cartCheckout(this.state.foundSnack)} /> */}
              <SnackContainer snacks={this.state.snacks} />
              <Machine snackInput={this.state.term} handleSnack={this.handleSnack} handleSubmit={this.handleSubmit} checkout={this.handleCheckout} />
              <CartContainer cartItems={this.state.foundSnack} cartTotal={this.state.cartTotal} />
              </>}
         
      </div>
    </>
    );
  }
}

export default App;


