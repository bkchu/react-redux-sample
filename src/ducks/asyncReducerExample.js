import axios from 'axios';

const GET_PEOPLE = 'GET_PEOPLE';
const GET_PLANETS = 'GET_PLANETS';

export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: axios.get('https://www.swapi.co/api/people')
  };
}

export function getPlanets() {
  return {
    type: GET_PLANETS,
    payload: axios.get('https://www.swapi.co/api/planets')
  };
}

const initialState = {
  people: [],
  planets: [],
  peopleLoading: false,
  planetsLoading: false
};

export default function asyncReducerExample(state = initialState, action) {
  switch (action.type) {
    case `${GET_PEOPLE}_PENDING`:
      return {
        ...state,
        peopleLoading: true
      };
    case `${GET_PEOPLE}_FULFILLED`:
      return {
        ...state,
        peopleLoading: false,
        people: action.payload.data.results
      };

    case `${GET_PLANETS}_PENDING`:
      return {
        ...state,
        planetsLoading: true
      };
    case `${GET_PLANETS}_FULFILLED`:
      return {
        ...state,
        planetsLoading: false,
        planets: action.payload.data.results
      };
    default:
      return state;
  }
}
