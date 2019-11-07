import RoutAuth from './RoutAuth';
import { connect } from 'react-redux';



function mapState(state) {
  const { isAuth } = state
  return { isAuth }
}


export default connect(mapState)(RoutAuth);
