import React, { useState } from 'react'
import './chat.css'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'

function ChatFooter ({ user, msgAlert, setConversation, loadPage }) {
  const [chat, setChat] = useState({ content: '' })
  // const [sentChat, setSentChat] = useState('')

  // const [chat, setChat] = useState({})

  const handleChange = event => {
    event.persist()

    setChat(prevChat => {
      const updatedChat = { [event.target.name]: event.target.value }
      return updatedChat
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: apiUrl + '/chats/',
      method: 'POST',
      headers: {
        'Authorization': `Token ${user.token}`
      },
      data: { chat }
    })
      .then(() => {
        loadPage()
        setChat({ content: '' })
        msgAlert({
          heading: 'Message send success',
          message: messages.chatSuccess,
          variant: 'secondary'
        })
      })
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
    </div>

  )
}

export default ChatFooter
