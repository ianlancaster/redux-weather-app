import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button.js'
import SetLocation from '../contatiners/SetLocation'

class LogInView extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div>
        <h1>Welcome to Wundrly</h1>
        <h3>Where would you like to check the weather forecast?</h3>
        <SetLocation />
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInView)
