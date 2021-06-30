import './Nav.css'
import NavItem from './NavItem.jsx'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">  
            <NavItem navigateTo="/" faClass="home" name="Ínicio"/>
            <NavItem navigateTo="/users" faClass="users" name="Usuários"/>
            <NavItem navigateTo="" faClass="money" name="Meu Restaurante"/>
            <NavItem navigateTo="/mail" faClass="envelope-o" name="Contato"/>
            <div className="footerButton">
                <NavItem navigateTo="" faClass="sign-out" name="Sair"/>        
            </div>      
        </nav>
    </aside>