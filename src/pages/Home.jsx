import "./Home.scss"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import WAVES from "vanta/dist/vanta.waves.min"
import AnimatedLetters from "../components/AnimatedLetters"
function Home() {
  const [letterClass, setLetterClass] = useState("")
  const [vantaEffect, setVantaEffect] = useState(0)
  const bgRef = useRef(null)
  useEffect(() => {
    setLetterClass("text-animate")
    return setTimeout(() => setLetterClass("text-animate-hover"), 5000)
  }, [])
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: bgRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 4.0,
          scaleMobile: 1.0,
          color: 0x757575,
          shininess: 0.0,
          waveHeight: 33.0,
          waveSpeed: 0.8,
          zoom: 1.5,
        })
      )
    }
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy()
    // }
  }, [vantaEffect])
  return (
    <>
      <div className="home-page h-full" ref={bgRef}>
        <div className="absolute w-4/5 m-20 mt-36" id="textzone">
          <h1 className="text-gray-300 text-8xl drop-shadow-lg">
            Hello there,
            <br />
            I'm
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              str={"Charles Cheng"}
              idx={20}
            />
          </h1>
          <h2 className="text-gray-900 font-bold mt-12 tracking-widest drop-shadow-sm">
            Full-stack Developer | Freelancer | Civil Engineer
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
