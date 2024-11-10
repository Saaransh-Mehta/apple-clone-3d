import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(heroVideo)
    const handleVideoSrc = ()=>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }
    
useGSAP(()=>{
    gsap.to('#hero',{
        opacity:1,
        delay:1.5,
        ease:'power1.in',
        y:0
    })
    gsap.to("#cta", {
        opacity:1,
        delay:2.5,
        y:-50
    })
},[])
useEffect(()=>{
    window.addEventListener('resize', handleVideoSrc)
},[])
  return (
    <>
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">iPhone 15 Pro</p> 
        <div className='md:w-10/12 w-9/12'>
        <video className='pointer-events-none' autoPlay muted playsInline = {true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
        </video>
        </div>
        </div>
        <div id="cta" className='mt-5 flex flex-col items-center opacity-0 translate-y-20'>
    <a href="#highlights" className='btn transition-all'>Buy Now</a>
    <p className='font-normal text-xl'>From $199/m or $999</p>
        </div>
    </section>
    </>
  )
}

export default Hero