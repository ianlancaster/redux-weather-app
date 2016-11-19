import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { isUndefined } from 'lodash'
import Button from '../components/Button.js'
import SetLocation from '../contatiners/SetLocation'

class LogInView extends Component {
  static propTypes = {

  }

  render () {
    const { error } = this.props // eslint-disable-line

    return (
      <div id='login-section'>
        <h1>Welcome to Wundrly</h1>
        <h3>Where would you like to check the weather forecast?</h3>
        <SetLocation />
        { error && (<h3>{error.description}</h3>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.app.error
  }
}

export default connect(mapStateToProps)(LogInView)
