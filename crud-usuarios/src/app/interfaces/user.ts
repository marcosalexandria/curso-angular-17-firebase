export interface User {
  name: string;
  email: string;
  sector: string;
  role: string;
  firebaseId?: string | number;
  heathPlan?: string;
  dentalPlan?: string;
}
