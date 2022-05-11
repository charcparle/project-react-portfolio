import { Outlet } from 'react-router-dom'
import './Layout.scss'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'

function Layout() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <div className="page">
        <Outlet />
      </div>
      <NavBar />
    </div>
  )
}

export default Layout
