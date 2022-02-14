/* SELECTORS */
import {parseOptionPrice} from '../utils/parseOptionPrice';

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    output = output.filter((trip) => trip.days >= parseInt(filters.duration.from) && trip.days <= parseInt(filters.duration.to));
  }

  // TODO - filter by tags
  if(filters.tags){
    for(let tag of filters.tags){
      output = output.filter((trip) => trip.tags.includes(tag));
    }
  }
  
  // TODO - sort by cost descending (most expensive goes first)
  const descending = output.sort((a, b) => parseOptionPrice(b.cost).value - parseOptionPrice(a.cost).value);
  return descending;
};

export const getTripById = ({trips}, tripId) => {
  const filteredTrip = trips.filter(trip => trip.id == tripId);
  return filteredTrip.length ? filteredTrip[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filteredTrips = trips.filter(trip => trip.country.code == countryCode);
  return filteredTrips.length ? filteredTrips : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
