import React from 'react'
import Aboutimg from '../../assets/profile.jpg'
import CV from '../../assets/CV-LESTHER-REY.pdf'
import './about.css'

function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">Profesional Profile</span>
        <div className="about__container container grid">
            <img src={Aboutimg} alt="" className="about__img" />
            <div className="about__data">
                <p className="about__description">
                I am a junior web developer passionate about creating innovative solutions in the digital world. With a strong background in programming and skills in web technologies, I am committed to learning and growing in my career. I am in the process of expanding my knowledge in other technologies and frameworks. I am excited to apply my skills and knowledge to contribute to ambitious and challenging projects.
                </p>

                <a download="" href={CV} className="button button--flex">
                    Download CV
                    <i className="uil uil-file"></i>
                    </a>
            </div>
        </div>
    </section>
  )
}

export default About