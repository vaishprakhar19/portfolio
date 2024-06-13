import React from 'react';
import "./education.css";

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
                    <p className='project-heading'>Birla Institute of Applied Sciences, Bhimtal</p>
                    <p className='project-detail'>Bachelor of Technology in Computer Science and Engineering</p>
                    <p className='project-date'>Oct 2021 - Aug 2025</p>
                    <p className='project-detail'>I am current</p>
                </div>
                <div class="timeline-component timeline-content">
                    <p className='project-heading'>Birla Institute of Applied Sciences, Bhimtal</p>
                    <p className='project-detail'>Bachelor of Technology in Computer Science and Engineering</p>
                    <p className='project-date'>Oct 2021 - Aug 2025</p>
                    <p className='project-detail'>Some Text</p>
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
                    <p className='project-heading'>Birla Institute of Applied Sciences, Bhimtal</p>
                    <p className='project-detail'>Bachelor of Technology in Computer Science and Engineering</p>
                    <p className='project-date'>Oct 2021 - Aug 2025</p>
                    <p className='project-detail'>Some Text</p>
                </div>
            </div>
        </div >
    );
};

export default Education;
