export interface UserProfile {
  _id?: string;
  name: string;
  email: string;
  role: string;
  companyName?: string;
  designation?: string;
  phone?: string;
}

export interface AuthResponse {
  message: string;
  user: UserProfile;
  accessToken: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  companyName?: string;
  designation?: string;
  role?: string;
  phone?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

const API_BASE = (import.meta.env.VITE_API_URL as string) || 'https://prismq-crm-backend.onrender.com/api';
const TOKEN_KEY = 'prismiq_auth_token';
const USER_KEY = 'prismiq_auth_user';

export const authApi = {
  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },

  removeToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  },

  getStoredUser(): UserProfile | null {
    if (typeof window === 'undefined') return null;
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  setStoredUser(user: UserProfile) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  },

  async signup(payload: SignupPayload): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(Array.isArray(data.message) ? data.message.join(', ') : data.message || 'Signup failed');
    }

    if (data.accessToken) {
      this.setToken(data.accessToken);
      this.setStoredUser(data.user);
    }
    return data;
  },

  async login(payload: LoginPayload): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(Array.isArray(data.message) ? data.message.join(', ') : data.message || 'Login failed');
    }

    if (data.accessToken) {
      this.setToken(data.accessToken);
      this.setStoredUser(data.user);
    }
    return data;
  },

  async getProfile(): Promise<UserProfile> {
    const token = this.getToken();
    if (!token) throw new Error('Not authenticated');

    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch user profile');
    }

    this.setStoredUser(data.user);
    return data.user;
  },

  logout() {
    this.removeToken();
  },
};

