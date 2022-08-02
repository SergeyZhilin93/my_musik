import React from "react"
import { Header } from './components/Header'
import { CreateFilePage } from './pages/CreateFilePage'
import { ListPage } from './pages/ListForm'
import { ContentPage } from './pages/ContentPage'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <CreateFilePage/>
      <ListPage/>
    </>
  );
}

export default App;
