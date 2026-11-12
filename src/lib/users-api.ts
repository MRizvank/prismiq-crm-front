import { authApi } from './auth-api';

export interface SystemUser {
  _id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'manager' | 'accountant' | 'sales' | string;
  designation: string;
  companyName: string;
  phone?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateSystemUserPayload {
  name: string;
  email: string;
  password: string;
  role: string;
  designation?: string;
  companyName?: string;
  phone?: string;
}

export interface UpdateSystemUserPayload {
  name?: string;
  email?: string;
  role?: string;
  designation?: string;
  companyName?: string;
  phone?: string;
  isActive?: boolean;
  newPassword?: string;
}

const API_BASE = (import.meta.env.VITE_API_URL as string) || 'https://prismq-crm-backend.onrender.com/api';

function getAuthHeaders() {
  const token = authApi.getToken();
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token || ''}`,
  };
}

export const usersApi = {
  async getAll(): Promise<SystemUser[]> {
    const res = await fetch(`${API_BASE}/users`, {
      headers: getAuthHeaders(),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Failed to fetch users. Super Admin access required.');
    }
    return res.json();
  },

  async getOne(id: string): Promise<SystemUser> {
    const res = await fetch(`${API_BASE}/users/${encodeURIComponent(id)}`, {
      headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error('User not found');
    return res.json();
  },

  async create(payload: CreateSystemUserPayload): Promise<SystemUser> {
    const res = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(Array.isArray(err.message) ? err.message.join(', ') : err.message || 'Failed to create user');
    }
    return res.json();
  },

  async update(id: string, payload: UpdateSystemUserPayload): Promise<SystemUser> {
    const res = await fetch(`${API_BASE}/users/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(Array.isArray(err.message) ? err.message.join(', ') : err.message || 'Failed to update user');
    }
    return res.json();
  },

  async remove(id: string): Promise<{ deleted: boolean }> {
    const res = await fetch(`${API_BASE}/users/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Failed to delete user');
    }
    return res.json();
  },
};

