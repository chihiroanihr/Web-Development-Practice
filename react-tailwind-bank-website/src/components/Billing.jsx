import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>

    {/* Image Section */}
    <div className={layout.sectionImgReverse}>
      {/* Image */}
      <img src={bill} alt="billing" className='w-[100%] h-[100%] z-[5] relative' />
      {/* Background Gradients */}
      <div className='absolute -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient z-[3]' />
      <div className='absolute -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient z-[0]' />
    </div>

    {/* Info Section */}
    <div className={layout.sectionInfo}>
      {/* Texts */}
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      {/* Buttons */}
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple store" className='w-[128px] h-[42px] object-contain cursor-pointer mr-5' />
        <img src={google} alt="google play store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>

  </section>
)

export default Billing