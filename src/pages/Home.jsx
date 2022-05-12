import './Home.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../components/AnimatedLetters'
function Home() {
  const [letterClass, setLetterClass] = useState('')
  useEffect(() => {
    setLetterClass('text-animate')
    return setTimeout(() => setLetterClass('text-animate-hover'), 5000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="absolute w-4/5 m-20" id='textzone'>
          <h1>
            Hello there,
            <br />
            I'm
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              str={'Charles Cheng'}
              idx={20}
            />
          </h1>
          <h2>Full-stack Developer | Freelancer | Civil Engineer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
