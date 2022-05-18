import "./About.scss"
import AnimatedLetters from "../components/AnimatedLetters"
import { useState, useEffect } from "react"
import Loader from "react-loaders"
function About() {
  const [letterClass, setLetterClass] = useState("")
  useEffect(() => {
    setLetterClass("text-animate")
    return setTimeout(() => setLetterClass("text-animate-hover"), 5000)
  }, [])
  return (
    <>
      <div className="about-page h-full">
        <div className="absolute w-4/5 m-20 mt-36">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              str={"About Me"}
              idx={15}
            />
          </h1>
          <p>
            This is me. Always looking for how things work. Civil engineer,
            turned railway engineer. Studied in aeronautical engineering to seek
            top-notch technology. Picked up the long hidden interest of coding
            in the process. Moved from Hong Kong to Canada for more open choices
            in life.
          </p><br />
          <p>
            A husband, a father, and enthusiastic about the technology in life.
          </p><br /><br />
          <p>
            Don't hesitate to reach out to me for any opportunities you see fit
            :)
          </p>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default About
