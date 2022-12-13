import React from 'react'
import './Hero.css'
import Social from '../../../src/assets/images/social.png'
import Tringle from '../../../src/assets/images/tringle.png'
import Bg from '../../../src/assets/images/bg.png'
import Icon from '../../../src/assets/images/icon.png'
import Icon1 from '../../../src/assets/images/icon1.png'
import Icon2 from '../../../src/assets/images/icon2.png'
import Icon3 from '../../../src/assets/images/icon3.png'

function Hero() {
  return (
        <div className='container'>
        <div className="heroo">
            <div className="hero">
            <div className="work">
                <h1 className='speed'>
                Work  at the speed
                of thought
                </h1>
                <p className='tools'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                <div className="start">
                    <button className='get'>Get started</button>
                    <img className='tringle' src={Tringle} alt="" />
                    <a className='watch' href="/">Watch the Video</a>
                </div>
            </div>
            <div className="social">
                <img src={Social} alt="" />
            </div>
            </div>
            <h1 className='was'>
            Product  was Built Specifically <br /> <div className="for">for You</div>
            </h1>
        </div>
        <div className='bg'>
            <div className="first">
                <img src={Icon} alt="" /><br />
                <p className='firsts'> <b/> First click tests</p><br />
                <p className='firstp'>While most people enjoy casino gambling,</p>
            </div>
            <div className="design">
                <img src={Icon1} alt="" />
                <p className='designs'>Design surveys</p><br />
                <p className='designp'>Sports betting, lottery and bingo playing for the fun</p>
            </div>
            <div className="preference">
                <img src={Icon2} alt="" />
                <p className='preferences'>Preference tests</p><br />
                <p className='preferencep'>The Myspace page defines the individual.</p>
            </div>
            <div className="five">
                <img src={Icon3} alt="" />
                <p className='fives'>Five second tests</p><br />
                <p className='fivep'>Personal choices and the overall personality of the person. </p>
            </div>
        </div>
        <img className='bgs' src={Bg} alt="" />
        <button className='singupnow'>SING UP NOW</button>
    </div>
  )
}

export default Hero