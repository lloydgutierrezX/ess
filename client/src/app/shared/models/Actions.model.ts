export interface IActions {
  name: string;
  type?: 'submit' | 'redirect' | 'custom';
  route?: string;
}