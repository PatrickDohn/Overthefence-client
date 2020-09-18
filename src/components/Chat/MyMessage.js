import React, { useEffect, useState } from 'react'
import './chat.css'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const MyMessageJsx = ({ user, message, chatId, setChatId, setConversation }) => {
  const [deleted, setDeleted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    return axios({
      url: `${apiUrl}/chats/${chatId}/`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .then(res => setDeleted(true))
      .catch(console.error)
  }

  // this call updates the index after a delete
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
  }, [deleted, setDeleted])

  return (
    <div className="chatBody" key={message.id}>
      <p className= 'myMessage chatMessage'>
        <span className="chatName">{message.owner.email}</span>
        {message.content}
        <span className="chatTimestamp">3:45</span>
        <div className='hoverContainer'>
          <IconButton type='submit' onSubmit={handleSubmit}>
            <DeleteIcon className="messageIcon"/>
          </IconButton>
          <IconButton>
            <EditIcon className="messageIcon"/>
          </IconButton>
        </div>
      </p>
    </div>
  )
}

export default MyMessageJsx
