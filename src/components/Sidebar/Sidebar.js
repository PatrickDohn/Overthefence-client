import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from '../SidebarChat/SidebarChat.js'
import './sidebar.css'

function Sidebar () {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <Avatar />
        <div className="sidebarHeaderRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebarSearch">
        <div className="sidebarSearchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebarChats">
        <SidebarChat addNewChat/>
      </div>
    </div>
  )
}

export default Sidebar
