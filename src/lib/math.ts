import currency from 'currency.js'

// Currency math helper for zero floating point bugs (PHP currency formatting)
export const formatPHP = (amount: number | string) => {
  return currency(amount, { symbol: '₱', precision: 0 }).format()
}

export const formatPHPWithCents = (amount: number | string) => {
  return currency(amount, { symbol: '₱', precision: 2 }).format()
}

export const calcOrderTotals = (
  items: Array<{ price: number; quantity: number }>,
  shippingCost = 0,
  discountAmount = 0
) => {
  const subtotal = items.reduce((acc, item) => {
    return acc.add(currency(item.price).multiply(item.quantity))
  }, currency(0))

  const discount = currency(discountAmount)
  const shipping = currency(shippingCost)
  const taxable = subtotal.subtract(discount)
  const total = taxable.add(shipping)

  return {
    subtotal: subtotal.value,
    subtotalFormatted: subtotal.format({ symbol: '₱' }),
    shipping: shipping.value,
    shippingFormatted: shipping.format({ symbol: '₱' }),
    discount: discount.value,
    total: total.value,
    totalFormatted: total.format({ symbol: '₱' }),
  }
}
