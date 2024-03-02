import React, { } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'


const Dashboard = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home')
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#343333', width: '100vw', height: '100vh' }}>
            <div className='dashboard-logo' onClick={goHome}></div>
        </div >
    )
}

export default Dashboard
