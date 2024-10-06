export const cartReducer = (state, action) => {
  // destructure the payload (action is payload in CartContext)
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };
    case "UPDATE_TOTAL":
      return { ...state, total: payload.total };
    default:
      throw new Error("No case found in cartReducer");
  }
};
