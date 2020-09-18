import React from 'react'
import './chat.css'

function Chat ({ user, msgAlert, conversation }) {
  console.log(conversation, 'WHERE AM I?')
  // if (message.owner.email === user.email) {
  //   chatMessage
  // } else {
  //   chatReciever
  // }

  const conversationJsx = conversation.map(message => (
    <div key={message.id}>
      <p className={`chatMessage ${true && 'chatReciever'}`}>
        <span className="chatName">{message.owner.email}</span>
        {message.content}
        <span className="chatTimestamp">3:45</span>
      </p>
    </div>
  ))

  return (
    <div className="chatBody">
      {conversationJsx}
    </div>
  )
}

export default Chat
