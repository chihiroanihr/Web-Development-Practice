import React from 'react'
import Button from './Button'
import styles from '../styles'

const CTA = () => (
  <section className={`${styles.flexCenter} sm:flex-row flex-col ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex flex-col flex-1'>
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA