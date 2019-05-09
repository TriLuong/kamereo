import {
  STORE_INFO_REQUEST,
  STORE_INFO_SUCCESS,
  STORE_INFO_FAIL
} from "./StoreInfo.action";

const initialState = {
  load: false,
  storeInfo: null,
  error: null
};

export default function storeInfoReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_INFO_REQUEST:
      return { ...state, load: true };
    case STORE_INFO_SUCCESS:
      return { ...state, load: false, storeInfo: action.data };
    case STORE_INFO_FAIL:
      return { ...state, load: false, error: action.error };
    default:
      return state;
  }
}
