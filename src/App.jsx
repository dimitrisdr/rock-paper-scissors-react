import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useRef } from 'react'
import './App.css'
import Header from './components/Header'
import { mainContext } from './context'
import RulesBtn from './components/RulesBtn'
import RulesCard from './components/RulesCard'
import StartPage from './pages/StartPage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <StartPage />
  }
])
function App() {

  const dialogRef = useRef()
  
  return (
    <mainContext.Provider value={dialogRef}>
      <Header />
      <RouterProvider router={router} />
      <RulesCard />
      <RulesBtn />
    </mainContext.Provider>
   
  )
}

export default App
