import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Chat from '../Chat/Chat.js'
import ChatHeader from '../Chat/ChatHeader.js'
import ChatFooter from '../Chat/ChatFooter.js'

function Home ({ user, msgAlert, message }) {
  const [chatId, setChatId] = useState('')
  const [conversation, setConversation] = useState([])
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

  return (
    <div className="app">

      <div className="appBody">
        <ChatHeader
          user={user}
        />

        <Chat
          msgAlert={msgAlert}
          user={user}
          conversation={conversation}
          chatId={chatId}
          setChatId={setChatId}
          setConversation={setConversation}
        />

        <ChatFooter
          conversation={conversation}
          user={user}
          msgAlert={msgAlert}
          setConversation={setConversation}
        />
      </div>
    </div>
  )
}

export default Home
