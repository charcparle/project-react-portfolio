import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
function NavBar() {
  const navigate = useNavigate()
  return (
    <div className="flex relative bg-gray-300 w-full text-xl justify-between">
      <div className="justify-start">
        <div className="flex flex-row justify-start h-full p-2">
          <a
            href="https://www.linkedin.com/in/charles-yh-cheng/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mx-2 h-full" />
          </a>
          <a
            href="https://github.com/charcparle"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="mx-2 h-full" />
          </a>
          <p>CHARLESCHENG.TECH</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="p-2 m-2 hover:drop-shadow-md hover:cursor-pointer ">
          <p
            className="text-center text-gray-900 font-bold hover:text-gray-600 hover:decoration-wavy hover:underline hover:underline-offset-4"
            onClick={() => navigate("/")}
          >
            Home
          </p>
        </div>
        <div className="p-2 m-2 hover:drop-shadow-md hover:cursor-pointer">
          <p
            className="text-center text-gray-900 font-bold hover:text-gray-600 hover:decoration-wavy hover:underline hover:underline-offset-4"
            onClick={() => navigate("/about")}
          >
            About
          </p>
        </div>
        <div className="p-2 m-2 hover:drop-shadow-md hover:cursor-pointer">
          <p
            className="text-center text-gray-900 font-bold hover:text-gray-600 hover:decoration-wavy hover:underline hover:underline-offset-4"
            onClick={() => navigate("/projects")}
          >
            Projects
          </p>
        </div>
        <div className="p-2 m-2 hover:drop-shadow-md hover:cursor-pointer">
          <p
            className="text-center text-gray-900 font-bold hover:text-gray-600 hover:decoration-wavy hover:underline hover:underline-offset-4"
            onClick={() => navigate("/contact")}
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
