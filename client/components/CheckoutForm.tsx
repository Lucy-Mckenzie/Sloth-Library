import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  customerName: string
  bookTitle: string
}

interface Props extends FormData {
  submitLabel: string
  onSubmit: (_: FormData) => void
}

export default function CheckoutForm({customerName, bookTitle, submitLabel, onSubmit}: Props) {
  // formState holds current values of form inputs
  const [formState, setFormState] = useState<FormData>({ 
    customerName: customerName || '',
    bookTitle: bookTitle || '',
  })

  // When the user types something, this function is triggered
  const handleChange = ( event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  } 

  // handleSubmit is called when the form is submitted
  // It prevents the default form submission and calls onSubmit, sending formState as data to the parent
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    onSubmit(formState)
  } 

    return (

      <form onSubmit={handleSubmit}>
        <label>
          Customer name:
          <input
            name="customerName"
            type="text"
            placeholder="Enter customer name"
            value={formState.customerName}
            onChange={handleChange}
            required />
        </label>

        <label>
          Book title:
          <input
            name="bookTitle"
            type="text"
            placeholder="Enter book title"
            value={formState.bookTitle}
            onChange={handleChange} 
            required />
        </label>
        <button type="submit">{submitLabel}</button>
      </form>
    );
  }