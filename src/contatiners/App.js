import { connect } from 'react-redux'
import AppComponent from '../components/App'

const mapStateToProps = (state) => {
  const { logInView, oneDayView, sevenDayView } = state.app
  return {
    logInView,
    oneDayView,
    sevenDayView
  }
}

const App = connect(mapStateToProps)(AppComponent)

export default App
