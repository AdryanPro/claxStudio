import React, { useEffect } from 'react'
import "../CSS/worksPage.css"
import "../CSS/worksPageMobile.css"
import { Link } from 'react-router-dom'
import BigC from "../assets/menu/menuC.png"

export default function WorksNavPage() {
  return (
    <div className='worksPageWrapper'>
      <div className="workLeftWrapper">
      <h1 className='h1MenuWorkMobile'>WORKS</h1>
      <h1 className='h1MenuWorkCoolFontMobile'>Works</h1>
        <ul>
          <li>
            <Link to='/Molly' onClick={() => window.scrollTo(0, 0)}>
              <p className='titleWorksMenu'><span>(01)</span> MOLLY :</p>
              <p className='subTxt'>Création de marque.</p>
            </Link>
          </li>

          <li>
            <Link to="/Miscible" onClick={() => window.scrollTo(0, 0)}>
              <p className='titleWorksMenu'><span>(02)</span>MISCIBLE :</p>
              <p className='subTxt'>Design écoresponsable et luxe.</p></Link>
          </li>


          <li>
            <Link to="/EtherealDesigne" onClick={() => window.scrollTo(0, 0)}>
                        <p className='titleWorksMenu'><span>(03)</span>Ethereal Design :</p>
                        <p className='subTxt'>Innovation et architecture.</p></Link>
          </li>

          <li>
            <Link to="/PlaisirÉphémères" onClick={() => window.scrollTo(0, 0)}>
                        <p className='titleWorksMenu'><span>(04)</span>PLaisirs éphémères :</p>
                        <p className='subTxt'>Set design et photographie.</p></Link>
          </li>

          <li>
          <Link to="/MagazineStudio54" onClick={() => window.scrollTo(0, 0)}>
            <p className='titleWorksMenu'><span>(05)</span>Magazine Studio 54 :</p>
            <p className='subTxt'>Design éditorial.</p></Link>
          </li>

          <li>
          <Link to="/ItaliansDoItBetter" onClick={() => window.scrollTo(0, 0)}>
            <p className='titleWorksMenu'><span>(06)</span>Italians Do It Better : </p>
            <p className='subTxt'>Affiche illustrative et direction artistique.</p></Link>
          </li>

          <li>
          <Link to="/NuitÉtoilée" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(07)</span>NUIT ÉTOILÉE :</p>
                      <p className='subTxt'>Illustration et adaptation à un public cible.</p></Link>
          </li>

          <li>
          <Link to="/Kiloutou" onClick={() => window.scrollTo(0, 0)}>
                      <p className='titleWorksMenu'><span>(08)</span>KILOUTOU :</p>
                      <p className='subTxt'>Campagne 360°</p></Link>
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
