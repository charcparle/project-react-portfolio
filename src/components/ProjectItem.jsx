import "../pages/Layout.scss"
import "../App.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

function ProjectItem({ projectName, stack, link }) {
  return (
    <div className="project-item hover:bg-gray-400">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="project-title">
          <h4>{projectName} &emsp;</h4>
          <button className="linkBtn">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
        <h5>{stack}</h5>
      </a>
    </div>
  )
}

export default ProjectItem
