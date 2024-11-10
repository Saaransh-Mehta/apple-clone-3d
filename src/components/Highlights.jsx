import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { watchImg } from '../utils'
import VideoCrousel from './VideoCrousel'


const Highlights = () => {
    
    useGSAP(()=>{
        gsap.to("#title",{
            opacity:1,
            y:0,
            delay:1
        })
        gsap.to(".link",{
            opacity:1,
            y:0,
            delay:1,
            stagger:0.1
        })
    })
  return (
    <>
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
    <div className='screen-max-width'>
        <div className='flex justify-between'>
            <h1 id='title' className="section-heading md:flex mb-14 w-full items-end justify-between">
                Get the Highlights
            </h1>
            <div className="flex gap-5 justify-between items-end">
                <p className="link">Watch the Link 
                    <img className='ml-2' src={watchImg} alt="imgIcon" />
                </p>
                <p className="link">Watch the event {">"} </p>
            </div>
        </div>
        <div className="mt-10">
        <VideoCrousel/>
        </div>
    </div>

    </section>
    </>
  )
}

export default Highlights