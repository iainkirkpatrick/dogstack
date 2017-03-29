const { Router, Route, IndexRoute } = require('react-router')
const React = require('react')

// Top Level Containers
import Layout from './layout/components/layout'
import DogsContainer from './dogs/containers/dogs'

export default function ({ history, store }) {
  return <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={DogsContainer} />
    </Route>
  </Router>
}