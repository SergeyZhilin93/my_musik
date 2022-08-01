import React from "react"
import { Header } from './components/Header'
import { CreateFilePage } from './pages/CreateFilePage'
import { ListPage } from './pages/ListForm'

function App() {
  const message = ['hui']
  return (
    <>
      <Header/>
      <CreateFilePage hui = "Добавить песню:"/>
      <ListPage unReadMessage = {message}/>
    </>
  );
}

export default App;
