import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Sidebar from '../Sidebar/Sidebar.js'
import Chat from '../Chat/Chat.js'
import './app.css'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  // const [postId, setPostId] = useState(null)

  const clearUser = () => this.setState({ user: null })

  const msgAlert = ({ heading, message, variant }) => {
    setMsgAlerts([...msgAlerts, { heading, message, variant }])
  }

  return (
    <Fragment>
      <Header user={user} />
      {msgAlerts.map((msgAlert, index) => (
        <AutoDismissAlert
          key={index}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
        />
      ))}
      <main className="container">
        <Route path='/sign-up' render={() => (
          <SignUp msgAlert={msgAlert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn msgAlert={msgAlert} setUser={setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword msgAlert={msgAlert} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/' render={() => (
          <div className="app">

            <div className="appBody">
              <Sidebar />
              <Chat />
            </div>
          </div>
        )} />
      </main>
    </Fragment>
  )
}

export default App
