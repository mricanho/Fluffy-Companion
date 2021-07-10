import {
  FETCHING_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCHING_DETAIL,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILURE,
  SET_FILTER,
  SET_PAGE,
} from '../actions';

export const defaultState = {
  list: [],
  loading: false,
  filter: 'mammal',
  page: 1,
  message: '',
  detail: '',
};

const imagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_IMAGES:
      return { ...state, loading: true };
    case FETCH_IMAGES_SUCCESS:
      return {
        list: action.mammal.results,
        loading: false,
        filter: action.filter,
      };
    case FETCH_IMAGES_FAILURE:
      return { ...state, loading: false, message: action.error };
    case FETCHING_DETAIL:
      return { ...state, loading: true };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.mammal.results,
        loading: false,
      };
    case FETCH_DETAIL_FAILURE:
      return { ...state, loading: false, message: action.error };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case SET_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export default imagesReducer;
