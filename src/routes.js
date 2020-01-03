import React from 'react'
import { Route, HashRouter, Switch, Redirect} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'
import Main from './components/Main'
import ScrollToTop from './components/ScrollTop'


export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/about' component={AboutUs } />
          <Route exact path='/portfolio' component={Portfolio } />
          <Route component={ () => <Redirect to="/" /> } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )