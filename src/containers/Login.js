import { connect } from 'react-redux'
import Login from '../components/Login'
import { login } from '../redux/auth'

const mapActionToProps = { login }

export default connect(null, mapActionToProps)(Login)