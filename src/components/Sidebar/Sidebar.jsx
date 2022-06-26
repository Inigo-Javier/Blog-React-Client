import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                 <img src="https://e3.365dm.com/20/02/2048x1152/skynews-hoare-mike-mercenary_4910308.jpg?bypass-service-worker&20200203072708" alt="Mike Hoare with his personal bodyguard Sergeant Donald Grant in 1964" /> 
                <p>
                    loremqelrkb 
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Tech</li>
                    <li className='sidebarListItem'>Cinema</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarSocialIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarSocialIcon fa-brands fa-twitter"></i>
                    <i className="sidebarSocialIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarSocialIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
