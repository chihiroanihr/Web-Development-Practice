import React from 'react'
import { arrowUp } from '../assets'
import styles from '../styles'

const GetStarted = () => {
  return (
    // Circle Button
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] bg-blue-gradient cursor-pointer`}>
      {/* only leave with circle border by doing this: */}
      <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}>

        {/* Texts */}
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>

      </div>
    </div>
  )
}

export default GetStarted