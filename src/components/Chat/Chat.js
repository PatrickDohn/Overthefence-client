import React from 'react'
import './chat.css'
import MyMessageJsx from './MyMessage'
import RecieveMsgJsx from './RecieveMsg'

function Chat ({ user, msgAlert, setConversation, conversation, chatId, chat, setChat, setChatId, loadPage }) {
  const conversationJsx = conversation.map(chat => (
    <div className="chatBody" key={chat.id}>
      {chat.owner.id === user.id ? <MyMessageJsx setConversation={setConversation} msgAlert={msgAlert} setChatId={setChatId} chat={chat} setChat={setChat} user={user} chatId={chat.id} loadPage={loadPage} /> : <RecieveMsgJsx user={user} chat={chat}/>}
    </div>
  ))
  return (
    <div className="chatBody">
      {conversationJsx}
    </div>
  )
}

export default Chat
