export const calculateTotal = (items) => {
  let total = 0

  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity
  }

  return total
}

export const formatPrice = (amount) => {
  return '$' + amount.toFixed(2)
}

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regex.test(email)
}

export const getDiscountedPrice = (price, discount) => {
  const discountMultiplier = 1 - (discount / 100)

  return price * discountMultiplier
}

export const calculateTax = (subtotal, taxRate = 0.08) => {
  return subtotal * taxRate
}
