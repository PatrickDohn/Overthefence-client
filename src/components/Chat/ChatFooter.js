import React, { useState, useEffect } from 'react'
import './chat.css'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'

function ChatFooter ({ user, msgAlert, setConversation }) {
  const [newMessage, setNewMessage] = useState(false)
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
      .then(() => {
        setChat('')
        setNewMessage(true)
        return axios({
          url: apiUrl + '/chats/',
          method: 'GET',
          headers: {
            'Authorization': `Token ${user.token}`
          }
        })
      })
      .then(res => {
        console.log(res.data.chats, 'HERE')
        setConversation(res.data.chats)
      })
      .catch(console.error)
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
  useEffect(() => {
    axios({
      url: apiUrl + '/chats/',
      method: 'GET',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .then(res => setConversation(res.data.chats))
  }, [newMessage, setNewMessage])

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
