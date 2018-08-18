import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addTaskAction, onChangeTextAction } from '../../state/taskList'
import { connect } from 'react-redux'
import ListOfTasks from './ListOfTasks'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

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
                onChange={(e) => props._onChangeTextAction(e)}
                hintText="Type new task ..."
                type='text'
            />
            <RaisedButton onClick={props._addTaskAction} label="Secondary" secondary={true} style={style} />
        </div>
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Name of task</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props._tasks.map(el => (
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>{el.taskName}</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    _tasks: state.tasklist.tasks
})

const mapDispatchToProps = (dispatch) => ({
    _addTaskAction: () => dispatch(addTaskAction()),
    _onChangeTextAction: (value) => dispatch(onChangeTextAction(value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskList)