import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid p-3">
            <div className="h-100 w-100">
                {props.children}
            </div>
        </main>
    </React.Fragment>