import AcercaDe from '@/components/Acerca/AcercaDe/AcercaDe'
import Hero from '@/components/Acerca/Hero/Hero'
import Valores from '@/components/Acerca/Valores/Valores'
import React from 'react'

function Acerca() {
  return (
    <div className='w-full h-full px-4'>
        <Hero/>
        <AcercaDe/>
        <Valores/>
    </div>
  ) 
}

export default Acerca