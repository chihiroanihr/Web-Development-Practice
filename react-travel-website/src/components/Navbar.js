import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../App.css';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // toggle side menu based on hamburger icon & close icon
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // show sign up button depending on viewport
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    // render sign up button only at beginning (at page loaded) -> for small bug fix
    useEffect(() => {
        showButton();
    }, []);
    // activate showButton() function on window resize
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">

                    {/* Brand Logo */}
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>

                    {/* Hamburger Menu */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    {/* Nav Items */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>

                        {/* hide when large screen */}
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>

                    {/* hide when small screen */}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar;