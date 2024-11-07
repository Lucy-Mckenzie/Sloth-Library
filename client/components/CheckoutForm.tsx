import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  customerId: string
  bookId: number | string
}

interface Props extends FormData {
  submitLabel: string
  onSubmit: (_: FormData) => void
}

export default function CheckoutForm({submitLabel, onSubmit}: Props) {
  // formState holds current values of form inputs
  const [formState, setFormState] = useState<FormData>({ 
    customerId: '',
    bookId:  0 || '',
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
    setFormState({customerId: '', bookId: 0})
  } 

    return (

      <form onSubmit={handleSubmit}>
        <label>
          Customer Id:
          <input
            name="customerId"
            type="text"
            placeholder="Enter Customer Id"
            value={formState.customerId}
            onChange={handleChange}
            required />
        </label>

        <label>
          Book title:
          <input
            name="bookId"
            type="text"
            placeholder="Enter Book Id"
            value={formState.bookId}
            onChange={handleChange} 
            required />
        </label>
        <button type="submit">{submitLabel}</button>
      </form>
    );
  }