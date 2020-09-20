import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import './header.css'

const unauthenticatedOptions = (
  <Fragment>
    <div className='authButton'>
      <Button variant='secondary' block href="#sign-up">Sign Up</Button>
      <Button variant='secondary' block href="#sign-in">Sign In</Button>
    </div>
  </Fragment>
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
