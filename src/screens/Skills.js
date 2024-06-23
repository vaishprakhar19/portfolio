import React from 'react'
import './skills.css';
// import { HiOutlineDocumentText } from "react-icons/hi2";
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
// import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export default function Skills() {
  return (
    <div id="skills" className='section'>
      <h2 className='heading'>Skills</h2>
      <p className='sub-heading center'>These are some of my noticable skills</p>
      <div className='card-container'>
        <div class="card">
          <div class="card2">
            <p className='sub-heading'>Frontend</p>
            <div className='item-container'>
              <button class="cssbuttons-io">
                <span>
                  <FaReact />
                  ReactJs
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <FaHtml5 />
                  HTML
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <FaCss3Alt />
                  CSS
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <IoLogoJavascript />
                  JavaScript
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <FaBootstrap />
                  Bootstrap
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card2">
            <p className='sub-heading'>Backend</p>
            <div className='item-container'>
              <button class="cssbuttons-io">
                <span>
                  <FaNode />
                  NodeJs
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <IoLogoNodejs />
                  ExpressJs
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <DiMysql />
                  SQL
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <SiAxios />
                  Axios
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <SiMongodb />
                  MongoDB
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <IoLogoFirebase />
                  Firebase
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card2">
            <p className='sub-heading'>Other</p>
            <div className='item-container'>
              <button class="cssbuttons-io">
                <span>
                  <FaGithub />
                  Github
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  {/* <VscVscode/> */}
                  VScode
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <FaJava />
                  Java
                </span>
              </button>
              <button class="cssbuttons-io">
                <span>
                  <TbBrandCpp />
                  C++
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
