import { Outlet } from 'react-router-dom'
import './Layout.scss'
import NavBar from '../components/NavBar'

function Layout() {
  return (
    <div className="App">
      <div className="page">
        <Outlet />
      </div>
      <NavBar />
    </div>
  )
}

export default Layout
