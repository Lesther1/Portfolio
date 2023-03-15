import React , {useRef} from "react";
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oxnpjjg', 'template_sc2qwht', form.current, 'f9_Ky5GtUYtw15h-Y')
    e.target.reset();
  }
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__title">Email</h3>
              <span className="contact__card-data">lesthercrespo@gmail.com</span>

              <a href="" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon"></i>

              <h3 className="contact__title">Telegram</h3>
              <span className="contact__card-data">@Lesther_Rey</span>

              <a href="https://t.me/Lesther_Rey" target='_blank' className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me</h3>
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Leave me a message"
              ></textarea>
            </div>
            <button href="" className="button button--flex">
              Send message
              <i className='bx bx-send'></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
