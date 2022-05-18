import "../pages/Layout.scss"
import "../App.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

function ProjectItem({ projectName, stack, link, desc }) {
  return (
    <div className="project-item w-4/5 hover:bg-gray-400">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="project-title">
          <h4>{projectName} &emsp;</h4>
          <button className="linkBtn">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
        <h5>{stack}</h5>
        <div className="text-white text-xl">{desc}</div>
      </a>
    </div>
  )
}

export default ProjectItem
