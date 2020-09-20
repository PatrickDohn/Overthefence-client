import React from 'react'
import './chat.css'
import DeleteMsg from '../DeleteMsg/DeleteMsg'
import UpdateMsg from '../UpdateMsg/UpdateMsg'

const MyMessageJsx = ({ user, message, chatId, setChatId, setConversation, setSentChat, setChat, setNewMessage }) => {
  return (
    <div className="chatBody" key={message.id}>
      <p className= 'myMessage chatMessage'>
        <span className="chatName">{message.owner.email}</span>
        {message.content}
        <span className="chatTimestamp">3:45</span>
        <div className='hoverContainer'>
          <DeleteMsg
            user={user}
            chatId={message.id}
            setConversation={setConversation}
            setSentChat={setSentChat}
            setChat={setChat}
            setNewMessage={setNewMessage}
          />
          <UpdateMsg />
        </div>
      </p>
    </div>
  )
}

export default MyMessageJsx
