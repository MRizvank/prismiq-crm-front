export interface InvoiceLine {
  id: number;
  code: string;
  desc: string;
  unit: string;
  qty: number;
  price: number;
}

export interface InvoiceItem {
  _id?: string;
  no: string;
  customer: string;
  kind: "Tax Invoice" | "Quotation" | "Purchase Order" | "Delivery Note" | string;
  date: string;
  due: string;
  amount: number;
  subtotal?: number;
  discount?: number;
  vat?: number;
  status: string;
  address?: string;
  trn?: string;
  notes?: string;
  scope?: string;
  extraNotes?: string;
  terms?: string;
  lpo?: string;
  preparedBy?: string;
  lines?: InvoiceLine[];
}

const API_BASE = (import.meta.env.VITE_API_URL as string) || "http://localhost:5000/api";

export const invoicesApi = {
  async getAll(params?: { kind?: string; status?: string; search?: string }): Promise<InvoiceItem[]> {
    const url = new URL(`${API_BASE}/invoices`);
    if (params?.kind && params.kind !== "All") url.searchParams.append("kind", params.kind);
    if (params?.status && params.status !== "All") url.searchParams.append("status", params.status);
    if (params?.search) url.searchParams.append("search", params.search);

    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error("Failed to fetch documents from database");
    }
    return res.json();
  },

  async getOne(idOrNo: string): Promise<InvoiceItem> {
    const res = await fetch(`${API_BASE}/invoices/${encodeURIComponent(idOrNo)}`);
    if (!res.ok) throw new Error("Document not found");
    return res.json();
  },

  async create(invoice: Partial<InvoiceItem>): Promise<InvoiceItem> {
    const res = await fetch(`${API_BASE}/invoices`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Failed to save document");
    }
    return res.json();
  },

  async update(idOrNo: string, patch: Partial<InvoiceItem>): Promise<InvoiceItem> {
    const res = await fetch(`${API_BASE}/invoices/${encodeURIComponent(idOrNo)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Failed to update document");
    }
    return res.json();
  },

  async approve(idOrNo: string): Promise<InvoiceItem> {
    return this.update(idOrNo, { status: "Approved" });
  },

  async remove(idOrNo: string): Promise<{ deleted: boolean }> {
    const res = await fetch(`${API_BASE}/invoices/${encodeURIComponent(idOrNo)}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete document");
    return res.json();
  },
};

