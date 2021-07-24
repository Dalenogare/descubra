import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import useToken from './useToken';

const initialState = {
    register: false
}

function App() {

    const [register, setRegister] = useState();

    const { token, setToken } = useToken();

    if (!token) {
        return (
            <div className="page " style={{height: "100vh"}}>
                {register ? (
                    <Register setRegister={setRegister} />
                ) : (
                    <Login setToken={setToken} setRegister={setRegister}/>
                )}
            </div>
        );

    }

    return (
        <BrowserRouter>
            <div className="app anim">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;