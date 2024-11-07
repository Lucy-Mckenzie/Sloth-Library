export async function seed(knex) {
  await knex('books').insert ([
      { id: 1, customer_id: "1", title: "To Kill a Mockingbird", author: "Harper Lee", is_available: true },
      { id: 2, customer_id: "2", title: "1984", author: "George Orwell", is_available: true },
      { id: 3, customer_id: "3", title: "Moby-Dick", author: "Herman Melville", is_available: true },
      { id: 4, customer_id: "4", title: "The Great Gatsby", author: "F. Scott Fitzgerald", is_available: true },
      { id: 5, customer_id: "5", title: "Pride and Prejudice", author: "Jane Austen", is_available: true },
      { id: 6, customer_id: "6", title: "The Catcher in the Rye", author: "J.D. Salinger", is_available: true },
      { id: 7, customer_id: "7", title: "The Lord of the Rings", author: "J.R.R. Tolkien", is_available: true },
      { id: 8, customer_id: "8", title: "The Hobbit", author: "J.R.R. Tolkien", is_available: true },
      { id: 9, customer_id: "9", title: "Fahrenheit 451", author: "Ray Bradbury", is_available: true },
      { id: 10, customer_id: "10", title: "Brave New World", author: "Aldous Huxley", is_available: true }
    
  ])
}