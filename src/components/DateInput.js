import React, { Component } from 'react';
import DatePicker from 'react-bootstrap-date-picker';

class DateInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: "",
      format: "YYYY-MM-DD",
      inputFormat: "DD/MM/YYYY",
      mode: "date"
    };
  }

  handleChange(newDate) {
    this.props.onDateChanged(newDate);
    return this.setState({
      date: newDate
    });
  }

  render() {
    const {date, format, mode, inputFormat} = this.state;
    return (
      <DatePicker
      dateTime={date}
      format={format}
      viewMode={mode}
      inputFormat={inputFormat}
      onChange={this.handleChange}
    />
    );
  }
  }

  export default DateInput;