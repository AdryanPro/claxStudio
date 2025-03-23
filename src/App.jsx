import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import "./App.css"
import WorksNavPage from './components/WorksNavPage'
import MollyProject from './components/MollyProject'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/WorksNav' element={<WorksNavPage />}/>
        <Route path='/Molly' element={<MollyProject />}/>
        {/* <Route path='*' element={<Error />}/> */}
      </Routes>
    </>
  )
}

export default App
