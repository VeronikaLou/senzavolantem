export interface Reservation {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  mail: string;
  phone: string;
  address: string;
  from: string;
  to: string;
  created: string;
  status: 'created' | 'deposit_paid' | 'fully_paid' | 'used';
}
