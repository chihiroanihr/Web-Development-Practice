import React from 'react'
import { quotes } from '../assets'

const FeedBackCard = ({ content, name, title, img }) => (
  <div className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>

    {/* Quote Mark Image */}
    <img src={quotes} alt="double quotes" className='w-[42px] h-[27px] object-contain' />

    {/* Quote Text Content */}
    <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

    {/* Profile Section */}
    <div className='flex flex-row'>
      {/* Avatar Image */}
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
      {/* Text: Name & Position */}
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
        <h4 className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</h4>
      </div>
    </div>

  </div>
)

export default FeedBackCard