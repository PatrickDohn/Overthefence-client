import React, { useEffect, useState } from 'react'
import './chat.css'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat ({ user, chatId, setChatId, msgAlert, addNewChat }) {
  const [seed, setSeed] = useState('')
  const [chat, setChat] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const handleChange = event => {
    event.persist()

    setChat(prevChat => {
      const updatedChat = { [event.target.name]: event.target.value, ownerName: user.email }

      const editedChat = Object.assign({}, prevChat, updatedChat)

      return editedChat
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/new-chat`,
      method: 'POST',
      headers: {
        'Authorization': `Token ${user.token}`
      },
      data: { chat }
    })
      .then(res => setChatId(res.data.chat._id))
      .then(() => setChat(''))
      .then(() => msgAlert({
        heading: 'Message send success',
        message: messages.serveSuccess,
        variant: 'secondary'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Message failed with and error message of: ' + error.message,
          message: messages.serveFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chatHeaderInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chatHeaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatBody">
        <p className={`chatMessage ${true && 'chatReciever'}`}>
          <span className="chatName">Patrick Dohn</span>
          <span className="chatTimestamp">3:45</span>
        </p>

      </div>

      <div className="chatFooter">
        <InsertEmoticonIcon />
        <form id="send-chat-form" onSubmit={handleSubmit}>
          <input
            value={chat.content}
            onChange={handleChange}
            name="content"
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
