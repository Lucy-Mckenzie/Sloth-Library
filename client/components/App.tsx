import CheckoutForm from './CheckoutForm'
import useEventCheckoutBook from '../apis/books';
import Footer from './Footer';
import Header from './Header';
import BookList from './Booklist';


export default function App() {
  
  const eventCheckoutBook = useEventCheckoutBook()

  const handleSubmit = (formData: {bookId: number | string, customerId: string }) => {
    eventCheckoutBook.mutateAsync(formData)
  }

  return (
    <>
    <h1>Library checkout</h1>
    <Header />
      <CheckoutForm customerId="" bookId="" submitLabel="Check out book" onSubmit={handleSubmit} />
      <BookList />
      <Footer />
    </>
  )

}

