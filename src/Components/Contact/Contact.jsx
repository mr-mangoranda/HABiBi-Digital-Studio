import React from 'react';

import contactCSS from './../Contact/Contact.module.css'
import star from './../../assets/star.png'
import arrow from './../../assets/arrow.png'

function Contact () {
    return (
        <div className={`${contactCSS.contactWrapper} section`} id='contact'>
            <div className={contactCSS.Content}>
                <h1 className="section_title">
                    Let's Start <br /> Project Together <img src={star} alt="" />
                </h1>      

                <p>We believe every successful project begins with strong collaboration. Whether you're building your brand, improving your online presence, or launching something new, our team is ready to bring your ideas to life with strategy, creativity, and precision. Let’s work together to create impactful digital solutions that move your business forward.</p>

                <div className={contactCSS.socialWrapper}>
                    <div className={contactCSS.detail}>
                        <p>
                            <p>Get a Call <span>+63 9107121699</span></p>
                            <p>Send us Email <span>habibmangoranda15@gmail.com</span></p>
                        </p>
                    </div>

                    <div className={contactCSS.social}>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-twitter-x-line"></i>
                        <i className="ri-youtuber-line"></i>
                        <i className="ri-github-line"></i>
                    </div>

                    <img src={arrow} alt="" id={contactCSS.arrow}/>
                    
                </div>
            </div>

            <div className={contactCSS.form}>
                <h2> Send us a Message</h2>

                <div className={contactCSS.inputWrapper}>
                    <input type="text" placeholder='Your Name'/>
                </div>

                <div className={contactCSS.inputWrapper}>
                    <input type="password" placeholder='Your Password'/>
                </div>

                <div className={contactCSS.inputWrapper}>
                    <input type="s" placeholder='Your Subject'/>
                </div>

                <textarea placeholder='Message' ></textarea>

                <button>Send us a Message</button>
            </div>
        </div>
    )
}

export default Contact