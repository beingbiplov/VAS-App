export default interface UserInterface {
  isAuthenticated: boolean | undefined;
  isAdmin: boolean | undefined;
  id: number | undefined;
  email: string | undefined;
}
