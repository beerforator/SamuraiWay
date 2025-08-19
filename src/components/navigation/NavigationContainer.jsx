import { connect } from 'react-redux';
import AppContext from '../../buisnessData/context';
import Navigation from './Navigation';

let mapStateToProps = (state) => {
    return (
        {
            peoplesDB: state.profile.peoplesDB
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {}
    )
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer;
