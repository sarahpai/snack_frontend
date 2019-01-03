import React from 'react'
import { NavLink } from 'react-router-dom';
// import '../App.css';
// import { Header, Image } from 'semantic-ui-react'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = props => {
  return (
    <>
    <NavLink to="/" exact style={link} activeStyle={{ background: 'rgb(78, 245, 240)'}}>Home</NavLink>
    <NavLink to="/snacks" exact style={link} activeStyle={{ background: 'rgb(78, 245, 240)' }}>Snack-Aid</NavLink>
    </>

  )
}

export default NavBar;