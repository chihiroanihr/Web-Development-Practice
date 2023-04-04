import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { logoText } from '../assets'
import styles from '../styles'

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>

    {/* Before Border Line */}
    <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>

      {/* Text Section */}
      <div className='flex flex-col flex-1 justify-start mr-10'>
        {/* Logo */}
        <img
          src={logoText}
          alt="hoobank"
          className='w-[266px] h-[72px] object-contain'
        />
        {/* Text */}
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      {/* Links Section */}
      <div className='flex flex-row flex-[1.5] flex-wrap justify-between w-full md:mt-0 mt-10'>
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col min-w-[150px] ss:my-0 my-4">
            {/* Link Title */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            {/* Links Lists */}
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={
                    `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                    ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}
                  `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>


    {/* After Border Line */}
    <div className='flex md:flex-row flex-col justify-between items-center w-full pt-6 border-t-[1px] border-t-[#3f3e45]'>

      {/* All Rights Reserved */}
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 HooBank. All Rights Reserved.
      </p>

      {/* Social Media Icons */}
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        ))}
      </div>

    </div>

  </section>
)

export default Footer