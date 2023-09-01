import React from 'react'
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatPage = (props) => {
  // const chatProps = useMultiChatLogic("f32fa6eb-8c64-4dde-bcbd-cdf0ee511304", 
  // props.user.username, props.user.secret)
  return (
    <div style={{ height: '100vh' }}>
      {/* <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}
      <PrettyChatWindow
      projectId="f32fa6eb-8c64-4dde-bcbd-cdf0ee511304"
      username={ props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  )
}

export default ChatPage