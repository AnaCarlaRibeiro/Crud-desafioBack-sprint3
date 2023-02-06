export interface IContactRequest {
  userId: string;
  email: string;
  phone: number;
  createdAt:Date
}

export interface IContactUpdate {
    email?: string;
    phone?: number;

  }
  
  export interface IMockContactRequest {
    userId: string;
    email: string;
    phone: number;
    
  }
  