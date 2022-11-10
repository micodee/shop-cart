import React from 'react'
import Headers from './containers/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

const App = () => {
  return (
    <Router>
    <Headers/>
    <Switch>
        <Route path='/' exact compnonent={ProductListing}/>
        <Route path='/product/:productId' exact compnonent={ProductDetail}/>
        <Route>404 Not Found</Route>
    </Switch>
    </Router>
  )
}

export default App