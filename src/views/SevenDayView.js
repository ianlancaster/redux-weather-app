import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { resetLocation, fetchWeather } from '../actions/index'

class SevenDayView extends Component {
  static propTypes = {
    resetLocation: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func,
    todaysForecast: PropTypes.array,
    zipCode: PropTypes.array
  }

  render () {
    const { resetLocation, todaysForecast } = this.props

    return (
      <div>
        <h3>{Date.now()}</h3>
        {todaysForecast && (<h3>{todaysForecast[0]}</h3>)}
        <Button onClick={resetLocation} text='New Location' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { todaysForecast, zipCode } = state.app
  return {
    todaysForecast,
    zipCode
  }
}

const mapDispatchToProps = {
  resetLocation,
  fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(SevenDayView)
