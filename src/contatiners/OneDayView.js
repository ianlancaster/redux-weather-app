import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class OneDayView extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render () {
    return (
      <div />
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

export default connect(mapStateToProps, mapDispatchToProps)(OneDayView)