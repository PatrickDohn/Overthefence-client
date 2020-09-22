import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Chat from '../Chat/Chat.js'
import ChatHeader from '../Chat/ChatHeader.js'
import ChatFooter from '../Chat/ChatFooter.js'

function Home ({ user, msgAlert }) {
  const [conversation, setConversation] = useState([])
  const [chat, setChat] = useState({})
  useEffect(() => {
    loadPage()
  }, [])

  const loadPage = () => {
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
      .catch(console.error)
  }
  return (
    <div className="app">

      <div className="appBody">
        <ChatHeader
          user={user}
        />

        <Chat
          loadPage={loadPage}
          msgAlert={msgAlert}
          chat={chat}
          setChat={setChat}
          user={user}
          conversation={conversation}
          setConversation={setConversation}
        />

        <ChatFooter
          loadPage={loadPage}
          conversation={conversation}
          chat={chat}
          user={user}
          msgAlert={msgAlert}
          setConversation={setConversation}
        />
      </div>
    </div>
  )
}

export default Home
