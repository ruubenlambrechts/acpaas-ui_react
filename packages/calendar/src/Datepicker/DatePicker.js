import React, {Component} from 'react';
import Calendar from './Calender';

class DatePicker extends Component {

  renderCalendar() {
    const {
      minDate,
      maxDate,
      isCalendarOpen,
      activeDate,
      clickOnDate
    } = this.props;

    if (!isCalendarOpen) {
      return null;
    }

    return <Calendar
      ref={() => {
        Calendar
      }}
      activeDate={activeDate}
      minDate={minDate}
      maxDate={maxDate}
      selectDay={clickOnDate.bind(this)}/>;
  }

  render() {
    return (
      this.renderCalendar()
    );
  }
}

export default DatePicker;