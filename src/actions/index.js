export const FETCHING_IMAGES = 'FETCH_IMAGES';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const FETCHING_DETAIL = 'FETCHING_DETAIL';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PAGE = 'SET_PAGE';

export const fetchImages = () => ({ type: FETCHING_IMAGES });
export const fetchSuccess = (images) => ({ type: FETCH_IMAGES_SUCCESS, images });
export const fetchFailure = (error) => ({ type: FETCH_IMAGES_FAILURE, error });
export const fetchDetail = () => ({ type: FETCHING_DETAIL });
export const fetchDetailSuccess = (image) => ({ type: FETCH_DETAIL_SUCCESS, image });
export const fetchDetailFailure = (error) => ({ type: FETCH_DETAIL_FAILURE, error });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const setPage = (page) => ({ type: SET_PAGE, page });

export const asyncFetchimages = (filter, page) => (
  async (dispatch) => {
    dispatch(fetchImages());
    const searchPage = 'search/photos';
    const criteria = `&query=${filter}&page=${page}&per_page=3`;

    const url = `https://api.unsplash.com/${searchPage}?client_id=BaXi2mcm9XjL88eggWwNZkeUQZofqvu1CQXRsbwkJ5M${criteria}`;
    return fetch(`${url}`)
      .then((result) => result.json())
      .then((data) => dispatch(fetchSuccess(data, filter)))
      .catch((error) => dispatch(fetchFailure(error)));
  }
);

export const asyncFetchDetail = (id) => (
  async (dispatch) => {
    dispatch(fetchDetail());
    const searchPage = `/photos/${id}`;

    const url = `https://api.unsplash.com/${searchPage}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
    return fetch(`${url}`)
      .then((result) => result.json())
      .then((data) => dispatch(fetchDetailSuccess(data)))
      .catch((error) => dispatch(fetchDetailFailure(error)));
  }
);
