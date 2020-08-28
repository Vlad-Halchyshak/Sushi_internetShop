import axios from "axios";

const initialState = {
  items: [],
  isLoading: false
};

const sushi = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUSHI':
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };
    case "SET_LOAD":
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  };
}
  
export const fetchSushi = (sortBy, category) => (dispatch) => {
 dispatch(setLoading(false)) 
 
  axios
    .get(
      `http://localhost:3001/sushi?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setSushi(data));
    });
}

const setLoading = (payload) => ({
  type: "SET_LOAD",
  payload,
})

export const setSushi = (items) => ({ type: "SET_SUSHI", payload: items });
/* const setCategory = (categoryId) => ({type: "SET_CATEGORY",payload: categoryId}); */


export default sushi