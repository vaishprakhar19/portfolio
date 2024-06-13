import React from 'react';
import "./education.css";
import birlaLogo from "../resources/birla_logo.jpg";
import RLBLogo from "../resources/rlb_logo.png";

const Education = () => {
    return (
        <div id="education" className='section'>
            <h2 className='heading'>Education</h2>
            <p className='sub-heading center'>Thats how I started</p>
            <div class="timeline">
                <div class="timeline-empty">
                </div>
                <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                <div class="timeline-component timeline-content">
                    <img className="institute-logo" src={birlaLogo}/>
                    <p className='project-heading'>Birla Institute of Applied Sciences, Bhimtal</p>
                    <p className='project-detail'>Bachelor of Technology in Computer Science and Engineering</p>
                    <p className='project-date'>Oct 2021 - Aug 2025</p>
                    <p className='project-detail'>I am currently pursuing B.Tech CSE and have completed 6 semesters</p>
                    <p style={{color:"white", marginTop:"15px"}}>Grade: 80.40%</p>
                </div>
                <div class="timeline-component timeline-content">
                    <img className="institute-logo" src={RLBLogo}/>
                    <p className='project-heading'>Rani Laxmi Bai Memorial School, Lucknow</p>
                    <p className='project-detail'>CBSE(XII), All India Senior Secondary Examination</p>
                    <p className='project-date'>Oct 2021 - Aug 2025</p>
                    <p className='project-detail'>Physics, Chemistry, Mathematics with Computer Science and English</p>
                    <p style={{color:"white", marginTop:"15px"}}>Grade: 92.60%</p>
                </div>

                <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                <div class="timeline-empty">
                </div>

                <div class="timeline-empty">
                </div>

                <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                <div class="timeline-component timeline-content">
                    <img className="institute-logo" src={RLBLogo}/>
                    <p className='project-heading'>Rani Laxmi Bai Memorial School, Lucknow</p>
                    <p className='project-detail'>CBSE(X), All India Secondary Examination</p>
                    <p className='project-date'>Oct 2021 - Aug 2025</p>
                    <p className='project-detail'>Science, Social Science, Mathematics, Information Technology, Hindi  and English</p>
                    <p style={{color:"white", marginTop:"15px"}}>Grade: 91.83%</p>
                </div>
            </div>
        </div >
    );
};

export default Education;
