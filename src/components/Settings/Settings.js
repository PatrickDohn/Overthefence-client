import React, { Fragment, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { IconButton } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { Button } from 'react-bootstrap/'
import './settings.css'

function Settings (props) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Fragment>
      <IconButton variant="primary" onClick={handleShow}>
        <SettingsIcon color="primary" />
      </IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalHead" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modBody">
          <Button>Dark mode</Button>
          <Button>Light mode</Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default Settings
