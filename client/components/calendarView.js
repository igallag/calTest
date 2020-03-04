import React from 'react'
import Flatpickr from 'react-flatpickr'
import {connect} from 'react-redux'
// import "flatpickr/dist/themes/material_green.css";

// need to figure out how to style this calendar

class CalendarView extends React.Component {
  constructor() {
    super()

    this.state = {
      date: new Date()
    }
  }

  render() {
    const {date} = this.state
    return (
      <div>
        <Flatpickr
          data-enable-time
          value={date}
          onChange={date => {
            this.setState({date})
          }}
        />
      </div>
    )
  }
}

export default CalendarView
