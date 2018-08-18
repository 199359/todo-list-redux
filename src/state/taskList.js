import moment from 'moment'

export const ADD_TASK = 'ADD_TASK'
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const DELETE_TASK = 'DELETE TASK'


export const addTaskAction = () => ({ type: ADD_TASK })
export const onChangeTextAction = (e) => ({ type: CHANGE_TEXT, text: e.target.value })
export const deleteTaskAction = (uid) => ({type: DELETE_TASK, uid: uid})


const initialStore = {
    tasks: [],
    newTaskText: ''
}


const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat({
                    taskName: state.newTaskText,
                    isCompleted: false,
                    uid: Date.now(),
                    date: moment(new Date(Date.now()).toUTCString()).calendar()
                })
            }
        case CHANGE_TEXT:
            return {
                ...state,
                newTaskText: action.text,
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(el=>{
                    return el.uid !== action.uid
                })
            }
    }
    return state
}


export default reducer