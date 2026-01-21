import React from "react";
import serviceCSS from './../Service/Service.module.css'


import star from './../../assets/star.png'
import IMGArrow from './../../assets/arrow-right.svg'
import serviceBg from './../../assets/Service-bg.jpg'

function Service() {
    return (

        <div className={`${serviceCSS.ServiceWrapper} section`}>
            <h1 className="section_title">
                We Provide A Effective <br /> Design Solutions
                <img src={star} alt="" />
            </h1>

            <div className={serviceCSS.serviceCards}>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-shape-line"></i>
                    <h2>Graphic Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt?</p>
                    <img src={IMGArrow} alt="" />
                </div>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-exchange-line"></i>
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt?</p>
                    <img src={IMGArrow} alt="" />
                </div>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-terminal-box-line"></i>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt?</p>
                    <img src={IMGArrow} alt="" />
                </div>
                <div className={serviceCSS.serviceCard}>
                    <i className="ri-meteor-line"></i>
                    <h2>Motion Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt?</p>
                    <img src={IMGArrow} alt="" />
                </div>
            </div>

            <div className={serviceCSS.Title}>
                <h3>
                    We Make Your <img src={star} alt="" />

                    
                    <br /> Business Stand Out
                </h3>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam vitae, voluptatem alias ipsum corrupti quia error officia distinctio nobis cum?</p>
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