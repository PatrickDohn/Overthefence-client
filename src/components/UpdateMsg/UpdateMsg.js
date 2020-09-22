import React, { Fragment, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import EditIcon from '@material-ui/icons/Edit'
import { IconButton } from '@material-ui/core'
import messages from '../AutoDismissAlert/messages'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './update.css'

function UpdateMsg ({ user, chatId, setConversation, loadPage, msgAlert }) {
  const [smShow, setSmShow] = useState(false)
  const [chat, setChat] = useState({ content: '' })
  const handleChange = event => {
    event.persist()
    setChat(prevChat => {
      const updatedChat = { [event.target.name]: event.target.value }
      return updatedChat
    })
    console.log(chat, 'This is new Chat in chat Update')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: apiUrl + `/chats/${chatId}/`,
      method: 'PATCH',
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
      .then(setSmShow(false))
      .catch(console.error)
  }

  return (
    <Fragment>
      <IconButton onClick={() => setSmShow(true)}>{' '}
        <EditIcon className="messageIcon"/>
      </IconButton>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header className='modHead' closeButton>
          <Modal.Title className='editTitle' id="example-modal-sizes-title-sm">
            Edit Message
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modBody'>
          <form className='editForm' id="send-chat-form">
            <input
              className='editInput'
              value={chat.content || ''}
              onChange={handleChange}
              name="content"
              placeholder={chat.content}
              type="text"
            />
            <button onClick={handleSubmit} type="submit">Send a message</button>
          </form>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default UpdateMsg
