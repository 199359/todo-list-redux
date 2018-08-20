import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addTaskAction, onChangeTextAction, deleteTaskAction } from '../../state/taskList'
import { connect } from 'react-redux'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

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
            {props._isLoggedIn ?
                <div>
                    <TextField
                        onChange={(e) => props._onChangeTextAction(e)}
                        hintText="Type new task ..."
                        type='text'

                    />
                    <RaisedButton onClick={() => props._addTaskAction(props.user_uid)} label="Add task" secondary={true} style={style} />
                </div>
                :
                <p>Zaloguj się, aby wyświtlić listę</p>
            }
        </div>
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Name of task</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props._tasks.filter(el=>el.user_uid===props._user_uid).map(el => (
                        <TableRow>
                            <TableRowColumn>{el.date}</TableRowColumn>
                            <TableRowColumn>{el.taskName}</TableRowColumn>
                            <TableRowColumn><FlatButton onClick={() => props._deleteTaskAction(el.uid)} label="DELETE" /></TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    _tasks: state.tasklist.tasks,
    _uid: state.auth.user.uid,
    user_uid: state.auth.user.uid,
    _isLoggedIn: state.auth.isLoggedIn,
    _user_uid: state.auth.user.uid,
})

const mapDispatchToProps = (dispatch) => ({
    _addTaskAction: (user_uid) => dispatch(addTaskAction(user_uid)),
    _onChangeTextAction: (value) => dispatch(onChangeTextAction(value)),
    _deleteTaskAction: (uid) => dispatch(deleteTaskAction(uid))
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskList)