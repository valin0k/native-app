import React, {Fragment} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux'

const Index = () => (
  <Provider store={store}>
    <Fragment>Hello World!</Fragment>
  </Provider>
)

render(
<Index />,
  document.getElementById('root')
)
