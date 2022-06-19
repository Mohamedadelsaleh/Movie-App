import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                            <Link to="/Movie-App/">Home</Link>
                            <Link to="/Movie-App/series">Series</Link>
                            <Link to="/Movie-App/movies">Movies</Link>
                            <Link to="/Movie-App/pages">Pages</Link>
                            <Link to="/Movie-App/pricing">Pricing</Link>
                            <Link to="/Movie-App/contact">Contact</Link>
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