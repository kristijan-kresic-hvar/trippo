import React from 'react'
import ReactDOM from 'react-dom'
import { generateScript } from './scripts'

import App from './App'

generateScript(``)

ReactDOM.render(<App />, document.getElementById('root'))