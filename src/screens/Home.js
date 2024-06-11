import React from 'react';
import './home.css';
import profilePic from '../resources/profilepic2.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";

function Home() {
    return (
        <div className='home section'>
            <div className='info'>
                <div><p className="sub-heading">Hello</p><p className="sub-heading" style={{ color: "aqua" }}> I'm</p></div>
                <h1 className="heading">Prakhar Vaish</h1>
                <h3 className="sub-heading">Frontend Web Developer</h3>
                <p>I'm a passionate web developer with a knack for crafting user-friendly and visually applealing websites, currently learning full stack.</p>
                <button class="cssbuttons-io">
                    <span>
                        <HiOutlineDocumentText />
                        Resume
                    </span>
                </button>
                <div className="social-media">Connect:
                    <div className="hexagon"><FaLinkedin /></div>
                    <div className="hexagon"><FaGithub /></div>
                    <div className="hexagon"><IoMdMail /></div>
                </div>
            </div>
            <img className="profile" src={profilePic} alt="profile"></img>
        </div>
    )
}

export default Home