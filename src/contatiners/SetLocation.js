import { connect } from 'react-redux'
import SetLocationComponent from '../components/SetLocation'
import { setLocation, fetchWeather } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = ({
  setLocation,
  fetchWeather
})

const SetLocation = connect(null, mapDispatchToProps)(SetLocationComponent)

export default SetLocation
