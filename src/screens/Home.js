import React from 'react';
import './home.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Typewriter from 'typewriter-effect';
const profilePic = process.env.PUBLIC_URL + '/resources/profilepic2.png';

function Home() {
    return (
        <div id="home" className='section'>
            <div className='info'>
                <div data-aos="fade-right" data-aos-duration="1000"><p className="sub-heading">Hello</p><p className="sub-heading" style={{ color: "aqua" }}> I'm</p></div>
                <h1 className="heading" data-aos="fade-right" data-aos-duration="1000">Prakhar Vaish</h1>
                <h3 className="sub-heading"data-aos="fade-right" data-aos-duration="1000">
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'Software Developer', 'Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h3>

                <p data-aos="fade-right" data-aos-duration="1000">I'm a passionate web developer with a knack for crafting user-friendly and visually applealing websites, currently learning full stack.</p>
                <button className="cssbuttons-io" data-aos="fade-up" data-aos-duration="1000">
                    <span data-aos="fade-up" data-aos-duration="1000">
                        <HiOutlineDocumentText />
                        Resume
                    </span>
                </button>
                <div data-aos="fade-up" data-aos-duration="1000" className="social-media">Connect:
                    <a href="https://linkedin.com/in/vaishprakhar19">
                        <div className="hexagon"><FaLinkedin /></div>
                    </a>
                    <a href="https://github.com/vaishprakhar19">
                        <div className="hexagon"><FaGithub /></div>
                    </a>
                    <a href="mailto:vaishprakhar19@gmail.com">
                        <div className="hexagon"><IoMdMail /></div>
                    </a>
                </div>
                <img className="profile" src={profilePic} alt="profile"></img>
                
            </div>
        </div>
    )
}

export default Home