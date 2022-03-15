import React from 'react';
import '../css/style.css'

const Footer = () => {
  return (
    <div className="footerClass">
        <div className="footerContainer">
            <div className="row">
                <div className="footerCol">
                    <div className="footerColInner">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">Terms & Consitions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Corporate</a></li>
                        </ul>
                    </div>
                    <div className='customerService'>
                        <h4>Customer Service</h4>
                            <a href="#">Contact us</a>
                    </div>
                </div>
                <div className="footerCol">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="#">Wellbeing</a></li>
                        <li><a href="#">Style</a></li>
                        <li><a href="#">Fun</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Eats</a></li>
                        <li><a href="#">Money</a></li>
                        <li><a href="#">Wheels</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Tech</a></li>
                    </ul>
                </div>
                <div className="footerCol">
                    <h4>Browse Popular Brands</h4>
                    <ul>
                        <li><a href="#">Blackmores</a></li>
                        <li><a href="#">Forever New</a></li>
                        <li><a href="#">General Pants</a></li>
                        <li><a href="#">Connor</a></li>
                        <li><a href="#">Guess</a></li>
                    </ul>
                </div>
                <div className="footerCol">
                    <h4>Connect with us</h4>
                    <div>
                        <a className="social" href="https://www.facebook.com/abinbev/" target="_blank"><span style={{"color": "#32a893"}}><i class="fa-brands fa-facebook fa-xl"></i></span></a>
                        <a className="social" href="https://www.instagram.com/abinbev/" target="_blank"><span style={{"color": "#32a893"}}><i class="fa-brands fa-instagram fa-xl"></i></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer