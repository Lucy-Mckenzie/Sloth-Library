import { useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
const rootUrl = '/api/v1'

// export function getBooks(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }

export default function checkOutBookEvent(customerId: number, bookId: number){
  const queryClient = useQueryClient()
}



