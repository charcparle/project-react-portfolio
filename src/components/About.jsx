import './About.scss'
// import {
//   faAngular,
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from './AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
function About() {
  const [letterClass, setLetterClass] = useState('')
  useEffect(() => {
    setLetterClass('text-animate')
    return setTimeout(() => setLetterClass('text-animate-hover'), 5000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              str={'About Me'}
              idx={15}
            />
          </h1>
          <p>
            This is me. Always looking for how things work. Civil engineer,
            turned railway engineer. Studied in aeronautical engineering to seek
            top-notch technology. Picked up the long hidden interest of coding
            in the process. Moved from Hong Kong to Canada for more open choices
            in life.
          </p>
          <p>
            A husband, a father, and enthusiastic about the technology in life.
          </p>
          <p align="RIGHT">
            Don't hesitate to reach out to me for any opportunities you see fit
            :)
          </p>
        </div>
        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
