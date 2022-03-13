export interface Contact{
  id: number,
  name: string,
  email: string,
  phone: string,
  message:string,
  created_at: string,
  updated_at: string
}

export interface allContactResponse{
  data:Contact[]
}