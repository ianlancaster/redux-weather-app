import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LogInView from './LogInView.js'
import OneDayView from './OneDayView.js'
import SevenDayView from './SevenDayView.js'

class App extends Component {
  static propTypes = {
    logInView: PropTypes.bool.isRequired,
    oneDayView: PropTypes.bool.isRequired,
    sevenDayView: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { logInView, oneDayView, sevenDayView } = this.props

    return (
      <div>
        {logInView && (<LogInView />)}
        {oneDayView && (<OneDayView />)}
        {sevenDayView && (<SevenDayView />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
