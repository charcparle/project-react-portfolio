import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ProjectItem({ projectName, stack, link }) {
  return (
    <div className="project-item">
      <div className="project-title">
        <h4>{projectName} &emsp;</h4>
        <button className="linkBtn">
          <a href={link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </button>
      </div>
      <h5>{stack}</h5>
    </div>
  )
}

export default ProjectItem
