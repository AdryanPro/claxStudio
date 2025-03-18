import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import "./App.css"
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        {/* <Route path='*' element={<Error />}/> */}
      </Routes>
    </>
  )
}

export default App
