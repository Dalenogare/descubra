import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import MailMessage from '../components/mail/MailMessage'
import Login from '../components/login/Login'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/mail' component={MailMessage} />
        <Route path='/login' component={Login} />
        <Redirect from='*' to='/' />
    </Switch>