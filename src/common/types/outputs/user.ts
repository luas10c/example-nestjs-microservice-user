interface User {
  id: string
  full_name: string
  email: string
  username: string
}

export interface UsersOutput {
  users: User[]
}

export interface UserOutput {
  user: User
}
