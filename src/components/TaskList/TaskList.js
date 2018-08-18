import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addTaskAction } from '../../state/taskList'
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
                hintText="Type new task ..."
            />
            <RaisedButton onClick={props._addTaskAction} label="Secondary" secondary={true} style={style} />
        </div>
        <p>TaskList</p>
    </div>
)

const mapStateToProps = (state) => ({
    _tasks: state.tasklist.tasks
})

const mapDispatchToProps = (dispatch) => ({
    _addTaskAction: () => dispatch(addTaskAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskList)