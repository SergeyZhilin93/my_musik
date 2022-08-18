import React from "react"
import { Header } from './components/Header'
import { CreateFilePage } from './pages/CreateFilePage'
import { ListPage } from './pages/ListForm'
import { ProfileSettings } from './components/profileSettings'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <ProfileSettings/>
      <CreateFilePage/>
      <ListPage isLOgedIn={false}/>
    </>
  );
}

export default App;
