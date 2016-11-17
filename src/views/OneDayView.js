import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { resetLocation } from '../actions/index'

console.log(resetLocation)

class OneDayView extends Component {
  static propTypes = {
    resetLocation: PropTypes.func.isRequired
  }

  render () {
    const { resetLocation } = this.props
    console.log(resetLocation)

    return (
      <div>
        <h3>{Date.now()}</h3>
        <Button onClick={resetLocation} text='New Location' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  resetLocation
}

export default connect(null, mapDispatchToProps)(OneDayView)
