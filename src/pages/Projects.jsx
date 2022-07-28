import "./Layout.scss"
import "../App.scss"
import { useState, useEffect } from "react"
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
            projectName={"Support Desk for railway issues"}
            stack={"React | Redux | Node.js | Express | MongoDB"}
            link={"https://charlesc-project-support-desk.herokuapp.com/"}
            desc={
              <ul>
                <li>
                  A web app that allows user to create tickets to request for
                  support on railway issues.
                </li>
                <li>
                  User can create new account on the app. Tickets created can be
                  retrieved when logged in.
                </li>
                <li>
                  Notes can be made on each ticket for following up and handling
                  by staff.
                </li>
                <li>
                  All user accounts and tickets are stored as MongoDB on cloud.
                </li>
              </ul>
            }
          />
          <ProjectItem
            projectName={"Sudoku Solver"}
            stack={"Node.js | Express"}
            link={"https://charles-sudoku-solver.herokuapp.com/"}
            desc={
              <ul>
                <li>A REST API backend service for solving and validating sudoku puzzles. </li>
                <li>
                Users can send puzzle string to the end point to retrieve the solution. 
                </li>
                <li>The frontend is powered by React for demonstration.</li>
              </ul>
            }
          />
          <ProjectItem
            projectName={"Exercise Tracker"}
            stack={"Node.js | Express | MongoDB"}
            link={"https://github.com/charcparle/exercise-tracker"}
            desc={
              <ul>
                <li>A REST API microservice project.</li>
                <li>
                  Users can create a user, record the exercises, and retrieve
                  past records.
                </li>
                <li>The entries are saved in MongoDB Atlas cloud database.</li>
              </ul>
            }
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
          <ProjectItem
            projectName={"Aircraft Design Research Project using MARILib "}
            stack={"Python | Pandas | Plotly | MARILib"}
            link={""}
          />
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Projects
