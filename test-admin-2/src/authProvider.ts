import { AuthProvider } from "react-admin";

export interface CustomAuthProviderMethods extends AuthProvider {
  refreshToken: () => Promise<any>
}

export const authProvider : CustomAuthProviderMethods = {
  refreshToken: () => {
    
  }
}