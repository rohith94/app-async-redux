import _ from "lodash";
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

// export const fetchUser = (id) => {
//   return async (dispatch, getState) => {
//     const { data } = await JsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: data });
//   };
// };

//using memoize function to call each function only once
export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const { data } = await JsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: data });
});
