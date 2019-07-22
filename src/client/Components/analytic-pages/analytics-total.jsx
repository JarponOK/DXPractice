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
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_TOTAL);

    const height = this.rootElement.current.clientHeight - 20;
    this.setState({ height });
  }

  render() {
    const { hasErrored, isLoading, classes } = this.props;

    // eslint-disable-next-line react/prop-types
    const { items } = this.props;
    const { height } = this.state;
    return (
      // eslint-disable-next-line react/prop-types
      <Paper className={classes.centerBoard} ref={this.rootElement}>
        {isLoading && <Loading />}
        {hasErrored && <Error />}
        {!isLoading && (
          <Chart
            chartData={items}
            chartHeight={height}
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
