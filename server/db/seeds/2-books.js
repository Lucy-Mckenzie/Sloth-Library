export async function seed(knex) {
  await knex('books').insert ([
      { id: 1, customer_id: "1", title: "To Care For a Mockingbird", author: "Drummer Lee", is_available: true },
      { id: 2, customer_id: "2", title: "1978", author: "Greg Andbad", is_available: true },
      { id: 3, customer_id: "3", title: "The Big Whale", author: "Hiswoman Melville", is_available: true },
      { id: 4, customer_id: "4", title: "The Terrible Bugsy", author: "F. Scott Fitzgerald", is_available: true },
      { id: 5, customer_id: "5", title: "Proud and Prejudiced", author: "Jane Austen", is_available: true },
      { id: 6, customer_id: "6", title: "The Butter On the Rye", author: "J.D. Salinger", is_available: true },
      { id: 7, customer_id: "7", title: "The Lady of the Bagels", author: "J.R.R. Tolkien", is_available: true },
      { id: 8, customer_id: "8", title: "The Blobbit", author: "J.R.R. Tolkien", is_available: true },
      { id: 9, customer_id: "9", title: "Celsius 802", author: "Ray Bradbury", is_available: true },
      { id: 10, customer_id: "10", title: "Cowardly Old Town", author: "Aldous Huxley", is_available: true }
    
  ])
}