import { connect } from 'react-redux'
import SetLocationComponent from '../components/SetLocation'
import { setLocation } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = ({
  setLocation
})

const SetLocation = connect(null, mapDispatchToProps)(SetLocationComponent)

export default SetLocation
