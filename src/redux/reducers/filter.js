

const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc'
    
}
}

const filters = (state = initialState, action) => {
  if (action.type === "SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export const setSortBy = ({type, order}) => ({type: "SORT_BY", payload: {type, order}})
export const  setCategory = (categoryId) => ({type: "SET_CATEGORY", payload: categoryId})

export default filters