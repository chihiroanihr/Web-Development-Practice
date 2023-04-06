import React from 'react'
import FeedBackCard from './FeedBackCard'
import { feedback } from '../constants'
import styles from '../styles'

const Testimonials = () => (
  <section id="clients" className={`${styles.flexCenter} flex-col ${styles.paddingY} relative`}>

    {/* Background Gradients */}
    <div className='absolute -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient z-[0]' />

    {/* Heading Text */}
    <div className='flex md:flex-row flex-col justify-between items-center w-full sm:mb-16 mb-6 z-[1] relative'>
      {/* Title */}
      <h1 className={styles.heading2}>
        What people are <br className='sm:block hidden' /> saying about us
      </h1>
      {/* Description */}
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    {/* Feedback Cards */}
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container z-[1] relative'>
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </div>

  </section>
)

export default Testimonials