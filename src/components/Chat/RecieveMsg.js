import React from 'react'
import './chat.css'

const RecieveMsgJsx = ({ user, message }) => {
  return (
    <div className="chatBody" key={message.id}>
      <p className= 'chatReciever chatMessage'>
        <span className="chatName">{message.owner.email}</span>
        {message.content}
        <span className="chatTimestamp">3:45</span>
      </p>
    </div>
  )
}

export default RecieveMsgJsx
