export const ADD_TASK = 'ADD_TASK'

export const addTaskAction = () => ({type: ADD_TASK})


const initialStore = {
    tasks: 1
}


const reducer = (state = initialStore, action) => {
    switch(action.type){
        case 'ADD_TASK':
        return {
            ...state,
            tasks: 2
            }
    }
    return state
}


export default reducer