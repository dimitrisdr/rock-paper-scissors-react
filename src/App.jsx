import { useEffect, useRef, useState } from 'react'
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
  
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score')
    return !isNaN(savedScore) && savedScore !== null ? parseInt(savedScore, 10) : 0
    }
  )


  useEffect(()=> {
    localStorage.setItem('score', score)
  }, [score])

  const gameElements = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock']

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



  return (
    <mainContext.Provider value={
        { 
          dialogRef, 
          gameChoices, 
          setGameChoices, 
          gameElements, 
          score, 
          setScore,
          delay
        }
      }>
      <Header/>
      <main className="main grid-item">
        {gameChoices.user === '' && <StartPage />}
        {gameChoices.user !== '' && <WinnerCard/>}
        <RulesCard />
        <RulesBtn />
      </main>
    </mainContext.Provider>
   
  )
}

export default App



