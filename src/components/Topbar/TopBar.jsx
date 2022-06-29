import { NavLink } from 'react-router-dom'
import './Topbar.css'

export default function TopBar() {

 

  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className='topListItem'>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className='topListItem'>
            <NavLink to="/ajustes">CONTACT</NavLink>
          </li>
          <li className='topListItem'>
            <NavLink to="/write">WRITE</NavLink>
          </li>
          <li className='topListItem'>
            LOG OUT
          </li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src='https://static.photocdn.pt/images/articles/2018/05/18/articles/2017_8/how_to_get_started_in_landscape_photography.jpg' alt='beach sunset' />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
