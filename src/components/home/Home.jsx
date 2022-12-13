import React from 'react'
import './Home.css'
import Logo1 from '../../../src/assets/images/logo1.png'
import Logo from '../../../src/assets/images/logo.png'
import Mode from '../../../src/assets/images/mode.png'

function Home() {
  return (
    <div className="container">
      <div className='home'>
        <div className="img">
          <img className='img1' src={Logo1} alt="" />
          <img className='logo'src={Logo} alt="" />
        </div>
        <div className="href">
          <a className='ahref' href="/">Product</a>
          <a className='ahref' href="/">Customers</a>
          <a className='ahref' href="/">Pricing</a>
          <a className='ahref' href="/">Resources</a>
        </div>
        <div className="sing">
          <button className='singin'>Sing In</button>
          <button className='singup'>Sing Up</button>
        </div>
        <button className='mode'><img src={Mode} alt="" /></button>
      </div>
    </div>
  )
}

export default Home