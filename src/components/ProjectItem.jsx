import "../App.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

function ProjectItem({ projectName, stack, link, desc }) {
  return (
    <div className="project-item w-4/5 hover:bg-gray-400 border-2 rounded-lg mb-4">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-row justify-between">
          <h4 className="font-bold text-white">{projectName}</h4>
          <button className="linkBtn">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
        <h5 className="drop-shadow-lg text-white">{stack}</h5>
        <div className="text-white text-xl p-4">{desc}</div>
      </a>
    </div>
  )
}

export default ProjectItem
