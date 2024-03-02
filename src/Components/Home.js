import React from 'react'
import logo from './../diul2.svg';
import { useNavigate } from 'react-router-dom'
import './Home.css'


const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/login')
    }
    return (
        <div className="App">
            <header className="App-header">
                <div className="background-image"></div>
                <img onClick={handleButtonClick} src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Home
