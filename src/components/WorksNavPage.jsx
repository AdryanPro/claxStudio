import React, { useEffect } from 'react'
import "../CSS/worksPage.css"
import { Link } from 'react-router-dom'
import BigC from "../assets/menu/menuC.png"

export default function WorksNavPage() {
  return (
    <div className='worksPageWrapper'>
      <div className="workLeftWrapper">
        <ul>
            <Link to='/Molly' onClick={() => window.scrollTo(0, 0)}>
            <li><span>(01)</span> MOLLY :</li>
            <p>Création de marque.</p></Link>

            <Link to="/Miscible" onClick={() => window.scrollTo(0, 0)}>
            <li><span>(02)</span>MISCIBLE :</li>
            <p>Design écoresponsable et luxe.</p></Link>

            <Link to="/EtherealDesigne" onClick={() => window.scrollTo(0, 0)}>
            <li><span>(03)</span>Ethereal Design :</li>
            <p>Innovation et architecture.</p></Link>

            <Link to="/PlaisirÉphémères" onClick={() => window.scrollTo(0, 0)}>
            <li><span>(04)</span>PLaisirs éphémères :</li>
            <p>Set design et photographie.</p></Link>

            <Link to="/MagazineStudio54" onClick={() => window.scrollTo(0, 0)}>
            <li><span>(05)</span>Magazine Studio 54 :</li>
            <p>Design éditorial.</p></Link>

            <Link to="/ItaliansDoItBetter" onClick={() => window.scrollTo(0, 0)}>
            <li><span>(06)</span>Italians Do It Better : </li>
            <p>Affiche illustrative et direction artistique.</p></Link>

            <Link to="/NuitÉtoilée" onClick={() => window.scrollTo(0, 0)}>
            <li><span>(07)</span>NUIT ÉTOILÉE :</li>
            <p>Illustration et adaptation à un public cible.</p></Link>

            <Link to="/Kiloutou" onClick={() => window.scrollTo(0, 0)}>
            <li><span>(08)</span>KILOUTOU :</li>
            <p>Campagne 360°</p></Link>
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
