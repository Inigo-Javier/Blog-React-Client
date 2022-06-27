import Sidebar from '../../components/Sidebar/Sidebar'
import './SettingsPage.css'

export default function SettingsPage() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm'>

                    <label>Profile Picture</label>

                    <div className='settingsPP'>
                        <img src='https://cdn.pixabay.com/photo/2016/01/13/20/24/autumn-landscape-1138875_1280.jpg' alt='landscape' />

                        <label htmlFor='fileInput'>

                            <i className="settingsPPIcon fa-solid fa-user"></i>

                        </label>
                        
                        <input type='file' id='fileInput' slyle={{ display: "none" }}></input>
                    </div>

                    <label>Username</label>

                    <input type="text" placeholder='Iñigo'></input>
                    <label>Email</label>
                    <input type="email" placeholder='iñigo@gmail.com'></input>
                    <label>Password</label>
                    <input type="password"></input>

                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
