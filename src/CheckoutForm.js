import { PaymentElement } from '@stripe/react-stripe-js';

function CheckoutForm() {
    return (
        <form>
            <PaymentElement />
            <button>Submit</button>
        </form>
    )
}

export default CheckoutForm;