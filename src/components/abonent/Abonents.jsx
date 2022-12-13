import React from 'react'
import './Abonents.css'
import Bsg from '../../../src/assets/images/bg1.png'
import Opa from '../../../src/assets/images/opa.png'
import Hola from '../../../src/assets/images/hola.png'
import Aka from '../../../src/assets/images/aka.png'
import Toga from '../../../src/assets/images/toga.png'

function Abonents() {
  return (
    <div className='container'>
        <div className="abonents">
            <img className='bsg' src={Bsg} alt="" />
            <div className="abonent">
                <h1 className='quick'>Quick & Easy Process</h1>
                <p className='do'>
                    Do you require some help for your project: Conception workshop,
                    prototyping, marketing strategy, landing page, Ux/UI?
                </p>
                <img className='opa' src={Opa} alt="" />
                <img className='hola' src={Hola} alt="" />
                <img className='aka' src={Aka} alt="" />
                <img className='toga' src={Toga} alt="" />
            </div>
            <button className='contact'>Contact our expert</button>
        </div>
    </div>
  )
}

export default Abonents