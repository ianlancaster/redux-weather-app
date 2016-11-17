import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FormInput from '../components/FormInput.js'
import Button from '../components/Button.js'

class LogInView extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        {/* <FormInput /> */}
        <Button text='on the page!' />
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
