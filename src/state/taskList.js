export const ADD_TASK = 'ADD_TASK'
export const CHANGE_TEXT = ''

export const addTaskAction = () => ({ type: ADD_TASK })
export const onChangeTextAction = (e) => ({ type: CHANGE_TEXT, text: e.target.value})


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
                    uid: Math.random()
                })
            }
        case CHANGE_TEXT:
            return {
                ...state,
                newTaskText: action.text,
            }
    }
    return state
}


export default reducer