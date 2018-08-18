import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const ListOfTasks = (store) => (
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

                <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>Aaaaaa</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);


export default ListOfTasks