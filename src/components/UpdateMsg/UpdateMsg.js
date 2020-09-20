import React, { Fragment, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import EditIcon from '@material-ui/icons/Edit'
import { IconButton } from '@material-ui/core'
import './update.css'

function UpdateMsg () {
  const [smShow, setSmShow] = useState(false)

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
              // value={chat.content || ''}
              // onChange={handleChange}
              name="content"
              placeholder="Type a message"
              type="text"
            />
            <button type="submit">Send a message</button>
          </form>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default UpdateMsg
