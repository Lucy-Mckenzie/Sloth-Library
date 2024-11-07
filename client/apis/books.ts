import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
const rootUrl = '/api/v1'


// export function getBooks(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }

<<<<<<< HEAD
export default function useEventBook(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: Event) => {
      await request.patch(`/api/v1/events/${id}`).send(values)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['event', id] })
      queryClient.invalidateQueries({ queryKey: ['schedule'] })
    },
  })
}
=======
// export default function checkOutBookEvent(customerId: number, bookId: number){
//   const queryClient = useQueryClient()
// }



>>>>>>> main
