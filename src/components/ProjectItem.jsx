import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ProjectItem({ projectName, stack, link }) {
  return (
    <div className="project-item">
      <h4>
        {projectName} &emsp;
        <a href={link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </h4>
      <h5>{stack}</h5>
    </div>
  )
}

export default ProjectItem
