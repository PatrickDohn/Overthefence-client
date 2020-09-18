import React, { useEffect, useState } from 'react'
import './chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import Nav from 'react-bootstrap/Nav'
import { SearchOutlined } from '@material-ui/icons'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AttachFileIcon from '@material-ui/icons/AttachFile'

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
            <h3>Room Name</h3>
            <p>Last seen at...</p>
          </div>

          <div className="chatHeaderRight">
            <IconButton>
              <Nav.Link href="#change-password"><SearchOutlined /></Nav.Link>
            </IconButton>
            <IconButton>
              <Nav.Link href="#sign-out"><ExitToAppIcon /></Nav.Link>
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
