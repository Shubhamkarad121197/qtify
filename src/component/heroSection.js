import React from 'react'
import './heroSection.css'
import headPhone from '../../src/assets/hero_headphones.png'


function HeroSection(){
    return(
        <>
            <div className='heroSection'>
                <div className='textInfo'>
                     <span>100 Thousand Songs, ad-free</span>
                    <span>Over thousands podcast episodes</span>
                </div>
                <div className='heroSectionLogo'>
                    <img src={headPhone} alt='headPhone'/>
                </div>
               
            </div>
        </>
    )
}

export default HeroSection;