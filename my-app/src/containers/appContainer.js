import { connect } from 'react-redux';
import App from '../App.js'
function mapStateToProps(state) {
  return {
    app: state.app // gives our component access to state through props.about
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    changeName () {
      dispatch({
        type: 'CHANGE_NAME',
        name: '葬爱'
      })
    },
    showDialog () {
      dispatch({
        type: 'SHOW_DIALOG'
      })
    }
  } // here we'll soon be mapping actions to props
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);