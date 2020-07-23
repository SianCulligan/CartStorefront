const initState = {
    initProducts: [],
    activeProduct: {},
}


const reducer = (state = initState, action) => {
  console.log("products reducer called");
  let newState = { ...state };

  switch (action.type) {
    case "GET_PRODUCTS":
        newState.initProducts = action.payload;
        break;
    case "ADD_PRODUCT":
        newState.initProducts.push(action.payload);
        break;
    case "ONE_PRODUCT":
        newState.activeProduct = action.payload;
        break;
    default:
      break;
  }

  return newState;
};

export default reducer;
