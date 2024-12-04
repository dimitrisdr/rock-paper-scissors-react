import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { mainContext } from './context'
import RulesBtn from './components/RulesBtn'
import StartPage from './pages/StartPage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <StartPage />
  }
])
function App() {
  return (
    <mainContext.Provider>
      <Header />
      <RouterProvider router={router}/>
      <RulesBtn />
    </mainContext.Provider>
   
  )
}

export default App
