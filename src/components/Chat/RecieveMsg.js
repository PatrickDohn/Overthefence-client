import React from 'react'
import './chat.css'

const RecieveMsgJsx = ({ user, chat }) => {
  return (
    <div className="chatBody" key={chat.id}>
      <p className= 'chatReciever chatMessage'>
        <span className="chatName">{chat.owner.email}</span>
        {chat.content}
        <span className="chatTimestamp">{chat.created_on}</span>
      </p>
    </div>
  )
}

export default RecieveMsgJsx
