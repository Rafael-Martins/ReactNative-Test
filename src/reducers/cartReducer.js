const INITIAL_STATE = {
  itemsOnCart: {},
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const itemsOnCart = { ...state.itemsOnCart }
      const { id } = action.payload

      itemsOnCart[id] = itemsOnCart[id] ? itemsOnCart[id] + 1 : 1

      return { itemsOnCart }
    default:
      return state
  }
}

export default cartReducer
