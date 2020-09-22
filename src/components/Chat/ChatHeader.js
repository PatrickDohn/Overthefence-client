import React, { useEffect, useState } from 'react'
import './chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import Nav from 'react-bootstrap/Nav'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function ChatHeader ({ user, msgAlert }) {
  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  return (
    <div>
      <div className="chat">
        <div className="chatHeader">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

          <div className="chatHeaderInfo">
            <h3 className="headTitle">Over the fence</h3>
            <p>{user.email}</p>
          </div>

          <div className="chatHeaderRight">
            <IconButton>
              <Nav.Link href="#change-password"><LockOpenIcon /></Nav.Link>
            </IconButton>
            <IconButton>
              <Nav.Link href="#sign-out"><ExitToAppIcon /></Nav.Link>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
