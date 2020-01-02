import React from 'react'
import { Route, HashRouter, Switch, Redirect} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'


export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/about' component={AboutUs } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/products' component={Products } />
          <Route component={ () => <Redirect to="/" /> } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )