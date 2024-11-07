import { Router } from 'express'

import * as db from '../db/index.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()

    res.json({ fruits: books.map((book) => book.title) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:bookId/:customerId', async (req, res) => {
  try {
    
    const books = await db.checkOutBook()
  } catch (error) {

  }
})

export default router
