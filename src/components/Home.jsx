import './Home.scss'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hello there,
            <br />
            I'm
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <br />
            Charles Cheng
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
