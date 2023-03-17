const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST })

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
})

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, isLoading: true }
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload }
    case FETCH_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}
