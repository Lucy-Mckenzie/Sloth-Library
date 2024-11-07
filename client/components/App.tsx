import CheckoutForm from './CheckoutForm'

export default function App() {

  const handleSubmit = (formData: { customerName: string; bookTitle: string }) => {
    console.log(formData)
  }
  return (
    <>
    <h1>Library checkout</h1>
      <CheckoutForm customerName="" bookTitle="" submitLabel="Book checked out" onSubmit={handleSubmit} />
    </>
  )
}
