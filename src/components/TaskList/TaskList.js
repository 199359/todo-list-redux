import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addTaskAction, onChangeTextAction } from '../../state/taskList'
import { connect } from 'react-redux'

const style = {
    margin: 12,
};

const TaskList = (props) => (
    <div>
        <AppBar
            title="ToDo Lista"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div style={{ display: 'inline-flex' }} >
            <TextField
                onChange={(e)=>props._onChangeTextAction(e)}
                hintText="Type new task ..."
                type='text'
            />
            <RaisedButton onClick={props._addTaskAction} label="Secondary" secondary={true} style={style} />
        </div>
        {props._tasks.map(el=>(
            <p>{el.taskName ? el.taskName : 'Nothing to display'}</p>
        ))}
    </div>
)


const mapStateToProps = (state) => ({
    _tasks: state.tasklist.tasks
})

const mapDispatchToProps = (dispatch) => ({
    _addTaskAction: () => dispatch(addTaskAction()),
    _onChangeTextAction: (value) =>  dispatch(onChangeTextAction(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskList)