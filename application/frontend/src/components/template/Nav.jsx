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
            <NavItem navigateTo="/" faClass="home" name="Ínicio"/>
            <NavItem navigateTo="/users" faClass="users" name="Usuários"/>
            <NavItem navigateTo="" faClass="money" name="Meu Restaurante"/>
            <NavItem navigateTo="/mail" faClass="envelope-o" name="Contato"/>
            <div className="footerButton">
                {/* <NavItem navigateTo="/mail" faClass="sign-out" name="Sair" onClick={e => sessionStorage.removeItem('token')}/>         */}
                <button id="footButton" navigateTo="/mail" type="button" onClick={e => logOut()}>Sair</button>        
            </div>      
        </nav>
    </aside>