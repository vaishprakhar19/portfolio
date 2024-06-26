import React from 'react';
import "./education.css";
const birlaLogo = process.env.PUBLIC_URL + "/resources/birla_logo.jpg";
const RLBLogo = process.env.PUBLIC_URL + "/resources/rlb_logo.png";

const Education = () => {
    return (
        <div id="education" className='section'>
            <div className="blur"></div>
            <h2 className='heading'>Education</h2>
            <p className='sub-heading center'>Thats how I started</p>
            <div id="timeline-content">

                <ul className="timeline">
                    <li className="event" data-date="Oct 2021 - Aug 2025">
                        <img className="institute-logo" src={birlaLogo} alt="institute-name" />
                        <p className='project-heading'>Birla Institute of Applied Sciences, Bhimtal</p>
                        <p className='project-detail'>Bachelor of Technology in Computer Science and Engineering</p>
                        {/* <p className='project-date'>Oct 2021 - Aug 2025</p> */}
                        <p className='project-detail'>I am currently pursuing B.Tech CSE and have completed 6 semesters</p>
                        <p className='project-date'>Grade: 80.40%</p>
                    </li>
                    <li className="event" data-date="Oct 2021 - Aug 2025">
                        <img className="institute-logo" src={RLBLogo} alt="institute-name" />
                        <p className='project-heading'>Rani Laxmi Bai Memorial School, Lucknow</p>
                        <p className='project-detail'>CBSE(XII), All India Senior Secondary Examination</p>
                        {/* <p className='project-date'>Oct 2021 - Aug 2025</p> */}
                        <p className='project-detail'>Physics, Chemistry, Mathematics with Computer Science and English</p>
                        <p className='project-date'>Grade: 92.60%</p>
                    </li>
                    <li className="event" id="date" data-date="Oct 2021 - Aug 2025">
                        <img className="institute-logo" src={RLBLogo} alt="institute-name" />
                        <p className='project-heading'>Rani Laxmi Bai Memorial School, Lucknow</p>
                        <p className='project-detail'>CBSE(X), All India Secondary Examination</p>
                        {/* <p className='project-date'>Oct 2021 - Aug 2025</p> */}
                        <p className='project-detail'>Science, Social Science, Mathematics, Information Technology, Hindi  and English</p>
                        <p className='project-date'>Grade: 91.83%</p>
                    </li>
                </ul>
            </div>


        </div >
    );
};

export default Education;
