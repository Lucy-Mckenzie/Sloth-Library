import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'


// export function getBooks(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }

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


