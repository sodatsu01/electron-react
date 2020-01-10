import Hello from './hello.jsx'
import React from 'react'
import ReactDom from 'react-dom'
require('./style/app.scss')

ReactDom.render(<Hello />, document.getElementById('root'))

