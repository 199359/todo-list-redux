import moment from 'moment'

export const ADD_TASK = 'ADD_TASK'
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const DELETE_TASK = 'DELETE TASK'


export const addTaskAction = (user_uid) => ({ type: ADD_TASK, user_uid: user_uid })
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
                    date: moment(new Date(Date.now()).toUTCString()).calendar(),
                    user_uid: action.user_uid,
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