const intialState = {
    list: [],
    activeProduct: {}
  };
  export const productsReducer = (state = intialState, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS":
        return {
          ...state,
          list: action.payload
        };
      case "DELETE_PRODUCT":
        return {
          ...state,
          list: action.payload
        };
      case "VIEW_PRODUCT":
        return {
          ...state,
          activeProduct: action.payload
        };
      default:
        return state;
    }
  };
  