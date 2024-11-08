export async function seed(knex) {
  await knex('books').insert ([
      { id: 1, customer_id: null, title: "To Care For a Mockingbird", author: "Drummer Lee", is_available: true },
      { id: 2, customer_id: null, title: "1978", author: "Greg Andbad", is_available: true },
      { id: 3, customer_id: null, title: "The Big Whale", author: "Hiswoman Melville", is_available: true },
      { id: 4, customer_id: null, title: "The Terrible Bugsy", author: "F. Scott Fitzgerald", is_available: true },
      { id: 5, customer_id: null, title: "Proud and Prejudiced", author: "Jane Austen", is_available: true },
      { id: 6, customer_id: null, title: "The Butter On the Rye", author: "J.D. Salinger", is_available: true },
      { id: 7, customer_id: null, title: "The Lady of the Bagels", author: "J.R.R. Tolkien", is_available: true },
      { id: 8, customer_id: null, title: "The Blobbit", author: "J.R.R. Tolkien", is_available: true },
      { id: 9, customer_id: null, title: "Celsius 902", author: "Ray Bradbury", is_available: true },
      { id: 10, customer_id: null, title: "Cowardly Old Town", author: "Aldous Huxley", is_available: true }
    
  ])
}