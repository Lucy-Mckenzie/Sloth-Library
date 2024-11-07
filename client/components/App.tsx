import CheckoutForm from './CheckoutForm'
import useEventCheckoutBook from '../apis/books';


export default function App() {
  
  const eventCheckoutBook = useEventCheckoutBook()

  const handleSubmit = (formData: {bookId: number | string, customerId: string }) => {
    eventCheckoutBook.mutateAsync(formData)
  }

  return (
    <>
    <h1>Library Checkout</h1>
      <CheckoutForm customerId="" bookId="" submitLabel="Checkout Book" onSubmit={handleSubmit} />
    </>
  )

}
