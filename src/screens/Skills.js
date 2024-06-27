import React from 'react';
import './skills.css';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export default function Skills() {
  return (
    <div id="skills" className='section'>
      <div className="blur"></div>
      <h2 className='heading'>Skills</h2>
      <p className='sub-heading center'>These are some of my noticeable skills</p>
      <div className='skills-conatiner'>
        <div className='hex-container'>
          <h2 className='center'>Frontend</h2>
          <div className='hex-layer-3'>
            <div className='hexagon'>
              <FaReact />
              <span>ReactJs</span>
            </div>
            <div className='hexagon'>
              <FaHtml5 />
              <span>HTML</span>
            </div>
            <div className='hexagon'>
              <FaCss3Alt />
              <span>CSS</span>
            </div>
          </div>
          <div className='hex-layer-2'>
            <div className='hexagon'>
              <IoLogoJavascript />
              <span>JavaScript</span>
            </div>
            <div className='hexagon'>
              <FaBootstrap />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        <div className='hex-container'>
          <h2 className='center'>Backend</h2>
          <div className='hex-layer-3'>
            <div className='hexagon'>
              <FaNode />
              <span>NodeJs</span>
            </div>
            <div className='hexagon'>
              <IoLogoNodejs />
              <span>ExpressJs</span>
            </div>
            <div className='hexagon'>
              <DiMysql />
              <span>SQL</span>
            </div>
          </div>
          <div className='hex-layer-2'>
            <div className='hexagon'>
              <SiAxios />
              <span>Axios</span>
            </div>
            <div className='hexagon'>
              <SiMongodb />
              <span>MongoDB</span>
            </div>
          </div>
          <div className='hex-layer-1'>
            <div className='hexagon'>
              <IoLogoFirebase />
              <span>Firebase</span>
            </div>
          </div>
        </div>

        <div className='hex-container'>
          <h2 className='center'>Others</h2>
          <div className='hex-layer-3'>
            <div className='hexagon'>
              <FaJava />
              <span>Java</span>
            </div>
            <div className='hexagon'>
              <TbBrandCpp />
              <span>C++</span>
            </div>
            <div className='hexagon'>
              <FaFigma />
              <span>Figma</span>
            </div>
          </div>
          <div className='hex-layer-2'>
            <div className='hexagon'>
              <FaGithub />
              <span>Github</span>
            </div>
            <div className='hexagon'>
              <TbBrandVscode />
              <span>VScode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
