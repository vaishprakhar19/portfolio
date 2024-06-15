import React from 'react';
import './home.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Typewriter from 'typewriter-effect';
const profilePic = process.env.PUBLIC_URL +'/resources/profilepic2.png';

function Home() {
    return (
        <div id="home" className='section'>
            <div className='info'>
                <div><p className="sub-heading">Hello</p><p className="sub-heading" style={{ color: "aqua" }}> I'm</p></div>
                <h1 className="heading">Prakhar Vaish</h1>
                <h3 className="sub-heading">
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'Software Developer', 'Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h3>

                <p>I'm a passionate web developer with a knack for crafting user-friendly and visually applealing websites, currently learning full stack.</p>
                <button class="cssbuttons-io">
                    <span>
                        <HiOutlineDocumentText />
                        Resume
                    </span>
                </button>
                <div className="social-media">Connect:
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