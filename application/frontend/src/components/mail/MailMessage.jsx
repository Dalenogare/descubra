import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'envelope',
    title: 'Contato',
    subtitle: 'Envie um email com as suas dúvidas e/ou sugestões'
}


export default class MailMessage extends Component {


renderForm() {
    return (
        <form action="https://formspree.io/f/mgerzylg" method="POST">
            <input type='hidden' name='_subject' value='Contato de Cliente'></input>
            <input type='email' name='_replyto' placeholder='Email p/ contato'></input>
            <textarea name='mensagem'></textarea>
            <button type='submit'>Enviar email</button>
        </form>

    )
        
}
    
render() {
    return (
        <Main {...headerProps}>
            {this.renderForm()}
        </Main>
    )
}

}