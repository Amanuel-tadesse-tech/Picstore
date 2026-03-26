export interface AuthUser {
  id: number;
  openId: string;
  name: string | null;
  email: string | null;
  role: "user" | "admin";
}
