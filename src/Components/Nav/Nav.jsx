import React, { useRef } from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav() {
    
    const menu = useRef();
    
    const handler = () => {
        menu.current.classList.toggle(navCSS.activeNav);
    }

    return (
        <nav className={navCSS.nav}>
            <div className={navCSS.logo}>
                <a href="">HABiBi</a>
            </div>
            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Contact Us</button>
            <i className="ri-menu-2-line" id={navCSS.bars} onClick={handler}></i>
        </nav>

    )
}

export default Nav