export interface IUserRequest {
    name: string
    email: string
   phone: number
   createdAt: Date
   contactId: string
   password:string
}

export interface IUserUpdate {
    name?: string
    email?: string
   phone?: number
}

export interface IMockRequest {
    name: string
    email: string
   phone: number

}

export interface IUserLogin {
    email: string
    password: string
}