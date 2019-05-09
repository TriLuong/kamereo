export const STORE_INFO_REQUEST = "STORE_INFO_REQUEST";
export const STORE_INFO_SUCCESS = "STORE_INFO_SUCCESS";
export const STORE_INFO_FAIL = "STORE_INFO_FAIL";

const storeInforRequest = () => {
  return {
    type: STORE_INFO_REQUEST
  };
};

const storeInforSuccess = (data) => {
  return {
    type: STORE_INFO_SUCCESS,
    data: data
  };
};

const storeInforFail = (err) => {
  return {
    type: STORE_INFO_FAIL,
    error: err
  };
};

export const setStoreInfo = (storeInfo) => {
  return (dispatch) => {
    dispatch(storeInforRequest());
    try {
      dispatch(storeInforSuccess(storeInfo));
    } catch (err) {
      dispatch(storeInforFail(err));
    }
  };
};
