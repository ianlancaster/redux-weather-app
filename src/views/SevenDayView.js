import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import WeekDay from '../components/WeekDay'
import { resetLocation, fetchWeather } from '../actions/index'

class SevenDayView extends Component {
  static propTypes = {
    resetLocation: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func,
    forecasts: PropTypes.array,
    zipCode: PropTypes.array
  }

  render () {
    const { resetLocation, forecasts } = this.props
    console.log('forecasts in render', forecasts)

    return (
      <div>
        <header>
          <h2>Seven Day Forecast</h2>
          <Button onClick={resetLocation} text='New Location' />
        </header>
        <main id='seven-day-forecast'>
          {forecasts && (forecasts[0].map(f => <WeekDay forecast={f} key={f.day} />))}
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { forecasts, zipCode } = state.app
  return {
    forecasts,
    zipCode
  }
}

const mapDispatchToProps = {
  resetLocation,
  fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(SevenDayView)
