/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Title, Legend, } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { scalePoint } from 'd3-scale';
import { curveCatmullRom, line } from 'd3-shape';
import { analyticsNewFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_NEW } from './const';
import Loading from '../Components/loading-indicator';

const Spline = props => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

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
    return (
      // eslint-disable-next-line react/prop-types
      <Paper className={classes.centerBoard} ref={this.rootElement}>
        {isLoading && <Loading />}
        {hasErrored && <Typography>Sorry! There was an error loading the items</Typography>}
        {!isLoading && (
          <Chart
            // eslint-disable-next-line react/destructuring-assignment
            height={this.state.height}
            data={items || []}
          >
            <ArgumentScale factory={scalePoint} />
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries valueField="num" argumentField="name" seriesComponent={Spline} />
            <Animation />
          </Chart>
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
