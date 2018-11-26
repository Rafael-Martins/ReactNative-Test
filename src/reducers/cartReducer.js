const INITIAL_STATE = {
  itemsOnCart: {},
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const itemsOnCart = { ...state.itemsOnCart }
      const { id, name, price } = action.payload

      if (itemsOnCart[id]) {
        itemsOnCart[id].qty += 1
      }

      if (!itemsOnCart[id]) {
        itemsOnCart[id] = { name, price, qty: 1 }
      }

      return { itemsOnCart }
    default:
      return state
  }
}

export default cartReducer
