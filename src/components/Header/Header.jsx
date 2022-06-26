import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImage" src="./images/soldiersBoarding.jpg" alt="soldiers boarding" />
        </div>
    )
}
