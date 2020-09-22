import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

function DeleteMsg ({ user, chatId, setConversation, setChatId, loadPage }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(chatId, 'THIS IS CHAT ID')
    axios({
      url: apiUrl + `/chats/${chatId}/`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .then(loadPage())
      .catch(console.error)
  }

  return (
    <IconButton type='submit' onClick={handleSubmit}>
      <DeleteIcon className="messageIcon"/>
    </IconButton>
  )
}

export default DeleteMsg
