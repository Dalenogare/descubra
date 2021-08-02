import './Nav.css'
import NavItem from './NavItem.jsx'
import React from 'react'

function logOut() {
    sessionStorage.removeItem('token')
    window.location.reload()
}

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem navigateTo="/" faClass="home" name="Ínicio" />
            <NavItem navigateTo="/establishment" faClass="money" name="Meu Restaurante" />
            <NavItem navigateTo="/users" faClass="users" name="Items" />
            <NavItem navigateTo="/mail" faClass="envelope-o" name="Contato" />
            <div className="footerButton" onClick={e => logOut()}>
            <NavItem id="footerBtn" navigateTo="" faClass="sign-out" name="Sair" />
            </div>
        </nav>
    </aside>