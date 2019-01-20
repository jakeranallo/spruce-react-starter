import { combineReducers } from 'redux'

import todos from './todos'
import modals from './modals'

export default combineReducers({ todos, modals })
