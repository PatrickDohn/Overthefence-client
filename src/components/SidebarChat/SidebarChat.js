import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './sidebarchat.css'

function SidebarChat ({ user, addNewChat }) {
  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt('Please enter a name for chat')

    if (roomName) {
      axios({
        url: `${apiUrl}/chats/`,
        method: 'POST',
        data: { content: '' },
        headers: {
          'Authorization': `Token ${user.token}`
        }
      })
      console.log(roomName, 'This is state.content')
    }
  }

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebarChatInfo">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat}
      className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat
