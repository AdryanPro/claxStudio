import React, { useEffect } from 'react'
import "../CSS/worksPage.css"
import { Link } from 'react-router-dom'

export default function WorksNavPage() {
  return (
    <div className='worksPageWrapper'>
      <ul>
          <Link to='/Molly'>
          <li><span>(01)</span> MOLLY :</li>
          <p>Création de marque.</p></Link>

          <Link to="/Miscible">
          <li><span>(02)</span>MISCIBLE :</li>
          <p>Design écoresponsable et luxe.</p></Link>

          <Link to="/EtherealDesigne">
          <li><span>(03)</span>Ethereal Design :</li>
          <p>Innovation et architecture.</p></Link>

          <Link to="/PlaisirÉphémères">
          <li><span>(04)</span>PLaisirs éphémères :</li>
          <p>Set design et photographie.</p></Link>

          <Link to="/MagazineStudio54">
          <li><span>(05)</span>Magazine Studio 54 :</li>
          <p>Design éditorial.</p></Link>

          <Link to="/ItaliansDoItBetter">
          <li><span>(06)</span>Italians Do It Better : </li>
          <p>Affiche illustrative et direction artistique.</p></Link>

          <Link to="/NuitÉtoilée">
          <li><span>(07)</span>NUIT ÉTOILÉE :</li>
          <p>Illustration et adaptation à un public cible.</p></Link>

          <Link to="/Kiloutou">
          <li><span>(08)</span>KILOUTOU :</li>
          <p>Campagne 360°</p></Link>
      </ul>
    </div>
  )
}
