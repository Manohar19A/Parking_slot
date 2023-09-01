
import './App.css';
import { useState } from 'react';
import AuthPage from './pages/authPage';
import ChatPage from './pages/chatPage';

function App() {
  const [user,setUser]=useState(undefined)

 if(!user) {
  return <AuthPage onAuth={(user) => setUser(user)}/>
 }
  else{
    return <ChatPage user={user}/>
  }
}

export default App;
