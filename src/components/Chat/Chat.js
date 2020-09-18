import React from 'react'
import './chat.css'
import MyMessageJsx from './MyMessage'
import RecieveMsgJsx from './RecieveMsg'

function Chat ({ user, msgAlert, conversation }) {
  console.log(conversation, 'WHERE AM I?')

  const conversationJsx = conversation.map(message => (
    <div className="chatBody" key={message.id}>
      {message.owner.id === user.id ? <MyMessageJsx user={user} message={message}/> : <RecieveMsgJsx user={user} message={message}/>}
    </div>
  ))
  return (
    <div className="chatBody">
      {conversationJsx}
    </div>
  )
}

export default Chat
