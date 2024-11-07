import connection from './connection.ts'
import { Book } from '../../models/book.ts'

export async function getAllBooks(): Promise<Book[]> {
  return connection('books').select('*')
}

export async function checkOutBook(customerId: number, bookId: number): Promise<void> {
  return connection('books').where('id', bookId).update({'is_available': false, 'customer_id': customerId})
}