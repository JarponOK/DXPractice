import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  PagingState,
  IntegratedPaging,
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { dataClient as data } from '../../data';

const getCellValue = data => {
  return `${data.name} ${data.lastname}`;
};

export default class Clients extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'name', getCellValue, title: 'Patient name' },
        { name: 'birthday', title: 'Birthday' },
        { name: 'phone', title: 'Phone' },
        { name: 'dateApt', title: 'Last appt' },
      ],
      rows: data,
    };
  }

  render() {
    const { rows, columns } = this.state;
    console.log(data);
    return (
      <div>
        <Paper>
          <Grid
            rows={rows}
            columns={columns}
          >
            <SortingState
              defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
            />
            <IntegratedSorting />
            <PagingState
              defaultCurrentPage={0}
              pageSize={6}
            />
            <IntegratedPaging />
            <Table />
            <TableHeaderRow showSortingControls />
          </Grid>
        </Paper>
      </div>
    );
  }
}
