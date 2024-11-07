import CheckoutForm from './CheckoutForm'
import useEventCheckoutBook from '../apis/books';


export default function App() {
  
  const eventCheckoutBook = useEventCheckoutBook()

  const handleSubmit = (formData: {bookId: number | string, customerId: string }) => {
    eventCheckoutBook.mutateAsync(formData)
  }

  return (
    <>
    <h1>Library checkout</h1>
      <CheckoutForm customerId="" bookId="" submitLabel="Book checked out" onSubmit={handleSubmit} />
    </>
  )

}
