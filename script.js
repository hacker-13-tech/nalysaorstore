const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY'); // replace later

async function buy(priceId) {
  const response = await fetch('/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId })
  });
  const session = await response.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
}
