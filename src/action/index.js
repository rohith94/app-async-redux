import JsonPlaceHolder from "../apis/JsonPlaceHolder";
//u can call below action if there is no async call
export const normalFetchPost = () => {
  return { type: "FETCH_POSTS" };
};

export const fetchPost = () => {
  return async (dispatch, getState) => {
    const { data } = await JsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: data });
  };
};
