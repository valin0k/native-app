import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'
import store from './redux'
import App from './components/App'

const Index = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

render(
  <Index />,
  document.getElementById('root')
)
