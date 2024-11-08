export interface Book {
  id: string
  customerId: string
  title: string
  author: string
  isAvailable: string
}

export interface BookWithCustomerName extends Book{
  customerName: string
}

