import React from 'react'
import Flatpickr from 'react-flatpickr'
import {connect} from 'react-redux'

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
        <h1>This is just a test</h1>
        <p>
          Going to test calendars and abilty to schedule and notify the propper
          people look for either NPM module or a d3
        </p>
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
