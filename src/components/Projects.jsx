import { useState, useEffect, useRef } from 'react'
import './Projects.scss'
import AnimatedLetters from './AnimatedLetters'
import ProjectItem from './ProjectItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  const [letterClass, setLetterClass] = useState('')
  useEffect(() => {
    setLetterClass('text-animate')
    return setTimeout(() => setLetterClass('text-animate-hover'), 5000)
  }, [])
  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            str={'Projects'}
            idx={20}
          />
        </h1>
        <ProjectItem
          projectName={'Support desk ticketing platform'}
          stack={'React | Redux | Node.js | Express | MongoDB'}
          link={'https://charlesc-project-support-desk.herokuapp.com/'}
        />
        <ProjectItem
          projectName={'Sudoku Solver'}
          stack={'Node.js | Express'}
          link={''}
        />
        <ProjectItem
          projectName={'Exercise Tracker'}
          stack={'Node.js | Express | MongoDB'}
          link={''}
        />
        <ProjectItem
          projectName={'Github user finder'}
          stack={'React | Github API'}
          link={'https://project-github-finder.vercel.app/'}
        />
        <ProjectItem
          projectName={'House Marketplace app'}
          stack={'React | Firebase'}
          link={'https://charlesc-project-support-desk.herokuapp.com/'}
        />
      </div>
    </div>
  )
}

export default Projects
