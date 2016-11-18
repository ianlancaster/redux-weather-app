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
    zipCode: PropTypes.array,
    displayLocation: PropTypes.string
  }

  componentWillMount () {
    const { fetchWeather, zipCode } = this.props
    fetchWeather(zipCode)
  }
  render () {
    const { resetLocation, forecasts, displayLocation } = this.props
    return (
      <div>
        <header>
          <h2>Wundrly | Seven Day Forecast for {displayLocation}</h2>
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
  const { forecasts, zipCode, displayLocation, alerts, response } = state.app
  return {
    forecasts,
    zipCode,
    displayLocation,
    alerts,
    response
  }
}

const mapDispatchToProps = {
  resetLocation,
  fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(SevenDayView)
