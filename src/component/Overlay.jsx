import React from 'react'
import '../style.css'

const Section = (props) => {
    return(
        <section className='h-screen w-screen flex flex-col items-center text-white md:p-10 font-montserrat'>
            <div className='w-11/12 md:w-4/5 m-auto'>
                {props.children}
            </div>
        </section>
    )
}


const Overlay = () => {
  return (
    <>
        <Section>
            <h1 className='text-3xl font-bold text-center'>Faayaz Nur</h1>
        </Section>
        <Section>
            <h1 className='text-3xl font-bold text-center'>Eikhane thakbe Video Gula</h1>
        </Section>
        <Section>
            <h1 className='text-3xl font-bold text-center'>Render Gula</h1>
        </Section>
        <Section>
            <h1 className='text-3xl font-bold text-center'>Extra whatever</h1>
        </Section>
        <Section>
            <h1 className='text-3xl font-bold text-center'>Footer</h1>
        </Section>
    </>
    
  )
}

export default Overlay