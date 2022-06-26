import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost'
import './SinglePage.css'

export default function SinglePage() {
    return (
        <div className='singlePage'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}
