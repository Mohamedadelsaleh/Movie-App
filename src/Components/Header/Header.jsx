import React, { useState } from 'react'
import './Header.css'
import image from './images/OneWeb_Logo.png'


const Header = () => {

    const [mobile, setMobile] = useState(false);

    return (
        <>
            <header>
                <div className="container flexSB">
                    <nav className="flexSB">
                        <div className="logo">
                            <img src={image} alt="" />
                        </div>
                        <ul className={mobile ? 'navMenu-list' : 'flexSB'} onClick={() =>setMobile(false)}>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/series'>Series</a>
                            </li>
                            <li>
                                <a href='/movies'>Movies</a>
                            </li>
                            <li>
                                <a href='/pages'>Pages</a>
                            </li>
                            <li>
                                <a href='/pricing'>Pricing</a>
                            </li>
                            <li>
                                <a href='/contact'>Contact</a>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() =>setMobile(!mobile)}>
                            {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                        </nav>
                        <div className="account flexSB">
                            <i className="fa fa-search"></i>
                            <i className="fa fa-bell"></i>
                            <i className="fa fa-user"></i>
                            <button>Subscribe Now</button>
                        </div>
                </div>
            </header>
        </>
    )
}

export default Header