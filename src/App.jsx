import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import "./App.css"
import WorksNavPage from './components/WorksNavPage'
import MollyProject from './components/MollyProject'
import MisciblePage from './components/MisciblePage'
import EtherealDesignePage from './components/EtherealDesignePage'
import PlaisirsPage from './components/PlaisirsPage'
import Magazine54Page from './components/Magazine54Page'
import ItaliansDoItBetterPage from './components/ItaliansDoItBetterPage'
import NuitPage from './components/NuitPage'
import KiloutouPage from './components/KiloutouPage'
import GlobalCursor from './components/GlobalCursor'

function App() {

  return (
    <>
    <GlobalCursor />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/WorksMenu' element={<WorksNavPage />}/>
        <Route path='/Molly' element={<MollyProject />}/>
        <Route path='/Miscible' element={<MisciblePage />}/>
        <Route path='/EtherealDesigne' element={<EtherealDesignePage />}/>
        <Route path='/PlaisirÉphémères' element={<PlaisirsPage />}/>
        <Route path='/MagazineStudio54' element={<Magazine54Page />}/>
        <Route path='/ItaliansDoItBetter' element={<ItaliansDoItBetterPage />}/>
        <Route path='/NuitÉtoilée' element={<NuitPage />}/>
        <Route path='/Kiloutou' element={<KiloutouPage />}/>
        {/* <Route path='*' element={<Error />}/> */}
      </Routes>
    </>
  )
}

export default App
