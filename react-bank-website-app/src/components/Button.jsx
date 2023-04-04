import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`px-6 py-4 bg-blue-gradient rounded-[10px] outline-none font-poppins font-medium text-[18px] text-primary ${styles}`}>
      Get Started
    </button>
  )
}

export default Button