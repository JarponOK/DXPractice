import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  PagingState,
  SortingState,
  CustomPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'OrderNumber', title: 'Order #' },
        { name: 'OrderDate', title: 'Order Date' },
        { name: 'StoreCity', title: 'Store City' },
        { name: 'Employee', title: 'Employee' },
        { name: 'SaleAmount', title: 'Sale Amount' },
      ],
      currencyColumns: ['SaleAmount'],
      tableColumnExtensions: [
        { columnName: 'OrderNumber', align: 'right' },
        { columnName: 'SaleAmount', align: 'right' },
      ],
      rows: [],
      sorting: [{ columnName: 'StoreCity', direction: 'asc' }],
      totalCount: 0,
      pageSize: 10,
      pageSizes: [5, 10, 15],
      currentPage: 0,
      loading: true,
    };

    this.changeSorting = this.changeSorting.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  changeSorting(sorting) {
    this.setState({
      loading: true,
      sorting,
    });
  }

  changeCurrentPage(currentPage) {
    this.setState({
      loading: true,
      currentPage,
    });
  }

  changePageSize(pageSize) {
    const { totalCount, currentPage: stateCurrentPage } = this.state;
    const totalPages = Math.ceil(totalCount / pageSize);
    const currentPage = Math.min(stateCurrentPage, totalPages - 1);

    this.setState({
      loading: true,
      pageSize,
      currentPage,
    });
  }

  queryString() {
    const { sorting, pageSize, currentPage } = this.state;

    let queryString = `${URL}?take=${pageSize}&skip=${pageSize * currentPage}`;

    const columnSorting = sorting[0];
    if (columnSorting) {
      const sortingDirectionString = columnSorting.direction === 'desc' ? ' desc' : '';
      queryString = `${queryString}&orderby=${columnSorting.columnName}${sortingDirectionString}`;
    }

    return queryString;
  }

  loadData() {
    const queryString = this.queryString();
    if (queryString === this.lastQuery) {
      this.setState({ loading: false });
      return;
    }

    fetch(queryString)
      .then(response => response.json())
      .then(data => this.setState({
        rows: data.items,
        totalCount: data.totalCount,
        loading: false,
      }))
      .catch(() => this.setState({ loading: false }));
    this.lastQuery = queryString;
  }

  render() {
    const {
      rows,
      columns,
      tableColumnExtensions,
      sorting,
      pageSize,
      pageSizes,
      currentPage,
      totalCount,
    } = this.state;

    return (
      <Paper style={{ position: 'relative' }}>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SortingState
            sorting={sorting}
            onSortingChange={this.changeSorting}
          />
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={this.changeCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={this.changePageSize}
          />
          <CustomPaging
            totalCount={totalCount}
          />
          <Table
            columnExtensions={tableColumnExtensions}
          />
          <TableHeaderRow showSortingControls />
          <PagingPanel
            pageSizes={pageSizes}
          />
        </Grid>
      </Paper>
    );
  }
}
