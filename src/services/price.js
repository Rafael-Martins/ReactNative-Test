export const normalizePrice = price => {
  slicedPriceArray = [price.toString().slice(0, 2), price.toString().slice(2)]
  console.log(slicedPriceArray)

  return `R$${slicedPriceArray[0]},${slicedPriceArray[1]}`
}
