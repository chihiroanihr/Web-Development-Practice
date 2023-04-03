import React from 'react'
import Button from './Button'
import '../App.css';
import './HeroSection.css';
import coverVideo from '../assets/videos/video-2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video autoPlay loop muted>
                <source src={coverVideo} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video> */}
            <video src={coverVideo} type="video/mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>

            <div className="hero-btns">
                <Button
                    className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >GET STARTED
                </Button>
                <Button
                    className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;