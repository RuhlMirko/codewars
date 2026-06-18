import { calculateTotal, formatPrice } from '../utils/helpers'

const cartItems = [
  { id: 1, name: 'Widget', price: 10.00, quantity: 2 },
  { id: 2, name: 'Gadget', price: 25.50, quantity: 1 },
  { id: 3, name: 'Gizmo', price: 15.00, quantity: 3 },
]

export default function Bug5PriceCalc() {
  const total = calculateTotal(cartItems)
  const formattedTotal = formatPrice(total)

  return (
    <div>
      <h2>Bug 5: Price Calculation</h2>
      <p style={{ marginBottom: '20px' }}>
        This component calculates a shopping cart total. Inspect the code and find the bug.
      </p>
      <div style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '8px', backgroundColor: '#fdf0ef'}}>
        <h3 style={{ color: '#e74c3c', marginTop: 0 }}>Component</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cartItems.map(item => (
            <li key={item.id} style={{ padding: '8px', margin: '5px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              {item.name}: ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> {formattedTotal}</p>
      </div>
    </div>
  )
}
