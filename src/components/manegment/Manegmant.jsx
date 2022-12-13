import React from 'react'
import './Manegmant.css'
import Amico from '../../../src/assets/images/amico.png'
import Amicos from '../../../src/assets/images/amicos.png'
import Sariq from '../../../src/assets/images/sariq.png'
import Kok from '../../../src/assets/images/kok.png'
import Qizil from '../../../src/assets/images/qizil.png'
import Amicoc from '../../../src/assets/images/amicoc.png'


function Manegmant() {
  return (
    <div className='container'>
        <div className="manegmant">
            <div className="effect">
                <div className="title">
                    <p className='pEff'>Effortless Validation for</p>
                    <h1 className='h1man'>Management</h1>
                    <p className='pacc'>Accessory makers</p>
                    <p className='pWhi'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                    <p className='pAl'>Alterationists</p>
                    <p className='pif'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                </div>
                <img className='amico' src={Amico} alt="" />
            </div>
            <div className="costumer">
                <img src={Amicos} alt="" />
                <div className="taytle">
                    <h3 className='h3eas'>Easier decision making for</h3>
                    <h1 className='h1cos'>Customer Support</h1>
                    <p className='pthe'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                    <div className="galoch">
                        <img src={Sariq} alt="" />
                        <p className='pne'>Never worry about overpaying for your energy again. </p>
                    </div><br /><br />
                    <div className="galoch">
                        <img src={Qizil} alt="" />
                        <p className='pne'>We will only switch you to energy companies that we trust and will treat you right</p>
                    </div><br /><br />
                    <div className="galoch">
                        <img src={Kok} alt="" />
                        <p className='pne'>We track the markets daily and know where the savings are.</p>
                    </div>
                </div>
            </div>
            <div className="callobrat">
                <div className="title">
                    <p className='pEff1'>Optimisation for</p>
                    <h1 className='h1man'>Collaborative</h1>
                    <p className='pfew'>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                    <p className='pacc'>Accessory makers</p>
                    <p className='pWhi'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                    <p className='pAl'>Alterationists</p>
                    <p className='pif'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                </div>
                <img className='amico' src={Amicoc} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Manegmant