import { useState, useEffect } from "react"
import "./Projects.scss"
import "./Layout.scss"
import "../App.scss"
import AnimatedLetters from "../components/AnimatedLetters"
import ProjectItem from "../components/ProjectItem"
import Loader from "react-loaders"

function Projects() {
  const [letterClass, setLetterClass] = useState("")
  useEffect(() => {
    setLetterClass("text-animate")
    return setTimeout(() => setLetterClass("text-animate-hover"), 5000)
  }, [])
  return (
    <>
      <div className="projects-page h-full">
        <div className="absolute w-4/5 m-20 mt-36">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              str={"Projects"}
              idx={20}
            />
          </h1>
          <ProjectItem
            projectName={"Support desk ticketing platform"}
            stack={"React | Redux | Node.js | Express | MongoDB"}
            link={"https://charlesc-project-support-desk.herokuapp.com/"}
          />
          <ProjectItem
            projectName={"Sudoku Solver"}
            stack={"Node.js | Express"}
            link={"https://charles-sudoku-solver.herokuapp.com/"}
          />
          <ProjectItem
            projectName={"Exercise Tracker"}
            stack={"Node.js | Express | MongoDB"}
            link={""}
          />
          <ProjectItem
            projectName={"Github user finder"}
            stack={"React | Github API"}
            link={"https://project-github-finder.vercel.app/"}
          />
          <ProjectItem
            projectName={"House Marketplace app"}
            stack={"React | Firebase"}
            link={"https://project-house-marketplace-app.vercel.app/"}
          />
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Projects
