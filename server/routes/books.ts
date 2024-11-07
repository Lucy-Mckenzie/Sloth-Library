import { Router } from 'express'

import * as db from '../db/index.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()

    res.json({ books: books.map((book) => book.title) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:bookId/:customerId', async (req, res, next) => {
  try {
    const {bookId, customerId} = req.params
    
    await db.checkOutBook(Number(bookId), Number(customerId))
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

export default router
