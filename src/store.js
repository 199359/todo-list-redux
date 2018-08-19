import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import taskListReducer from './state/taskList'
import authReducer from './state/auth'

const rootReducer = combineReducers({
    tasklist: taskListReducer,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

