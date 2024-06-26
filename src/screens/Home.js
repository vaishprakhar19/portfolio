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
                <div data-aos="fade-right" data-aos-duration="1000"><p className="sub-heading">Hello</p><p className="sub-heading" style={{ color: "var(--light)" }}> I'm</p></div>
                <h1 className="heading" data-aos="fade-right" data-aos-duration="1000">Prakhar Vaish</h1>
                <h3 className="sub-heading" data-aos="fade-right" data-aos-duration="1000">
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
            </div>
                <img className="profile" src={profilePic} alt="profile" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="10"></img>
                <div className='hexagon profile-bg' data-aos="fade-down" data-aos-duration="1000"></div>
                <svg id="wave-bg" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink" version="1.1">

                    <path
                        d="M0 437L12.5 444.7C25 452.3 50 467.7 75 474.8C100 482 125 481 150 484.3C175 487.7 200 495.3 225 487.5C250 479.7 275 456.3 300 440.8C325 425.3 350 417.7 375 431.8C400 446 425 482 450 484C475 486 500 454 525 448C550 442 575 462 600 466.2C625 470.3 650 458.7 675 449.8C700 441 725 435 750 449C775 463 800 497 825 497.7C850 498.3 875 465.7 887.5 449.3L900 433L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
                        fill="#3aa0ff" strokeLinecap="round" strokeLinejoin="miter"></path>
                </svg>
        </div>
    )
}

export default Home