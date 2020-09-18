import React, { useState } from 'react'
import './chat.css'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function ChatFooter ({ user, msgAlert }) {
  const [sentChat, setSentChat] = useState('')
  console.log(sentChat)
  const [chat, setChat] = useState({})

  const handleChange = event => {
    event.persist()

    setChat(prevChat => {
      const updatedChat = { [event.target.name]: event.target.value }

      const editedChat = Object.assign({}, prevChat, updatedChat)

      return editedChat
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(user, 'this is the user')
    console.log(chat, 'this is chat')
    return axios({
      url: apiUrl + '/chats/',
      method: 'POST',
      headers: {
        'Authorization': `Token ${user.token}`
      },
      data: { chat }
    })
      .then(res => setSentChat(res.data.chat.content))
      .then(() => setChat(''))
      // .then(res => setChatId(res.data.chat._id))
      // .then(() => setChat(''))
      .then(() => msgAlert({
        heading: 'Message send success',
        message: messages.chatSuccess,
        variant: 'secondary'
      }))

      .catch(error => {
        msgAlert({
          heading: 'Message failed with and error message of: ' + error.message,
          message: messages.chatFail,
          variant: 'danger'
        })
      })
  }
  return (

    <div className="chatFooter">
      <InsertEmoticonIcon />
      <form id="send-chat-form" onSubmit={handleSubmit}>
        <input
          value={chat.content || ''}
          onChange={handleChange}
          name="content"
          placeholder="Type a message"
          type="text"
        />
        <button type="submit">Send a message</button>
      </form>
      <MicIcon />
    </div>

  )
}

export default ChatFooter
