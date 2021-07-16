import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Login from '../components/login/Login';
import useToken from './useToken';


function App() {
    
    const { token, setToken } = useToken();

    if (!token) {
        return (
            <Login setToken={setToken} />
        )
    }

    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;