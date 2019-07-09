/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import 'typeface-roboto';

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div style={styles.headerArea}>
          <p style={styles.headerText}>Analytics</p>
        </div>
        <div style={styles.workArea}>
          <div style={styles.leftArea}>
            <div style={styles.totalPatient} />
            <div style={styles.agePatient} />
          </div>
          <div style={styles.rightArea}>
            <div style={styles.topDashboard}>
              <div style={styles.topPanel} />
              <div style={styles.topPanel} />
              <div style={styles.topPanel} />
            </div>
            <div style={styles.centreArea}>
              <div style={styles.newPatient} />
            </div>
            <div style={styles.bottomArea}>
              <div style={styles.bottomPanel} />
              <div style={styles.bottomPanel} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;

const styles = {
  headerArea: {
    width: '100%',
    height: '60px'
  },
  headerText: {
    textAlign: 'left',
    color: '#597389',
    paddingLeft: '20px',
    fontSize: '20px',
    fontStyle: 'typeface-roboto'
  },
  workArea: {
    width: '100cw',
    height: '100ch',
    backgroundColor: '#E9ECF1',
    boxSizing: 'border-box'
  },
  leftArea: {
    float: 'left',
    paddingLeft: '25px',
    paddingTop: '25px',
    backgroundColor: '#E9ECF1',
  },
  totalPatient: {
    width: '200px',
    height: '205px',
    backgroundColor: '#FFF'
  },
  agePatient: {
    marginTop: '25px',
    width: '200px',
    height: '475px',
    backgroundColor: '#FFF',
  },
  rightArea: {
    float: 'left',
    paddingLeft: '25px',
    paddingTop: '25px',
    backgroundColor: '#E9ECF1',
  },
  topDashboard: {
  },
  topPanel: {
    display: 'inline-block',
    width: '300px',
    height: '130px',
    backgroundColor: '#FFF',
    marginRight: '25px'
  },
  centreArea: {
    paddingTop: '25px',
    marginRight: '25px'
  },
  newPatient: {
    display: 'inline-block',
    width: '950px',
    height: '300px',
    backgroundColor: '#FFF',
  },
  bottomArea: {
    paddingTop: '25px',
  },
  bottomPanel: {
    display: 'inline-block',
    width: '463px',
    height: '220px',
    backgroundColor: '#FFF',
    marginRight: '25px'
  }
};
