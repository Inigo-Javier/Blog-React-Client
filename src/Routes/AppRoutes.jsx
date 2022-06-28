import { Routes, Route } from 'react-router-dom'
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
                <Route path='/ajustes' element={<SettingsPage />} />
                <Route path='/registro' element={<RegisterPage />} />
                <Route path='/inicio-sesion' element={<LoginPage />} />
                <Route path='/single' element={<SinglePage />} />
                <Route path='/write' element={<WritePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes