import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  const stripePromise = loadStripe('pk_test_51KV5tcLALX60SYEoYxybNazimbVL6HgWLPml2F724u0ISH2YnF5ifI91EC8IaycfUhDTNZGOUhjo3QLQJVzYytGj00QOb6qj7R');
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
