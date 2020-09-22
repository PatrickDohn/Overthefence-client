import React from 'react'
import './chat.css'
import DeleteMsg from '../DeleteMsg/DeleteMsg'
import UpdateMsg from '../UpdateMsg/UpdateMsg'

const MyMessageJsx = ({ user, chat, chatId, setChatId, setConversation, setSentChat, setChat, setNewChat, loadPage, msgAlert }) => {
  return (
    <div className="chatBody" key={chat.id}>
      <div className= 'myMessage chatMessage'>
        <span className="chatName">Me</span>
        {chat.content}
        <span className="chatTimestamp">{chat.created_on}</span>
        <div className='hoverContainer'>
          <DeleteMsg
            loadPage={loadPage}
            user={user}
            chatId={chatId}
            setConversation={setConversation}
            setSentChat={setSentChat}
            setChat={setChat}
            setNewChat={setNewChat}
            setChatId={setChatId}
          />
          <UpdateMsg
            msgAlert={msgAlert}
            loadPage={loadPage}
            setChat={setChat}
            user={user}
            chatId={chatId}
            chat={chat}
            setConversation={setConversation}
          />
        </div>
      </div>
    </div>
  )
}

export default MyMessageJsx
