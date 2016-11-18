import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
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
        <h3>{Date.now()}</h3>
        {forecasts && (<h3>{forecasts[0][0].conditions}</h3>)}
        <Button onClick={resetLocation} text='New Location' />
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
