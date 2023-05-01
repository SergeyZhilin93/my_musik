import React from "react"
import { Header } from './components/Header'
import { CreateFilePage } from './pages/CreateFilePage'
import { Player } from "./components/Player"
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <Header/>
        <Player/>
        <CreateFilePage/>
      </div>
    </>
  );
}

export default App;
