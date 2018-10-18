import { combineReducers } from 'redux';

import DataEjemplo from './reducer-data-ejemplo';


const allReducers = combineReducers({
  dataEjemplo : DataEjemplo
});

export default allReducers;



/*

Esto hay que poner en el componente en el que se quiere asignar un valor global:

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDataEjemplo } from '../../redux/actions/actions';

------------------------------------------------------------------------------------------------
this.props.setDataEjemplo(newData);
------------------------------------------------------------------------------------------------

function mapStateToProps(state){return{dataEjemplo : state.dataEjemplo,}}
function matchDispatchToProps(dispatch){return bindActionCreators({ setDataEjemplo }, dispatch)}
export default connect(mapStateToProps, matchDispatchToProps)(Nombre de la clase);

*/
