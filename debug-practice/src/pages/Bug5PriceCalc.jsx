import { calculateTotal, formatPrice, getDiscountedPrice, calculateTax } from '../utils/helpers'

const cartItems = [
  { id: 1, name: 'Widget', price: 10.00, quantity: 2 },
  { id: 2, name: 'Gadget', price: 25.50, quantity: 1 },
  { id: 3, name: 'Gizmo', price: 15.00, quantity: 3 },
]

export default function Bug5PriceCalc() {
  const total = calculateTotal(cartItems)
  const formattedTotal = formatPrice(total)
  const discounted = getDiscountedPrice(total, 10)
  const tax = calculateTax(total)

  return (
    <div>
      <h2>Bug 5: Price Calculation (Defensive Coding)</h2>
      <p style={{ marginBottom: '20px' }}>
        <strong>Verdict:</strong> The calculations work correctly for valid inputs.
        The "bug" here is <strong>defensive coding</strong> - <code>formatPrice</code> doesn't
        handle null/undefined gracefully. Since the cart data is hardcoded with valid numbers,
        this never manifests at runtime with current data.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', border: '2px solid #f39c12', borderRadius: '8px', backgroundColor: '#fef9e7' }}>
          <h3 style={{ color: '#f39c12', marginTop: 0 }}>Current Implementation</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
            formatPrice = (amount) =&gt; '$' + amount.toFixed(2)
          </code>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ padding: '8px', margin: '5px 0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
                {item.name}: ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> {formattedTotal}</p>
          <p><strong>After 10% discount:</strong> ${discounted.toFixed(2)}</p>
          <p><strong>Tax (8%):</strong> ${tax.toFixed(2)}</p>
        </div>
        <div style={{ padding: '20px', border: '2px solid #27ae60', borderRadius: '8px', backgroundColor: '#eafaf1' }}>
          <h3 style={{ color: '#27ae60', marginTop: 0 }}>What Could Be Improved</h3>
          <code style={{ display: 'block', marginBottom: '10px', padding: '8px', backgroundColor: '#d4edda', borderRadius: '4px', fontSize: '13px' }}>
            formatPrice = (amount) =&gt; amount == null ? '$0.00' : '$' + amount.toFixed(2)
          </code>
          <p style={{ fontSize: '14px', marginTop: '15px' }}>
            Adding a null/undefined check makes the function more robust for future use cases
            where the amount might not always be a valid number.
          </p>
          <p style={{ fontSize: '14px', marginTop: '10px', color: '#27ae60' }}>
            With current hardcoded data, both versions produce identical results.
          </p>
        </div>
      </div>
    </div>
  )
}
