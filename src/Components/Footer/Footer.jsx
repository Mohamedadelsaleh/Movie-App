import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box">
                        <ul className="flex">
                            <li>Terms of Use</li>
                            <li>Privacy-Policy</li>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Watch List</li>
                        </ul>
                        <p>© 2022 ONEWEB. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, OneWeb. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
                    </div>
                    <div className="box">
                        <h3>Follow Me</h3>
                        <a href="https://www.facebook.com/mohamed.adel.saleh77/" rel="noreferrer" target='_blank'><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/mohamed-adel-saleh/" rel="noreferrer" target='_blank'><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/channel/UCLo6Qu8y5NcHVl4xJ_4U9MA" rel="noreferrer" target='_blank'><i className="fab fa-youtube"></i></a>
                        <a href="https://github.com/Mohamedadelsaleh" rel="noreferrer" target='_blank'><i className="fab fa-github"></i></a>
                    </div>
                        <div className="box">
                        <h3>Streamit App</h3>
                        <div className='img flexSB'>
                            <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt=''/>
                            <span>App Store</span>
                            <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt='' />
                            <span>Google Play Store</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer