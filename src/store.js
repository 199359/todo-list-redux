import { createStore, combineReducers } from 'redux'
import taskListReducer, {addTaskAction} from './state/taskList'


const rootReducer = combineReducers({
    tasklist: taskListReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.dispatch(addTaskAction())
