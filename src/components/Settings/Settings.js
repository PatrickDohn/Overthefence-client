import React, { Fragment, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { IconButton } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { Button } from 'react-bootstrap/'

function Settings () {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Fragment>
      <IconButton variant="primary" onClick={handleShow}>
        <SettingsIcon />
      </IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button>Light Mode</Button>
          <Button>Dark Mode</Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default Settings
