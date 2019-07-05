import React, { Component } from 'react'
import { connect } from 'react-redux'

class Scheduler extends Component {
  render() {
    const { store } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <p>Меня зовут: {store.name}</p> {/* добавлен вывод из props */}
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    store:store[0].user,
  }
}

export default connect(mapStateToProps)(Scheduler)




/*import React, { Component } from 'react';
import { Scheduler, DayView, Appointments,MonthView,WeekView} from '@devexpress/dx-react-scheduler-material-ui';
import {ViewState } from '@devexpress/dx-react-scheduler';
import {appointments} from "./appointments";

export default class Scheduler_Page extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[
        { startDate: '2018-10-31 10:00', endDate: '2018-10-31 11:00', title: 'Meeting' },
        { startDate: '2018-11-01 18:00', endDate: '2018-11-01 19:30', title: 'Go to a gym' },
      ],
      currentDate: '2018-10-31',
      startDayHour: 9,
      endDayHour: 21,
    };
  }
  render(){
    const {
      currentDate,
      data,
      startDayHour,
      endDayHour,
    } = this.state;
    return(
    <Scheduler
    data={data}
    >
      <ViewState
            currentDate={currentDate}
          />
      <WeekView
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />
      <MonthView />
      <Appointments />
    </Scheduler>
    );
  }
}
*/