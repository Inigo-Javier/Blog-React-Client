import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import './HomePage.css'

export default function HomePage() {
    return (
        <>
            <Header />
            <div className='homePage'>
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
