import React, { useEffect } from 'react'
import "../CSS/worksPage.css"
import "../CSS/worksPageMobile.css"
import { Link } from 'react-router-dom'
import BigC from "../assets/menu/menuC.png"
import BigCMobile from "../assets/menu/BigCWorksMenuMobile.png"

export default function WorksNavPage() {
  return (
    <div className='worksPageWrapper'>
      <div className="workLeftWrapper">
              <img src={BigCMobile} alt="Logo" className='LogoWorksMobile' />
        <h1 className='h1MenuWorkMobile'>WORKS</h1>
        <h1 className='h1MenuWorkCoolFontMobile'>Works</h1>
        {/* Supprime a partir dici */}
        <ul className='ulWorsPage'>
        
          <li className='casseCouilleLesP'>
            <Link to='/Molly' onClick={() => window.scrollTo(0, 0)}>
              <p className='titleWorksMenu'><span>(01)</span>MOLLY :</p>
              <p className='subTxt'><span className='invisibleSpan'>(01)</span>Création de marque.</p>
            </Link>
          </li>

          <li>
            <Link to="/Miscible" onClick={() => window.scrollTo(0, 0)}>
              <p className='titleWorksMenu'><span>(02)</span>MISCIBLE :</p>
              <p className='subTxt'><span className='invisibleSpan'>(02)</span>Design écoresponsable.</p></Link>
          </li>

          <li>
            <Link to="/EtherealDesigne" onClick={() => window.scrollTo(0, 0)}>
                        <p className='titleWorksMenu'><span>(03)</span>Ethereal Design :</p>
                        <p className='subTxt'><span className='invisibleSpan'>(03)</span>Innovation et architecture.</p></Link>
          </li>

          <li>
            <Link to="/PlaisirÉphémères" onClick={() => window.scrollTo(0, 0)}>
                        <p className='titleWorksMenu'><span>(04)</span>INNOVATION ET IA :</p>
                        <p className='subTxt'><span className='invisibleSpan'>(04)</span>Set design et photographie.</p></Link>
          </li>

          <li>
          <Link to="/MagazineStudio54" onClick={() => window.scrollTo(0, 0)}>
            <p className='titleWorksMenu'><span>(05)</span>Magazine Studio 54 :</p>
            <p className='subTxt'><span className='invisibleSpan'>(05)</span>Design éditorial.</p></Link>
          </li>

          <li>
          <Link to="/ItaliansDoItBetter" onClick={() => window.scrollTo(0, 0)}>
            <p className='titleWorksMenu'><span>(06)</span>Italians Do It Better : </p>
            <p className='subTxt'><span className='invisibleSpan'>(06)</span>Affiche illustrative.</p></Link>
          </li>

          <li>
          <Link to="/NuitÉtoilée" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(07)</span>NUIT ÉTOILÉE :</p>
                      <p className='subTxt'><span className='invisibleSpan'>(07)</span>Illustration.</p></Link>
          </li>

          <li>
          <Link to="/Kiloutou" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(08)</span>KILOUTOU :</p>
                      <p className='subTxt'><span className='invisibleSpan'>(08)</span>Campagne 360°</p></Link>
          </li>
          <li>
          <Link to="/Loue" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(09)</span>LOUÉ :</p>
                      <p className='subTxt'><span className='invisibleSpan'>(09)</span>DESIGN PACKAGING</p></Link>
          </li>
          <li>
          <Link to="/HouseOfCards" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(10)</span>HOUSE OF CARDS  :</p>
                      <p className='subTxt'><span className='invisibleSpan'>(10)</span>CRÉATION DE GÉNÉRIQUE</p></Link>
          </li>
          <li>
          <Link to="/PlumLiving" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(11)</span>PLUM LIVING :</p>
                      <p className='subTxt'><span className='invisibleSpan'>(11)</span>MOTION DESIGN</p></Link>
          </li>
          <li>
          <Link to="/Ricore" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(12)</span>Ricore :</p>
                      <p className='subTxt'><span className='invisibleSpan'>(11)</span>REBRANDING</p></Link>
          </li>
        </ul>
      </div>
      <div className="worksRightWrapper">
        <img src={BigC} alt="Logo" className='LogoWorks' />

        <h1 className='h1MenuWork'>WORKS</h1>
        <h1 className='h1MenuWorkCoolFont'>Works</h1>
      </div>

      <div className="worksMenuWrapperOnWorksPage">
          <Link to="/">home</Link>
          <span className='gapForFakeNav'></span>
          <Link to="/WorksMenu">works</Link>
          <span className='gapForFakeNav'></span>
          <Link to="/#go">profil</Link>
      </div>
    </div>
  )
}
