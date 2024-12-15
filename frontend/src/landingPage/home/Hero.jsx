import React from 'react'
import heroimage from "../../assets/images/homeHero.png"
const Hero = () => {
  return (
    <div className='container p-5 mb-5 '>
      <div className='row text-center ' style={{maxHeight:"45vh"}}>
      <img className='mb-5' src={heroimage} alt='HeroImage'/>
      <h1 className='mt-5 '>
    Invest in everything
      </h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.Sign up for free</p>
      <button className='pt-2 btn btn-primary' style={{width:"20%", margin:"0 auto" }}>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero