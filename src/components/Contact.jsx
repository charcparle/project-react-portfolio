import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'
import './Contact.scss'
function Contact() {
  const [letterClass, setLetterClass] = useState('')
  useEffect(() => {
    setLetterClass('text-animate')
    return setTimeout(() => setLetterClass('text-animate-hover'), 5000)
  }, [])
  const form = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
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
            <form onSubmit={handleSubmit} ref={form}>
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="Subject"
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
