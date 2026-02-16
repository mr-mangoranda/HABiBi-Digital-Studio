import React from "react";
import serviceCSS from './../Service/Service.module.css'


import star from './../../assets/star.png'
import IMGArrow from './../../assets/arrow-right.svg'
import serviceBg from './../../assets/Service-bg.jpg'

function Service() {
    return (

        <div className={`${serviceCSS.ServiceWrapper} section`} id="service">
            <h1 className="section_title">
                We Provide A Effective <br /> Design Solutions
                <img src={star} alt="" />
            </h1>

            <div className={serviceCSS.serviceCards}>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-shape-line"></i>
                    <h2>Graphic Design</h2>
                    <p>We create visually compelling designs that communicate your brand clearly and effectively. From logos and marketing materials to social media visuals, our graphic design solutions help you leave a lasting impression across every platform.</p>
                    <img src={IMGArrow} alt="" />
                </div>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-exchange-line"></i>
                    <h2>UI/UX Design</h2>
                    <p>We craft intuitive interfaces that prioritize both usability and aesthetics. By understanding user behavior and applying smart design principles, we create seamless digital experiences that are easy to navigate and enjoyable to use.</p>
                    <img src={IMGArrow} alt="" />
                </div>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-terminal-box-line"></i>
                    <h2>Web Design</h2>
                    <p>We design modern, responsive websites that look great and perform even better. Our focus is on clean layouts, fast loading speeds, and user-friendly experiences that help convert visitors into loyal customers.</p>
                    <img src={IMGArrow} alt="" />
                </div>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-meteor-line"></i>
                    <h2>Motion Design</h2>
                    <p>We bring ideas to life through dynamic motion graphics and animations. Whether for branding, social media, or presentations, our motion design adds energy and storytelling that captures attention and enhances engagement.</p>
                    <img src={IMGArrow} alt="" />
                </div>
            </div>

            <div className={serviceCSS.Title}>
                <h3>
                    We Make Your <img src={star} alt="" />

                    
                    <br /> Business Stand Out
                </h3>

                <p>We turn ideas into standout brand experiences that leave a lasting impact. Through thoughtful design and innovative solutions, we help businesses build strong identities, connect with their audience, and grow with confidence.</p>
            </div>

            <div className={serviceCSS.service_bottom_container}>
                <div className={serviceCSS.serviceImg}>
                    <img src={serviceBg} alt="" />
                </div>
                <div className={serviceCSS.service_contentWrapper}>
                    <div className={serviceCSS.content}>
                        <h2>1+</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className={serviceCSS.content}>
                        <h2>10+</h2>
                        <p>Success Projects</p>
                    </div>
                    <div className={serviceCSS.content}>
                        <h2>99%</h2>
                        <p>Client Happiness Rate</p>
                    </div>
                
                </div>
            </div>            
        </div>
    )
}

export default Service