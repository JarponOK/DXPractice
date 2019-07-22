/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { analyticsNewFetchData } from '../../actions/item-analytics';
import { URL_ANALYTICS_NEW } from '../const';
import Loading from '../loading-indicator';
import Error from '../error-indicator';
import Chart from '../chart-component/spline-chart';

class AnalyticsNew extends Component {
  constructor(props) {
    super(props);

    this.rootElement = React.createRef();

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_NEW);

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
            chartTitle="New patient"
          />
        )}
      </Paper>
    );
  }
}

const useStyles = theme => ({
  centerBoard: {
    height: '39vh',
    color: theme.palette.text.secondary,
  },
});

const AnalyticsNews = withStyles(useStyles)(AnalyticsNew);

AnalyticsNew.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsNew,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsNewFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsNews);
