import React from "react";
import headerCSS from "./../Header/Header.module.css"

import star from './../../assets/star.png'
import user1 from './../../assets/user1.png'
import user2 from './../../assets/user2.png'
import user3 from './../../assets/user3.png'
import headerIMG from './../../assets/header-img.jpg'
import arrow from './../../assets/arrow.png'


function Header () {
    return (
        <div className={`${headerCSS.headerWrapper} section`}>
            <div className={headerCSS.content}>
                <h1>A Creative
                    <img src={star} alt="" /> <br />

                    <br /> Digital Studio
                </h1>

                <p>HABiBi Digital Studio is a creative digital studio based in Lanao del Sur, dedicated to helping brands, businesses, and organizations bring their ideas to life. We specialize in modern web design, branding, and digital solutions that blend creativity, strategy, and technology.</p>
                
                <div className={headerCSS.profiles}>
                    <div className={headerCSS.img}>
                        <img src={user1} alt="" />
                        <img src={user2} alt="" />
                        <img src={user3} alt="" />
                    </div>

                    <p>At HABiBi, creativity meets purpose—turning visions into powerful digital stories.</p>
                </div>

                <button>Book a Free Consultation</button>

                <img src={arrow} alt="" id={headerCSS.arrow}/>
            </div>


            <div className={headerCSS.headerIMG}>
                <img src={headerIMG } alt="" />
            </div>
        </div>
    ) 
}

export default Header