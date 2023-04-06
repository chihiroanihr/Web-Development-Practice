import React from 'react'
import GetStarted from './GetStarted'
import { discount, robot } from '../assets'
import styles from '../styles'

const Hero = () => (
  // Hero section
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

    {/* Left Section */}
    <div className={`${styles.flexStart} flex-col flex-1 xl:px-0 sm:px-16 px-6`}>

      {/* Discount Text */}
      <div className="flex flex-row items-center mb-2 px-4 py-[6px] bg-discount-gradient rounded-[10px]">
        <img
          src={discount}
          alt="discount"
          className="w-[32px] h-[32px]"
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      {/* Main Header Text */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className='flex-1 font-poppins font-semibold text-white ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
          The Next <br className='sm:block' hidden /> {" "}
          <span className='text-gradient'>Generation</span>
        </h1>
        {/* Get Started Button */}
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className='w-full font-poppins font-semibold text-white ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]'>
        Payment Mehod.
      </h1>

      {/* Description Text */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
      </p>

    </div>


    {/* Right Section */}
    <div className={`relative ${styles.flexCenter} flex-1 md:my-0 my-10`}>
      {/* Image */}
      <img
        src={robot}
        alt="billing"
        className='relative w-[100%] h-[100%] z-[5]'
      />
      {/* Background Gradients */}
      <div className='absolute top-0 w-[40%] h-[35%] pink__gradient z-[0]'></div>
      <div className='absolute bottom-40 w-[80%] h-[80%] rounded-full white__gradient z-[1]'></div>
      <div className='absolute right-20 bottom-20 w-[50%] h-[50%] blue__gradient z-[0]'></div>
    </div>


    {/* Small Screen - Mobile Version (Get Started Btn Position) */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>

  </section>
)

export default Hero