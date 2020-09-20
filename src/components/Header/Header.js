import React from 'react'
import Button from 'react-bootstrap/Button'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import './header.css'

const unauthenticatedOptions = (
  <div className="frontpage">
    <div className='authButton'>
      <Button variant='primary' block href="#sign-up">Sign Up</Button>
      <Button variant='primary' block href="#sign-in">Sign In</Button>
    </div>
  </div>
)

const Header = ({ user, msgAlert }) => (
  <div>
    <div className="ml-auto">
      { user ? <Route path='/home' render={() => (
        <Home user={user} msgAlert={msgAlert} />
      )} /> : unauthenticatedOptions }
    </div>
  </div>
)

export default Header
