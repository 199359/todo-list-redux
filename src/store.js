import { createStore, combineReducers } from 'redux'
import taskListReducer from './state/taskList'
import authReducer from './state/auth'

const rootReducer = combineReducers({
    tasklist: taskListReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

