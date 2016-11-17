import React, { Component, PropTypes } from 'react'
import LogInView from '../views/LogInView.js'
import OneDayView from '../views/OneDayView.js'
import SevenDayView from '../views/SevenDayView.js'

class App extends Component {
  static propTypes = {
    logInView: PropTypes.bool.isRequired,
    oneDayView: PropTypes.bool.isRequired,
    sevenDayView: PropTypes.bool.isRequired
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

export default App
