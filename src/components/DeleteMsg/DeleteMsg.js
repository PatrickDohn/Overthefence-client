import React, { useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

function DeleteMsg ({ user, chatId, setConversation }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: apiUrl + `/chats/${chatId}/`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .catch(console.error)
  }

  useEffect(() => {
    axios({
      url: apiUrl + '/chats/',
      method: 'GET',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
  })
  return (
    <IconButton type='submit' onClick={handleSubmit}>
      <DeleteIcon className="messageIcon"/>
    </IconButton>
  )
}

export default DeleteMsg
