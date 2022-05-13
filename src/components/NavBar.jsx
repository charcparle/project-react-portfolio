import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
function NavBar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex relative bg-gray-300 w-full text-xl justify-between">
        <div className="flex justify-start">
          <div className="flex flex-row justify-start h-full p-2">
            <div className="leading-5" id="logo">
              CHARLESCHENG
              <br className="" />
              .TECH
            </div>
            <div className="hidden sm:flex flex-row p-2" id="social-links">
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
            </div>
          </div>
        </div>
        <div className="flex justify-between" id="menu-links">
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
      <div className="sm:hidden fixed flex-col bg-gray-300 bottom-0 right-0 w-12">
        <a
          href="https://www.linkedin.com/in/charles-yh-cheng/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="m-2 h-full" />
        </a>
        <a
          href="https://github.com/charcparle"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="m-2 h-full" />
        </a>
      </div>
    </>
  )
}

export default NavBar
