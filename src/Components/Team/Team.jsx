import React from 'react';
import teamCSS from './../Team/Team.module.css'

import Team1 from './../../assets/team1.png'
import Team2 from './../../assets/team2.png'
import Team3 from './../../assets/team3.png'
import Team4 from './../../assets/team4.png'
import Team5 from './../../assets/team5.png'

import star from './../../assets/star.png'

function Team () {
    return (
        <div className={teamCSS.teamWrapper}>
            <div className={teamCSS.anim_text}>
                <div>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                </div>
                 
                <div>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                    <h3>Meet Our Team <img src={star} alt="" /></h3>
                </div>

                
            </div>

            <h1 className="section_title">
                We Have Team of  <br /> Creative People <img src={star} alt="" />
            </h1>      

            <div className={teamCSS.Teams_Cards}>
                <div className={teamCSS.card}>
                    <img src={Team1} alt="" />
                    <h3>Habib Mangoranda</h3>
                    <p>Creative Team</p>
                </div>

                <div className={teamCSS.card}>
                    <img src={Team2} alt="" />
                    <h3>Jorhan Olomoding</h3>
                    <p>Creative Team</p>
                </div>

                <div className={teamCSS.card}>
                    <img src={Team3} alt="" />
                    <h3>Renalyn Bascones</h3>
                    <p>Creative Team</p>
                </div>

                <div className={teamCSS.card}>
                        <img src={Team4} alt="" />
                        <h3>Marjaan Taher</h3>
                        <p>Creative Team</p>
                </div>

                <div className={teamCSS.card}>
                        <img src={Team5} alt="" />
                        <h3>Lacsaman Abdullah</h3>
                        <p>Creative Team</p>
                </div>

            </div>
        </div>
    ) 
}

export default Team