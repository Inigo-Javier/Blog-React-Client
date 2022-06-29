import { Link } from 'react-router-dom'
import './Topbar.css'

export default function TopBar() {

  const user = false

  return (
    <nav className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='Link' to="/">HOME</Link>
          </li>
          <li className='topListItem'>
            <Link className='Link' to="/about">ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link className='Link' to="/ajustes">CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link className='Link' to="/write">WRITE</Link>
          </li>
          <li className='topListItem'>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>


      <div className='topRight'>

        {
          user ?
            (
              <img className='topImg' src='https://static.photocdn.pt/images/articles/2018/05/18/articles/2017_8/how_to_get_started_in_landscape_photography.jpg' alt='beach sunset' />)
            :
            (<ul className='topList'>
              <li className='topListItem'>
                <Link className='Link' to="/inicio-sesion">LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='Link' to="/registro">REGISTER</Link>
              </li>
            </ul>)
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  )
}