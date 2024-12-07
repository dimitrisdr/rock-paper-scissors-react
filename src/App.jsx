import { useRef } from 'react'
import './App.css'
import Header from './components/Header'
import { mainContext } from './context'
import RulesBtn from './components/RulesBtn'
import RulesCard from './components/RulesCard'
import StartPage from './components/StartPage'


function App() {

  const dialogRef = useRef()

  return (
    <mainContext.Provider value={dialogRef}>
      <Header />
      <StartPage />
      <RulesCard />
      <RulesBtn />
    </mainContext.Provider>
   
  )
}

export default App



// import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <StartPage />
//   },
//   {
//     path:'winner',
//     element: <WinnerCard />
//   }
// ])


{/* <mainContext.Provider value={dialogRef}>
<Header />
<RouterProvider router={router} />
<RulesCard />
<RulesBtn />
</mainContext.Provider> */}

