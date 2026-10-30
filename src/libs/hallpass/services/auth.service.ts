
import { config, fetchOptions } from "../config/auth.config";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

export const AuthService = {
  signUp: async (signUpData: SignUpData) => {
    const response = await fetch(`${config.baseUrl}/auth/sign-up`, {
      ...fetchOptions,
      body: JSON.stringify(signUpData)
    });

    if (!response.ok) {
      throw new Error("Sign up failed");
    }

    const result = await response.json();

    return result?.data ?? result;
  },

  signIn: async (signInData: SignInData) => {
    const response = await fetch(`${config.baseUrl}/auth/sign-in`, {
      ...fetchOptions,
      body: JSON.stringify(signInData),
    });

    if (!response.ok) {
      throw new Error('Sign in failed');
    }

    const result = await response.json();

    return result?.data ?? result;
  },

  signOut: async () => {
    const response = await fetch(`${config.baseUrl}/auth/sign-out`, {
      method: 'POST',
      credentials: 'include',
    });

    const result = await response.json();

    return result?.data ?? result;
  },

  verifyEmail: async (token: string) => {
    const response = await fetch(`${config.baseUrl}/auth/verify-email/${token}`);

    if (!response.ok) {
      throw new Error('verifyEmail in failed');
    }

    const result = await response.json();

    return result?.data ?? result;
  },

  resendVerifyEmail: async (token: string) => {
    const response = await fetch(`${config.baseUrl}/auth/resend-verify-email/${token}`);

    if (!response.ok) {
      throw new Error('verifyEmail in failed');
    }

    const result = await response.json();

    return result?.data ?? result;
  },
}
