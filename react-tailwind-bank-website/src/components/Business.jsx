import React from 'react'
import Button from './Button'
import { features } from "../constants"
import styles, { layout } from "../styles"


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row items-center p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>

    {/* Icon */}
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}>
      <img
        src={icon}
        alt="icon"
        className='w-[50%] h-[50%]  object-contain'
      />
    </div>

    {/* Texts */}
    <div className='flex flex-col flex-1 ml-3'>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>

  </div>
)


const Business = () => {
  return (
    <section id="features" className={layout.section}>

      {/* Text Sections */}
      <div className={layout.sectionInfo}>
        {/* Title */}
        <h2 className={styles.heading2}>
          You do the business,
          <br className='sm:block hidden' /> {" "}
          we'll  handle the money.
        </h2>
        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. {" "}
          But with hundreds of credit cards on the market.
        </p>
        {/* Get Started Button */}
        <Button styles="mt-10" />
      </div>

      {/* Feature Cards */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Business