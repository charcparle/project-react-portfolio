import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'
import './Contact.scss'
import emailjs from '@emailjs/browser'
function Contact() {
  const [letterClass, setLetterClass] = useState('')
  useEffect(() => {
    setLetterClass('text-animate')
    return setTimeout(() => setLetterClass('text-animate-hover'), 5000)
  }, [])
  const refForm = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail_personal', 'contact_form', refForm.current,process.env.REACT_APP_EMAILJS_KEY).then(
      function () {
        console.log('SUCCESS!')
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
    console.log('Form submitted')
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              str={'Contact me'}
              idx={15}
            />
          </h1>
          <p>
            Feel free to contact me - I am constantly looking for exciting
            projects to work on.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit} ref={refForm}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="message" name="message" />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
