import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { BookWithCustomerName } from '../../models/book'

export default function useEventCheckoutBook() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({bookId, customerId}: {bookId: string | number, customerId: string}) => {
      
      await request.patch(`/api/v1/books/${bookId}`).send({customerId})
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['event'] })
      queryClient.invalidateQueries({ queryKey: ['schedule'] })
    },
  })
}

export async function useGetListOfBooks(): Promise<BookWithCustomerName[]>  {
  const result = await request.get('/api/v1/books')
  return result.body
}
   


