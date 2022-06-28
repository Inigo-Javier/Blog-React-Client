import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import SettingsPage from '../pages/SettingsPage/SettingsPage'
import SinglePage from '../pages/SinglePage/SinglePage'
import WritePage from '../pages/WritePage/WritePage'
import LoginPage from './../pages/LoginPage/LoginPage'

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path='/inicio' element={<HomePage />} />
                <Route path='/inicio-sesion' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/registro' element={<RegisterPage />} />
                <Route path='/ajustes' element={<SettingsPage />} />
                <Route path='/single' element={<SinglePage />} />
                <Route path='/write' element={<WritePage />} />
                <Route path='/about' element={<Sidebar />} />
            </Routes>
        </>
    )
}

export default AppRoutes