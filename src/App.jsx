import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { mainContext } from './context'
import RulesBtn from './components/RulesBtn'
import RulesCard from './components/RulesCard'
import StartPage from './components/StartPage'
import WinnerCard from './components/WinnerCard'

function App() {

  const dialogRef = useRef()
  const [gameChoices, setGameChoices] = useState({user:'', computer:''})

  return (
    <mainContext.Provider value={{dialogRef, gameChoices, setGameChoices}}>
      <Header />
      <main className="main grid-item">
        {gameChoices.user === '' && <StartPage />}
        {gameChoices.user !== '' && <WinnerCard />}
        <RulesCard />
        <RulesBtn />
      </main>
    </mainContext.Provider>
   
  )
}

export default App



