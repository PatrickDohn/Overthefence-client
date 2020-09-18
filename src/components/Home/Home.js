import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Chat from '../Chat/Chat.js'
import ChatHeader from '../Chat/ChatHeader.js'
import ChatFooter from '../Chat/ChatFooter.js'

function Home ({ user, msgAlert }) {
  const [chatId, setChatId] = useState('')
  console.log(chatId)
  useEffect(() => {
    axios({
      url: apiUrl + '/chats/',
      method: 'GET',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .then(res => {
        console.log(res.data.chats, 'HERE')
        setConversation(res.data.chats)
      })
      .then(() => setChatId(null))
      .catch(console.error)
  }, [])
  const [conversation, setConversation] = useState([])
  return (
    <div className="app">

      <div className="appBody">
        <ChatHeader />

        <Chat
          msgAlert={msgAlert}
          user={user}
          conversation={conversation}
        />

        <ChatFooter
          conversation={conversation}
          user={user}
          msgAlert={msgAlert}
        />
      </div>
    </div>
  )
}

export default Home
