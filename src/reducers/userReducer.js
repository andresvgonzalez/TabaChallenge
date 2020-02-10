import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_RESTAURANTS,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_ERROR,
} from '../constants';

const initialState = {
  isFetching: false,
  userData: {},
  restaurants: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_USER:
    return Object.assign({}, state, { isFetching: true });

    case GET_USER_ERROR:
    return Object.assign({}, state, {
      error: action.error,
      isFetching: false,
    });

    case GET_USER_SUCCESS:
    return Object.assign({}, state, {
      userData: action.payload,
      error: null,
      isFetching: false,
    });

    case GET_RESTAURANTS:
    return Object.assign({}, state, { isFetching: true });

    case GET_RESTAURANTS_ERROR:
    return Object.assign({}, state, {
      error: action.error,
      isFetching: false,
    });

    case GET_RESTAURANTS_SUCCESS:
    return Object.assign({}, state, {
      restaurants: action.payload,
      error: null,
      isFetching: false,
    });

    default:
    return state;
  }
};
