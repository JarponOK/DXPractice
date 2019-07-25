import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { analyticsTotalFetchData } from '../../actions/item-analytics';
import { URL_ANALYTICS_TOTAL } from '../const';
import Loading from '../loading-indicator';
import Error from '../error-indicator';
import Chart from '../chart-component/spline-chart';

class AnalyticsTotal extends Component {
  constructor(props) {
    super(props);

    this.rootElement = React.createRef();

    this.state = {
      heightChart: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_TOTAL);

    const heightChart = this.rootElement.current.clientHeight - 20;
    this.setState({ heightChart });
  }

  componentDidUpdate() {
    this.state.heightChart = this.rootElement.current.clientHeight - 20;
  }

  render() {
    const {
      hasErrored, isLoading, classes, items
    } = this.props;

    const { heightChart } = this.state;
    return (
      <Paper className={classes.centerBoard} ref={this.rootElement}>
        {isLoading && <Loading />}
        {hasErrored && <Error />}
        {!isLoading && (
          <Chart
            chartData={items}
            chartHeight={heightChart}
            chartTitle="Total patient"
          />
        )}
      </Paper>
    );
  }
}

const useStyles = theme => ({
  centerBoard: {
    height: '30vh',
    color: theme.palette.text.secondary,
  },
});

const AnalyticsTotals = withStyles(useStyles)(AnalyticsTotal);

AnalyticsTotal.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsTotal,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsTotalFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsTotals);
