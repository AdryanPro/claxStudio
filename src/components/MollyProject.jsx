import React from 'react';
import TopProject from '../components/TopProject';
import molly1 from '../assets/mollyProject/molly1.png';
import molly2 from '../assets/mollyProject/molly2.png';
import molly3 from '../assets/mollyProject/molly3.png';
import molly4 from '../assets/mollyProject/molly4.png';
import molly5 from '../assets/mollyProject/molly5.png';
import '../CSS/mollyPage.css'

export default function MollyProject() {
    const projectData = {
        title: 'CRÉATION DE MARQUE',
        subtitle: 'Molly Beauty',
        projectNumber: '01',
        mission: 'définir l\'univers, concevoir l\'identité visuelle et développer le packaging.',
        realisation: [
          'typographie customisée pour le logo en 3D (Nomad)',
          'palette chromatique et motifs graphiques audacieux.',
          'packaging modélisé et maquetté (Adobe Suite).',
        ],
        result: 'une marque immersive, prête à captiver son public.',
        images: [molly1, molly2, molly3, molly4, molly5],
      };

  return (
    <div className='mollyProjectWrapper'>
        <TopProject {...projectData} />
        <section className="mollyImgWrapperSection">
            <h1>JUST SO WE CAN TEST THE SCROLL</h1>
        </section>
    </div>
  )
}
