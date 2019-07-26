import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  PagingState,
  IntegratedPaging,
  SortingState,
  SearchState,
  IntegratedFiltering,
  IntegratedSorting,
  EditingState,
} from '@devexpress/dx-react-grid';
import {
  Grid as DXGrid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Paper, Grid } from '@material-ui/core';
import { URL_CLIENTS } from '../const';

const getCellValue = data => `${data.name} ${data.lastname}`;

const columns = [
  { name: 'name', getCellValue, title: 'Patient name' },
  { name: 'birthday', title: 'Birthday' },
  { name: 'phone', title: 'Phone' },
  { name: 'lastAppt', title: 'Last appt' },
];

const getRowId = row => row._id;

const EditButton = ({ onExecute }) => (
  <NavLink to="/test">
    <IconButton onClick={onExecute} title="Edit row">
      <EditIcon />
    </IconButton>
  </NavLink>
);

const DeleteButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Delete row">
    <DeleteIcon />
  </IconButton>
);

const commandComponents = {
  edit: EditButton,
  delete: DeleteButton,
};

const Command = ({ id, onExecute }) => {
  const CommandButton = commandComponents[id];
  return (
    <CommandButton
      onExecute={onExecute}
    />
  );
};

const CreateGrid = (props) => {
  const { items, deleteData } = props.props.props;

  const commitChanges = ({ added, changed, deleted }) => {
    // let { rows } = this.state;
    // if (added) {
    //   const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
    //   rows = [
    //     ...rows,
    //     ...added.map((row, index) => ({
    //       id: startingAddedId + index,
    //       ...row,
    //     })),
    //   ];
    // }
    //if (changed) {
    //  const data = { id: changed, };
    //}
    if (deleted) {
      const data = { id: deleted, };
      deleteData(URL_CLIENTS, data);
    }
  };
  return (
    <Paper>
      <DXGrid
        rows={items}
        columns={columns}
        getRowId={getRowId}
      >
        <EditingState
          onCommitChanges={commitChanges}
        />
        <SearchState
          value={props.searchValue}
        />
        <PagingState
          defaultCurrentPage={0}
        />
        <SortingState
          defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow showSortingControls />
        <TableEditRow />
        <TableEditColumn
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
        <PagingPanel />
      </DXGrid>
    </Paper>
  );
};

export default CreateGrid;
