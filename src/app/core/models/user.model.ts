export interface TokenResponse {
  auth: boolean;
  accessToken: string;
  refreshToken: string;
  user: string;
}

export interface LoginInput {
  username: string;
  password: string;
}
