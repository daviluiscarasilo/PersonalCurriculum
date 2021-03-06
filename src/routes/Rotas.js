import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'

export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/PersonalCurriculum" component={Home} />
            </Switch>
        </HashRouter>
    )
}