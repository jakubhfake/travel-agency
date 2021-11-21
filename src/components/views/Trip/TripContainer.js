import {connect} from 'react-redux';
import Trip from './Trip';
import {getTripById} from '../../../redux/tripsRedux';
import {getCountryByCode} from '../../../redux/countriesRedux';

const mapStateToProps = (state, props) => {
  const trip = getTripById(state, props.match.params.id);
  console.log('Filtered trip', trip);
  const country = getCountryByCode(state, trip.country.code);
  console.log('Filtered country', country);
  return {
    ...trip,
    country,
  };
};

export default connect(mapStateToProps)(Trip);
