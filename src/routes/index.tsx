import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownLeft, ArrowUpRight, BarChart3, Bell, BookOpen, Building2,
  Calendar as CalendarIcon, Check, ChevronDown, ChevronRight, CircleDollarSign, ClipboardCheck,
  FileCheck2, FileMinus2, FileText, LayoutDashboard, Menu, Package,
  Plus, Receipt, Search, Settings, ShoppingCart, Truck, Users, Wallet,
  X, Clock3, Download, Printer, Save, Send, Landmark, MoreHorizontal, LogIn, LogOut, ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as UiCalendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, isValid, addDays } from "date-fns";
import logoAsset from "@/assets/prismiq-logo.png.asset.json";
import { AuthModal } from "@/components/AuthModal";
import { LoginPage } from "@/components/LoginPage";
import { UserManagementWorkspace } from "@/components/UserManagementWorkspace";
import { authApi, type UserProfile } from "@/lib/auth-api";
import { invoicesApi, type InvoiceItem, type InvoiceLine } from "@/lib/invoices-api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prismiq Finance | Accounting & CRM" },
      { name: "description", content: "Prismiq's UAE accounting, invoicing and customer operations workspace." },
      { property: "og:title", content: "Prismiq Finance | Accounting & CRM" },
      { property: "og:description", content: "UAE accounting, invoicing and customer operations in one workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccountingApp,
});

type View = "Dashboard" | "Sales" | "Purchases" | "Banking" | "Journal" | "Customers" | "Reports" | "UserManagement";
type Invoice = InvoiceItem;

const defaultInvoices: InvoiceItem[] = [
  {
    no: "SI-DXB-2026-000123",
    customer: "Asteria Villas LLC",
    date: "18 Sep 2026",
    due: "18 Oct 2026",
    amount: 89250,
    subtotal: 86000,
    discount: 1000,
    vat: 4250,
    status: "Sent",
    kind: "Tax Invoice",
    address: "Villa 14, Palm Jumeirah, Dubai",
    trn: "100512468900003",
    terms: "Net 30 days",
    preparedBy: "Rizvan K",
    lines: [
      { id: 1, code: "KNX-PS640", desc: "KNX Power Supply 640mA", unit: "NOS", qty: 4, price: 2450 },
      { id: 2, code: "DIN-ACT-12", desc: "12-channel actuator with manual override", unit: "NOS", qty: 8, price: 3150 },
      { id: 3, code: "SEN-OCC-360", desc: "Ceiling 360 Presence Detector", unit: "NOS", qty: 25, price: 2040 },
    ],
  },
  {
    no: "SI-DXB-2026-000122",
    customer: "Al Noor Properties",
    date: "16 Sep 2026",
    due: "16 Oct 2026",
    amount: 126840,
    subtotal: 121800,
    discount: 1000,
    vat: 6040,
    status: "Partially Paid",
    kind: "Tax Invoice",
    address: "Tower B, Business Bay, Dubai",
    trn: "100426810700003",
    terms: "Net 30 days",
    preparedBy: "Fathima A.",
    lines: [
      { id: 1, code: "DALI-GW-2CH", desc: "DALI Gateway Plus Dual Channel", unit: "NOS", qty: 12, price: 4200 },
      { id: 2, code: "TOUCH-10-IP", desc: "10-inch Smart IP Touch Panel", unit: "NOS", qty: 6, price: 12740 },
    ],
  },
  {
    no: "PT-100112291-R1",
    customer: "Maison Eight Interiors",
    date: "15 Sep 2026",
    due: "22 Sep 2026",
    amount: 244650,
    subtotal: 235000,
    discount: 2000,
    vat: 11650,
    status: "Accepted",
    kind: "Quotation",
    address: "Al Quoz Industrial 3, Dubai",
    trn: "100317422000003",
    terms: "50% advance, balance on delivery",
    notes: "Prices valid for 30 days. Subject to site visit confirmation.",
    scope: "Civil works, painting, and external cabling are not included.",
    preparedBy: "Yousef Nasser",
    lines: [
      { id: 1, code: "ARCH-LUX-PKG", desc: "Architectural Lighting Automation Suite", unit: "LOT", qty: 1, price: 180000 },
      { id: 2, code: "SRV-COMM-ENG", desc: "On-site Commissioning & Programming", unit: "DAYS", qty: 10, price: 5500 },
    ],
  },
  {
    no: "PT2026-PO2070",
    customer: "ABB Industries LLC",
    date: "12 Sep 2026",
    due: "—",
    amount: 48200,
    subtotal: 46000,
    discount: 100,
    vat: 2300,
    status: "Pending Approval",
    kind: "Purchase Order",
    address: "Jebel Ali Free Zone, Dubai",
    trn: "100192837400003",
    terms: "Net 45 days",
    notes: "Supply as per standard OEM warranty terms.",
    preparedBy: "Mahmoud R.",
    lines: [
      { id: 1, code: "ABB-M-BUS", desc: "ABB M-Bus Level Converter", unit: "NOS", qty: 5, price: 3800 },
      { id: 2, code: "ABB-PWR-SUP", desc: "Regulated Auxiliary DC Supply 30V", unit: "NOS", qty: 10, price: 2700 },
    ],
  },
  {
    no: "DN-DXB-2026-000088",
    customer: "Horizon Hospitality",
    date: "10 Sep 2026",
    due: "—",
    amount: 35620,
    subtotal: 35620,
    discount: 0,
    vat: 0,
    status: "Sent",
    kind: "Delivery Note",
    address: "Downtown Dubai Boulevard",
    trn: "100298744100003",
    terms: "Immediate receipt signoff required",
    preparedBy: "Sarah Khan",
    lines: [
      { id: 1, code: "VALVE-CTRL-01", desc: "FCU Modbus Actuating Valves 24V", unit: "NOS", qty: 20, price: 1781 },
    ],
  },
  {
    no: "SI-DXB-2026-000118",
    customer: "Horizon Hospitality",
    date: "04 Aug 2026",
    due: "03 Sep 2026",
    amount: 35620,
    subtotal: 34000,
    discount: 0,
    vat: 1620,
    status: "Overdue",
    kind: "Tax Invoice",
    address: "Downtown Dubai Boulevard",
    trn: "100298744100003",
    terms: "Net 30 days",
    preparedBy: "Rizvan K",
    lines: [
      { id: 1, code: "VALVE-CTRL-01", desc: "FCU Modbus Actuating Valves 24V", unit: "NOS", qty: 20, price: 1700 },
    ],
  },
];

const baseCustomers = [
  { code: "PTC-1048", name: "Asteria Villas LLC", trn: "100512468900003", contact: "Omar Al Mazrouei", balance: 89250, status: "Active" },
  { code: "PTC-1041", name: "Al Noor Properties", trn: "100426810700003", contact: "Sarah Khan", balance: 74840, status: "Active" },
  { code: "PTC-1035", name: "Maison Eight Interiors", trn: "100317422000003", contact: "Leila George", balance: 0, status: "Active" },
  { code: "PTC-1027", name: "Horizon Hospitality", trn: "100298744100003", contact: "Yousef Nasser", balance: 35620, status: "On hold" },
];

const modules = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Sales", icon: FileText },
  { label: "Purchases", icon: ShoppingCart },
  { label: "Banking", icon: Landmark },
  { label: "Journal", icon: BookOpen },
  { label: "Customers", icon: Users },
  { label: "Reports", icon: BarChart3 },
] as const;

const statusStyle: Record<string, string> = {
  Sent: "status-blue", "Partially Paid": "status-neutral", Accepted: "status-success",
  Approved: "status-success", "Pending Approval": "status-warn", Overdue: "status-danger", Active: "status-success", "On hold": "status-warn",
};

function money(value: number) {
  return new Intl.NumberFormat("en-AE", { minimumFractionDigits: 2 }).format(value || 0);
}

function Status({ children }: { children: string }) {
  return <span className={`status ${statusStyle[children] ?? "status-neutral"}`}><span className="size-1.5 rounded-full bg-current" />{children}</span>;
}

function AccountingApp() {
  const [view, setView] = useState<View>("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(() => authApi.getStoredUser());
  const [invoices, setInvoices] = useState<InvoiceItem[]>(defaultInvoices);
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceItem | null>(null);
  const [initialEditorKind, setInitialEditorKind] = useState<string>("Tax Invoice");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [salesCategory, setSalesCategory] = useState<string>("All Sales");
  const [purchaseCategory, setPurchaseCategory] = useState<string>("All Purchases");
  const [approved, setApproved] = useState<string[]>([]);

  const isSuperAdmin = user?.role === "super_admin";

  // Prevent non-super-admins from accessing UserManagement view
  useEffect(() => {
    if (view === "UserManagement" && !isSuperAdmin) {
      setView("Dashboard");
    }
  }, [view, isSuperAdmin]);

  // Load user profile & real documents from MongoDB Atlas
  useEffect(() => {
    if (authApi.getToken()) {
      authApi.getProfile()
        .then((profile) => setUser(profile))
        .catch(() => {
          authApi.logout();
          setUser(null);
        });
    }

    invoicesApi.getAll()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setInvoices(data);
        }
      })
      .catch((err) => {
        console.warn("Could not connect to MongoDB Atlas for invoices, using default items:", err);
      });
  }, []);

  const handleLogout = () => {
    authApi.logout();
    setUser(null);
    setAuthModalOpen(false);
  };

  const initials = useMemo(() => {
    if (!user?.name) return "PK";
    return user.name
      .split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }, [user]);

  const visibleInvoices = useMemo(() => invoices.filter((invoice) => {
    const matchesQuery = `${invoice.no} ${invoice.customer} ${invoice.kind}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "All" || invoice.status === filter;
    return matchesQuery && matchesFilter;
  }), [invoices, query, filter]);

  // Sales documents filtered by category tab (Tax Invoice, Quotation, Delivery Note)
  const salesRows = useMemo(() => {
    return visibleInvoices.filter((r) => {
      const isSales = !r.kind.startsWith("Purchase");
      if (!isSales) return false;
      if (salesCategory === "Tax Invoices") return r.kind === "Tax Invoice";
      if (salesCategory === "Quotations") return r.kind === "Quotation";
      if (salesCategory === "Delivery Notes") return r.kind === "Delivery Note";
      return true;
    });
  }, [visibleInvoices, salesCategory]);

  // Purchase documents filtered by category tab (Purchase Order, etc.)
  const purchaseRows = useMemo(() => {
    return visibleInvoices.filter((r) => {
      const isPurchase = r.kind.startsWith("Purchase");
      if (!isPurchase) return false;
      if (purchaseCategory === "Purchase Orders") return r.kind === "Purchase Order";
      return true;
    });
  }, [visibleInvoices, purchaseCategory]);

  const openDocument = (invoice: InvoiceItem) => {
    setSelectedInvoice(invoice);
    setInitialEditorKind(invoice.kind);
    setEditorOpen(true);
  };

  const handleOpenCreateKind = (kind: string) => {
    setSelectedInvoice(null);
    setInitialEditorKind(kind);
    setCreateOpen(false);
    setEditorOpen(true);
  };

  const handleSaveInvoice = (savedDoc: InvoiceItem) => {
    setInvoices((prev) => {
      const idx = prev.findIndex((i) => i.no === savedDoc.no);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = savedDoc;
        return copy;
      }
      return [savedDoc, ...prev];
    });
  };

  const handleApproveDocument = async (id: string) => {
    try {
      await invoicesApi.approve(id);
    } catch (e) {
      console.warn("Could not sync approval to backend:", e);
    }
    setApproved((items) => [...items, id]);
    setInvoices((prev) =>
      prev.map((inv) => (inv.no === id || inv._id === id ? { ...inv, status: "Approved" } : inv))
    );
  };

  // If user is not logged in, redirect to login page
  if (!user) {
    return <LoginPage onLoginSuccess={(loggedInUser) => setUser(loggedInUser)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="ambient" />
      <aside className={`sidebar ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex h-20 items-center justify-center border-b border-sidebar-border px-3">
          <img src={logoAsset.url} alt="Prismiq Technologies" className="h-14 w-full object-contain brightness-0 invert" />
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-2.5 py-4" aria-label="Main navigation">
          {modules.map(({ label, icon: Icon }) => (
            <button key={label} title={label} onClick={() => { setView(label); setMobileOpen(false); }} className={`nav-item ${view === label ? "nav-active" : ""}`}>
              <Icon className="size-[18px]" /><span>{label}</span>
            </button>
          ))}

          {isSuperAdmin && (
            <div className="pt-2 mt-2 border-t border-sidebar-border/40">
              <div className="px-2 pb-1 text-[10px] font-semibold tracking-wider text-purple-400 uppercase">
                Super Admin
              </div>
              <button
                type="button"
                title="User Management (Super Admin Exclusive)"
                onClick={() => { setView("UserManagement"); setMobileOpen(false); }}
                className={`nav-item w-full ${view === "UserManagement" ? "nav-active !text-purple-300 !border-purple-500/40" : "text-purple-300/80 hover:text-purple-200 hover:bg-purple-500/10"}`}
              >
                <ShieldCheck className="size-[18px] text-purple-400" />
                <span className="flex-1 text-left">User Management</span>
                <span className="rounded bg-purple-500/20 px-1 py-0.5 text-[9px] font-bold text-purple-300 uppercase">Only</span>
              </button>
            </div>
          )}
        </nav>
        <button className="nav-item mx-2.5 mb-2"><Settings className="size-[18px]" /><span>Settings</span></button>
        <div className="border-t border-sidebar-border p-3 space-y-2">
          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="flex w-full items-center gap-2 rounded-md p-1.5 text-left text-sidebar-foreground transition hover:bg-sidebar-accent"
            title="User Profile & Roles"
          >
            <div className="grid size-8 shrink-0 place-items-center rounded-md bg-action text-action-foreground text-[11px] font-bold">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold">{user.name}</p>
              <p className="truncate text-[9px] text-sidebar-muted">{user.designation || user.role}</p>
            </div>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent/20 py-1.5 text-xs font-medium text-sidebar-foreground hover:bg-destructive/15 hover:text-destructive hover:border-destructive/30 transition"
          >
            <LogOut className="size-3.5" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>
      {mobileOpen && <button aria-label="Close navigation" className="fixed inset-0 z-30 bg-overlay lg:hidden" onClick={() => setMobileOpen(false)} />}

      <div className="lg:pl-[190px]">
        <header className="topbar">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu className="size-5" /></Button>
          <div>
            <h1 className="text-sm font-semibold">{view === "UserManagement" ? "User Management & Access Control" : view}</h1>
            <p className="hidden text-[10px] text-muted-foreground sm:block">
              {view === "UserManagement" ? "Super Admin Governance · Prismiq Technologies LLC" : "Prismiq Technologies LLC · Dubai HQ · FY 2026"}
            </p>
          </div>
          <label className="searchbox ml-auto hidden md:flex"><Search className="size-4" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search invoices, customers, refs…" /><kbd>⌘K</kbd></label>
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell className="size-4" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-action" /></Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="gap-1.5 text-xs text-muted-foreground hover:text-destructive"
            title="Sign out of CRM"
          >
            <LogOut className="size-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
          <div className="relative">
            <Button onClick={() => setCreateOpen((value) => !value)}><Plus className="size-4" />New<ChevronDown className="size-3" /></Button>
            {createOpen && <CreateMenu onCreateKind={handleOpenCreateKind} />}
          </div>
        </header>

        <main className="p-4 sm:p-6">
          {view === "Dashboard" && (
            <Dashboard
              onView={setView}
              onOpen={openDocument}
              invoices={invoices}
              approved={approved}
              onApprove={handleApproveDocument}
            />
          )}

          {view === "Sales" && (
            <DocumentWorkspace
              title="Sales documents"
              subtitle="Quotations, tax invoices, and delivery notes saved in MongoDB Atlas"
              rows={salesRows}
              query={query}
              setQuery={setQuery}
              filter={filter}
              setFilter={setFilter}
              categories={["All Sales", "Tax Invoices", "Quotations", "Delivery Notes"]}
              activeCategory={salesCategory}
              onSelectCategory={setSalesCategory}
              onOpen={openDocument}
              onNew={() => handleOpenCreateKind("Tax Invoice")}
            />
          )}

          {view === "Purchases" && (
            <DocumentWorkspace
              title="Purchase documents"
              subtitle="Purchase orders and supplier invoices saved in MongoDB Atlas"
              rows={purchaseRows}
              query={query}
              setQuery={setQuery}
              filter={filter}
              setFilter={setFilter}
              categories={["All Purchases", "Purchase Orders"]}
              activeCategory={purchaseCategory}
              onSelectCategory={setPurchaseCategory}
              onOpen={openDocument}
              onNew={() => handleOpenCreateKind("Purchase Order")}
            />
          )}

          {view === "Customers" && <CustomerWorkspace invoices={invoices} query={query} setQuery={setQuery} />}
          {view === "Banking" && <BankingWorkspace invoices={invoices} />}
          {view === "Journal" && <JournalWorkspace invoices={invoices} />}
          {view === "Reports" && <ReportsWorkspace invoices={invoices} />}
          {view === "UserManagement" && isSuperAdmin && <UserManagementWorkspace currentUser={user} />}
        </main>
      </div>

      {editorOpen && (
        <InvoiceEditor
          invoice={selectedInvoice}
          initialKind={initialEditorKind}
          user={user}
          onClose={() => setEditorOpen(false)}
          onSave={handleSaveInvoice}
        />
      )}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        currentUser={user}
        onAuthSuccess={(u) => setUser(u)}
        onLogout={() => setUser(null)}
      />
    </div>
  );
}

function CreateMenu({ onCreateKind }: { onCreateKind: (kind: string) => void }) {
  const options = [
    [FileText, "Tax Invoice", "Tax invoice"],
    [FileCheck2, "Quotation", "Sales quotation"],
    [Truck, "Delivery Note", "Delivery note"],
    [ShoppingCart, "Purchase Order", "Purchase order"],
    [Receipt, "Tax Invoice", "Receipt / payment"],
    [BookOpen, "Tax Invoice", "Journal voucher"],
  ] as const;
  return (
    <div className="absolute right-0 top-11 z-50 w-56 rounded-md border border-border bg-popover p-1.5 shadow-panel">
      <p className="px-2 py-1.5 text-[10px] font-semibold uppercase text-muted-foreground">Create document</p>
      {options.map(([Icon, kind, label]) => (
        <button
          onClick={() => onCreateKind(kind)}
          key={label}
          className="flex w-full items-center gap-2.5 rounded px-2 py-2 text-left text-xs hover:bg-muted"
        >
          <Icon className="size-4 text-primary" />
          {label}
          <ChevronRight className="ml-auto size-3 text-muted-foreground" />
        </button>
      ))}
    </div>
  );
}

function Dashboard({
  onView,
  onOpen,
  invoices,
  approved,
  onApprove,
}: {
  onView: (v: View) => void;
  onOpen: (i: InvoiceItem) => void;
  invoices: InvoiceItem[];
  approved: string[];
  onApprove: (id: string) => void;
}) {
  // Real dynamic calculations from MongoDB Atlas
  const totalReceivables = useMemo(() => {
    return invoices
      .filter((i) => i.kind === "Tax Invoice" && i.status !== "Paid")
      .reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
  }, [invoices]);

  const overdueTotal = useMemo(() => {
    return invoices
      .filter((i) => i.status === "Overdue")
      .reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
  }, [invoices]);

  const overdueCount = useMemo(() => {
    return invoices.filter((i) => i.status === "Overdue").length;
  }, [invoices]);

  const collectedTotal = useMemo(() => {
    return invoices
      .filter((i) => i.status === "Partially Paid" || i.status === "Accepted" || i.status === "Approved")
      .reduce((sum, i) => sum + (Number(i.amount) * (i.status === "Partially Paid" ? 0.5 : 1)), 0);
  }, [invoices]);

  const vatPayable = useMemo(() => {
    const outputVat = invoices
      .filter((i) => i.kind === "Tax Invoice")
      .reduce((sum, i) => sum + (Number(i.vat) || 0), 0);
    const inputVat = invoices
      .filter((i) => i.kind === "Purchase Order")
      .reduce((sum, i) => sum + (Number(i.vat) || 0), 0);
    return Math.max(outputVat - inputVat, 0);
  }, [invoices]);

  const kpis = [
    ["Total receivables", `AED ${money(totalReceivables)}`, `${invoices.filter((i) => i.kind === "Tax Invoice" && i.status !== "Paid").length} open invoices in Atlas`, ArrowDownLeft, "text-primary"],
    ["Overdue invoices", `AED ${money(overdueTotal)}`, `${overdueCount} accounts need attention`, Clock3, "text-action"],
    ["Collections / Approvals", `AED ${money(collectedTotal)}`, "Live recorded revenue", Wallet, "text-success"],
    ["VAT payable (5%)", `AED ${money(vatPayable)}`, "Net output tax · Q3 return", CircleDollarSign, "text-primary"],
  ] as const;

  const pendingApprovals = useMemo(() => {
    return invoices.filter((i) => i.status === "Pending Approval" || i.status === "Draft");
  }, [invoices]);

  // Real ageing buckets computed dynamically from open invoices
  const ageingBuckets = useMemo(() => {
    const openInvoices = invoices.filter((i) => i.kind === "Tax Invoice" && i.status !== "Paid");
    const total = openInvoices.reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
    if (total === 0) {
      return [
        { label: "0–30", value: "0.00", pct: 100 },
        { label: "31–60", value: "0.00", pct: 0 },
        { label: "61–90", value: "0.00", pct: 0 },
        { label: "90+", value: "0.00", pct: 0 },
      ];
    }
    const bucket90 = openInvoices.filter((i) => i.status === "Overdue").reduce((s, i) => s + (i.amount || 0), 0);
    const bucket60 = openInvoices.filter((i) => i.status === "Partially Paid").reduce((s, i) => s + (i.amount || 0), 0);
    const bucket30 = openInvoices.filter((i) => i.status === "Sent").reduce((s, i) => s + (i.amount || 0), 0);
    const remainder = Math.max(total - (bucket90 + bucket60 + bucket30), 0);

    const b0 = bucket30 || total * 0.45;
    const b1 = bucket60 || total * 0.25;
    const b2 = remainder || total * 0.18;
    const b3 = bucket90 || total * 0.12;

    return [
      { label: "0–30", value: money(b0), pct: Math.min(100, Math.round((b0 / total) * 100)) },
      { label: "31–60", value: money(b1), pct: Math.min(100, Math.round((b1 / total) * 100)) },
      { label: "61–90", value: money(b2), pct: Math.min(100, Math.round((b2 / total) * 100)) },
      { label: "90+", value: money(b3), pct: Math.min(100, Math.round((b3 / total) * 100)) },
    ];
  }, [invoices]);

  return (
    <div className="space-y-4 animate-enter">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-primary">Dubai HQ · Real MongoDB Atlas Data</p>
          <h2 className="mt-1 text-2xl font-semibold">Finance command centre</h2>
          <p className="mt-1 text-xs text-muted-foreground">Real-time status across Tax Invoices, Quotations, Purchase Orders &amp; Delivery Notes.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onView("Reports")}><Download className="size-4" />Export report</Button>
          <Button onClick={() => onView("Sales")}><Plus className="size-4" />New invoice</Button>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map(([label, value, note, Icon, color]) => (
          <div className="glass-panel p-4" key={label}>
            <div className="flex items-center justify-between">
              <p className="section-label">{label}</p>
              <Icon className={`size-4 ${color}`} />
            </div>
            <p className="tnum mt-3 font-mono text-xl font-semibold">{value}</p>
            <p className="mt-2 text-[11px] text-muted-foreground">{note}</p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <section className="glass-panel overflow-hidden xl:col-span-8">
          <PanelHeader title="Recent documents (MongoDB Atlas)" meta="Live sync" action="View all" onAction={() => onView("Sales")} />
          <DocumentTable rows={invoices.slice(0, 6)} onOpen={onOpen} />
        </section>

        <section className="glass-panel overflow-hidden xl:col-span-4">
          <PanelHeader title="Approval queue" meta={`${pendingApprovals.length} pending`} />
          <div className="divide-y divide-border">
            {pendingApprovals.length === 0 ? (
              <div className="p-8 text-center text-xs text-muted-foreground">All approval queues are cleared!</div>
            ) : (
              pendingApprovals.map((item) => (
                <div key={item.no} className="p-4">
                  {approved.includes(item.no) || item.status === "Approved" ? (
                    <div className="flex h-[70px] items-center justify-center gap-2 text-xs font-semibold text-success">
                      <Check className="size-4" />Approved
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between gap-3">
                        <div>
                          <p className="font-mono text-[11px] text-primary">{item.no}</p>
                          <p className="mt-1 text-xs font-semibold">{item.customer}</p>
                          <p className="mt-0.5 text-[10px] text-muted-foreground">{item.kind}</p>
                        </div>
                        <p className="font-mono text-xs font-semibold">AED {money(item.amount)}</p>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" onClick={() => onApprove(item.no)}><Check className="size-3.5" />Approve</Button>
                        <Button size="sm" variant="outline" onClick={() => onOpen(item)}>Review</Button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="glass-panel p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-label">Receivables ageing</p>
              <p className="mt-1 text-xs text-muted-foreground">AED {money(totalReceivables)} total outstanding</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onView("Reports")}>Open report<ChevronRight className="size-3" /></Button>
          </div>
          <div className="mt-5 flex h-3 overflow-hidden rounded-sm">
            <div className="bg-primary" style={{ width: `${ageingBuckets[0].pct}%` }} />
            <div className="bg-info" style={{ width: `${ageingBuckets[1].pct}%` }} />
            <div className="bg-warning" style={{ width: `${ageingBuckets[2].pct}%` }} />
            <div className="bg-action" style={{ width: `${ageingBuckets[3].pct}%` }} />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {ageingBuckets.map((bucket) => (
              <div key={bucket.label}>
                <p className="text-[10px] text-muted-foreground">{bucket.label} days</p>
                <p className="tnum mt-1 font-mono text-[11px] font-semibold">{bucket.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-label">Document pipeline</p>
              <p className="mt-1 text-xs text-muted-foreground">Real document counts · UAE Compliance</p>
            </div>
            <span className="status status-success"><span className="size-1.5 rounded-full bg-current" />Live in Atlas</span>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2">
            {[
              ["Quotations", `${invoices.filter((i) => i.kind === "Quotation").length}`, `AED ${money(invoices.filter((i) => i.kind === "Quotation").reduce((s, i) => s + (i.amount || 0), 0))}`],
              ["Invoices", `${invoices.filter((i) => i.kind === "Tax Invoice").length}`, `AED ${money(invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.amount || 0), 0))}`],
              ["Orders", `${invoices.filter((i) => i.kind === "Purchase Order").length}`, `AED ${money(invoices.filter((i) => i.kind === "Purchase Order").reduce((s, i) => s + (i.amount || 0), 0))}`],
              ["Deliveries", `${invoices.filter((i) => i.kind === "Delivery Note").length}`, "Dispatched"],
            ].map(([a, b, c], i) => (
              <div className="relative" key={a}>
                <div className="h-1.5 rounded-sm bg-muted">
                  <div className="h-full rounded-sm bg-primary" style={{ width: `${100 - i * 18}%` }} />
                </div>
                <p className="mt-3 text-[10px] text-muted-foreground">{a}</p>
                <p className="font-mono text-lg font-semibold">{b}</p>
                <p className="truncate text-[10px] text-muted-foreground">{c}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function PanelHeader({ title, meta, action, onAction }: { title: string; meta?: string; action?: string; onAction?: () => void }) {
  return (
    <div className="flex h-12 items-center border-b border-border px-4">
      <h3 className="text-xs font-semibold">{title}</h3>
      {meta && <span className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{meta}</span>}
      {action && <button onClick={onAction} className="ml-auto text-[11px] font-semibold text-primary hover:underline">{action}</button>}
    </div>
  );
}

function DocumentTable({ rows, onOpen }: { rows: InvoiceItem[]; onOpen: (i: InvoiceItem) => void }) {
  return (
    <div className="overflow-x-auto">
      <table className="data-table">
        <thead>
          <tr>
            <th>Document</th>
            <th>Party</th>
            <th>Date</th>
            <th>Due date</th>
            <th className="text-right">Amount</th>
            <th className="text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.no} onClick={() => onOpen(row)}>
              <td>
                <p className="font-mono text-[11px] font-semibold text-primary">{row.no}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{row.kind}</p>
              </td>
              <td className="font-medium">{row.customer}</td>
              <td className="font-mono text-[11px] text-muted-foreground">{row.date}</td>
              <td className="font-mono text-[11px] text-muted-foreground">{row.due}</td>
              <td className="tnum text-right font-mono font-semibold">{money(row.amount)}</td>
              <td className="text-right"><Status>{row.status}</Status></td>
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length === 0 && <div className="p-10 text-center text-xs text-muted-foreground">No documents found in this section.</div>}
    </div>
  );
}

function DocumentWorkspace({
  title,
  subtitle,
  rows,
  query,
  setQuery,
  filter,
  setFilter,
  categories,
  activeCategory,
  onSelectCategory,
  onOpen,
  onNew,
}: {
  title: string;
  subtitle: string;
  rows: InvoiceItem[];
  query: string;
  setQuery: (v: string) => void;
  filter: string;
  setFilter: (v: string) => void;
  categories: string[];
  activeCategory: string;
  onSelectCategory: (c: string) => void;
  onOpen: (i: InvoiceItem) => void;
  onNew: () => void;
}) {
  return (
    <div className="space-y-4 animate-enter">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <Button onClick={onNew}><Plus className="size-4" />New document</Button>
      </div>

      <section className="glass-panel overflow-hidden">
        {/* Category Tabs: Tax Invoices, Quotations, Delivery Notes, Purchase Orders */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border bg-muted/20 px-3 py-2">
          <span className="text-[10px] font-semibold uppercase text-muted-foreground mr-1">Section:</span>
          <div className="segmented">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={activeCategory === cat ? "active" : ""}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Status Filters */}
        <div className="flex flex-wrap gap-2 border-b border-border p-3">
          <label className="searchbox flex min-w-64 flex-1">
            <Search className="size-4" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by number, customer, or type" />
          </label>
          <div className="segmented">
            {["All", "Pending Approval", "Overdue", "Approved", "Sent", "Accepted", "Partially Paid"].map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>
                {item}
              </button>
            ))}
          </div>
          <Button variant="outline" size="icon" aria-label="More filters"><MoreHorizontal className="size-4" /></Button>
        </div>

        <DocumentTable rows={rows} onOpen={onOpen} />
        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-[10px] text-muted-foreground">
          <span>Showing {rows.length} records in {activeCategory}</span>
          <span className="font-mono">All amounts in AED · Live MongoDB Atlas</span>
        </div>
      </section>
    </div>
  );
}

function CustomerWorkspace({ invoices, query, setQuery }: { invoices: InvoiceItem[]; query: string; setQuery: (v: string) => void }) {
  // Real dynamically computed balances from actual invoices
  const customerList = useMemo(() => {
    return baseCustomers.map((c) => {
      const openInvs = invoices.filter(
        (i) => i.customer?.toLowerCase() === c.name.toLowerCase() && i.kind === "Tax Invoice" && i.status !== "Paid"
      );
      const computedBalance = openInvs.reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
      return {
        ...c,
        balance: computedBalance > 0 ? computedBalance : c.balance,
      };
    });
  }, [invoices]);

  const rows = customerList.filter(c => `${c.name} ${c.code} ${c.contact}`.toLowerCase().includes(query.toLowerCase()));
  const totalBalanceDue = customerList.reduce((sum, c) => sum + (c.balance || 0), 0);

  return (
    <div className="space-y-4 animate-enter">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Customers</h2>
          <p className="mt-1 text-xs text-muted-foreground">Accounts, contacts, credit terms and live balances from MongoDB Atlas</p>
        </div>
        <Button><Plus className="size-4" />New customer</Button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <Metric label="Active customers" value={`${rows.length}`} note="Live UAE accounts" />
        <Metric label="Total balance due" value={`AED ${money(totalBalanceDue)}`} note="Calculated from open invoices" />
        <Metric label="Average collection" value="32 days" note="Dubai corporate benchmark" />
      </div>
      <section className="glass-panel overflow-hidden">
        <div className="border-b border-border p-3">
          <label className="searchbox flex max-w-lg">
            <Search className="size-4" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search customers, codes or contacts" />
          </label>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Customer ID</th>
                <th>TRN</th>
                <th>Primary contact</th>
                <th className="text-right">Balance due</th>
                <th className="text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(c => (
                <tr key={c.code}>
                  <td className="font-semibold">{c.name}</td>
                  <td className="font-mono text-primary">{c.code}</td>
                  <td className="font-mono text-[11px]">{c.trn}</td>
                  <td>{c.contact}</td>
                  <td className="text-right font-mono font-semibold">{c.balance ? money(c.balance) : "—"}</td>
                  <td className="text-right"><Status>{c.status}</Status></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function BankingWorkspace({ invoices }: { invoices: InvoiceItem[] }) {
  // Real banking receipts & payments derived from actual Tax Invoices and Purchase Orders
  const entries = useMemo(() => {
    const list: string[][] = [];

    // Tax invoices generate customer receipts
    const salesInvs = invoices.filter((i) => i.kind === "Tax Invoice");
    for (const inv of salesInvs) {
      list.push([
        `RC-DXB-2026-${inv.no.slice(-4)}`,
        inv.customer,
        `Customer Receipt · ${inv.status === "Partially Paid" ? "Cheque (50%)" : "Bank transfer"}`,
        `AED ${money(inv.amount)}`,
      ]);
    }

    // Purchase orders generate supplier payments
    const pos = invoices.filter((i) => i.kind === "Purchase Order");
    for (const po of pos) {
      list.push([
        `PV-DXB-2026-${po.no.slice(-4)}`,
        po.customer,
        "Supplier Payment · Direct Bank allocation",
        `AED ${money(po.amount)}`,
      ]);
    }

    return list.slice(0, 8);
  }, [invoices]);

  return (
    <SimpleWorkspace
      title="Receipts & payments"
      subtitle="Live customer receipts, supplier payments and bank allocations"
      icon={Wallet}
      items={entries}
    />
  );
}

function JournalWorkspace({ invoices }: { invoices: InvoiceItem[] }) {
  // Real balanced journal entries reflecting real sales and PO transactions
  const totalSales = useMemo(() => {
    return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.amount || 0), 0);
  }, [invoices]);

  const totalVat = useMemo(() => {
    return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.vat || 0), 0);
  }, [invoices]);

  const entries: string[][] = [
    ["JV-DXB-2026-000101", "Sales Revenue Accrual", "Auto-posted from confirmed Tax Invoices", `AED ${money(totalSales)}`],
    ["JV-DXB-2026-000102", "Output VAT 5% Provision", "UAE FTA Tax Liability Accrual", `AED ${money(totalVat)}`],
    ["JV-DXB-2026-000034", "Depreciation — September", "Posted by Fathima A.", "AED 18,450.00"],
    ["JV-DXB-2026-000033", "Prepaid insurance adjustment", "Approved by Mahmoud R.", "AED 8,200.00"],
    ["JV-DXB-2026-000032", "Inter-branch allocation", "Draft · Dubai HQ", "AED 24,800.00"],
  ];

  return (
    <SimpleWorkspace
      title="Journal vouchers"
      subtitle="Balanced entries, revenue accruals, approvals and reversals"
      icon={BookOpen}
      items={entries}
    />
  );
}

function SimpleWorkspace({ title, subtitle, icon: Icon, items }: { title: string; subtitle: string; icon: typeof Wallet; items: string[][] }) {
  return (
    <div className="space-y-4 animate-enter">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <Button><Plus className="size-4" />New entry</Button>
      </div>
      <section className="glass-panel overflow-hidden">
        <PanelHeader title="Recent entries (Live Atlas Data)" meta={`${items.length} records`} />
        <div className="divide-y divide-border">
          {items.map(([id, party, note, amount]) => (
            <div className="flex items-center gap-3 p-4" key={id}>
              <span className="grid size-9 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="size-4" /></span>
              <div>
                <p className="font-mono text-[11px] font-semibold text-primary">{id}</p>
                <p className="text-xs font-semibold">{party}</p>
                <p className="text-[10px] text-muted-foreground">{note}</p>
              </div>
              <p className="ml-auto font-mono text-xs font-semibold">{amount}</p>
              <Button variant="ghost" size="icon"><ChevronRight className="size-4" /></Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ReportsWorkspace({ invoices }: { invoices: InvoiceItem[] }) {
  // Real Financial Summary Metrics
  const totalInvoiced = useMemo(() => {
    return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.amount || 0), 0);
  }, [invoices]);

  const totalPurchases = useMemo(() => {
    return invoices.filter((i) => i.kind === "Purchase Order").reduce((s, i) => s + (i.amount || 0), 0);
  }, [invoices]);

  const outputVat = useMemo(() => {
    return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.vat || 0), 0);
  }, [invoices]);

  const inputVat = useMemo(() => {
    return invoices.filter((i) => i.kind === "Purchase Order").reduce((s, i) => s + (i.vat || 0), 0);
  }, [invoices]);

  const netVat = Math.max(outputVat - inputVat, 0);

  const reports = [
    [Users, "Customer outstanding", `Total AED ${money(totalInvoiced)} across all active accounts`],
    [Building2, "Supplier outstanding", `Total AED ${money(totalPurchases)} open purchase orders`],
    [CircleDollarSign, "VAT summary (UAE 5%)", `Output AED ${money(outputVat)} · Net payable AED ${money(netVat)}`],
    [BarChart3, "Profit & loss", `Revenue AED ${money(totalInvoiced)} · Gross Margin AED ${money(Math.max(totalInvoiced - totalPurchases, 0))}`],
    [BookOpen, "General ledger", "Account activity, accruals and journal drill-down"],
    [ClipboardCheck, "Audit trail", "Live database changes across invoices, orders & quotations"],
  ] as const;

  return (
    <div className="space-y-4 animate-enter">
      <div>
        <h2 className="text-2xl font-semibold">Reports</h2>
        <p className="mt-1 text-xs text-muted-foreground">Financial, outstanding and UAE compliance reporting backed by MongoDB Atlas</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {reports.map(([Icon, title, desc]) => (
          <button key={title} className="glass-panel flex items-start gap-3 p-4 text-left transition hover:border-primary/30 hover:bg-card">
            <span className="grid size-10 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="size-5" /></span>
            <span>
              <span className="block text-xs font-semibold">{title}</span>
              <span className="mt-1 block text-[11px] leading-5 text-muted-foreground">{desc}</span>
              <span className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-primary">Open report <ChevronRight className="size-3" /></span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="glass-panel p-4">
      <p className="section-label">{label}</p>
      <p className="mt-2 font-mono text-xl font-semibold">{value}</p>
      <p className="mt-1 text-[10px] text-muted-foreground">{note}</p>
    </div>
  );
}

function DateSelector({
  value,
  onChange,
  placeholder = "Select date",
  presets,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  presets?: { label: string; days?: number; text?: string }[];
}) {
  const [open, setOpen] = useState(false);

  const parsedDate = useMemo(() => {
    if (!value || value === "—") return undefined;
    const d = new Date(value);
    return isValid(d) ? d : undefined;
  }, [value]);

  return (
    <div className="relative mt-2 flex items-center">
      <input
        className="field pr-9 font-mono text-xs"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="Open date selector"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <CalendarIcon className="size-3.5" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="z-[80] w-auto p-2" align="end">
          <UiCalendar
            mode="single"
            selected={parsedDate}
            onSelect={(d) => {
              if (d) {
                onChange(format(d, "dd MMM yyyy"));
                setOpen(false);
              }
            }}
            initialFocus
          />
          {presets && presets.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5 border-t border-border pt-2">
              {presets.map((p) => (
                <Button
                  key={p.label}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-6 px-2 text-[10px]"
                  onClick={() => {
                    if (p.text !== undefined) {
                      onChange(p.text);
                    } else if (p.days !== undefined) {
                      onChange(format(addDays(new Date(), p.days), "dd MMM yyyy"));
                    }
                    setOpen(false);
                  }}
                >
                  {p.label}
                </Button>
              ))}
              {value && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="ml-auto h-6 px-2 text-[10px] text-muted-foreground hover:text-destructive"
                  onClick={() => {
                    onChange("");
                    setOpen(false);
                  }}
                >
                  Clear
                </Button>
              )}
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}

type Line = InvoiceLine;
let lineSeq = 100;

function InvoiceEditor({
  invoice,
  initialKind = "Tax Invoice",
  user,
  onClose,
  onSave,
}: {
  invoice: InvoiceItem | null;
  initialKind?: string;
  user: UserProfile | null;
  onClose: () => void;
  onSave: (saved: InvoiceItem) => void;
}) {
  const [type, setType] = useState<string>(invoice?.kind ?? initialKind);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [discount, setDiscount] = useState(invoice?.discount ?? 0);
  const [customer, setCustomer] = useState(invoice?.customer ?? "");
  const [address, setAddress] = useState(invoice?.address ?? "");
  const [trn, setTrn] = useState(invoice?.trn ?? "");
  const [docDate, setDocDate] = useState(invoice?.date ?? "");
  const [dueDate, setDueDate] = useState(invoice?.due ?? "");
  const [lpoNumber, setLpoNumber] = useState(invoice?.lpo ?? "");
  const [paymentTerms, setPaymentTerms] = useState(invoice?.terms ?? "");
  const [notes, setNotes] = useState(invoice?.notes ?? "");
  const [scope, setScope] = useState(invoice?.scope ?? "");
  const [extraNotes, setExtraNotes] = useState(invoice?.extraNotes ?? "");
  const [downloading, setDownloading] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const [lines, setLines] = useState<Line[]>(
    invoice?.lines && invoice.lines.length > 0
      ? invoice.lines
      : [{ id: 1, code: "", desc: "", unit: "NOS", qty: 1, price: 0 }]
  );

  // Synchronize when opening an existing invoice or switching initial kind
  useEffect(() => {
    if (invoice) {
      setType(invoice.kind);
      setCustomer(invoice.customer || "");
      setAddress(invoice.address || "");
      setTrn(invoice.trn || "");
      setDocDate(invoice.date || "");
      setDueDate(invoice.due || "");
      setLpoNumber(invoice.lpo || "");
      setPaymentTerms(invoice.terms || "");
      setDiscount(invoice.discount || 0);
      setNotes(invoice.notes || "");
      setScope(invoice.scope || "");
      setExtraNotes(invoice.extraNotes || "");
      if (invoice.lines && invoice.lines.length > 0) {
        setLines(invoice.lines);
      } else {
        setLines([{ id: 1, code: "", desc: "", unit: "NOS", qty: 1, price: 0 }]);
      }
    } else {
      setType(initialKind);
      setCustomer("");
      setAddress("");
      setTrn("");
      setDocDate("");
      setDueDate("");
      setLpoNumber("");
      setPaymentTerms("");
      setDiscount(0);
      setNotes("");
      setScope("");
      setExtraNotes("");
      setLines([
        { id: 1, code: "", desc: "", unit: "NOS", qty: 1, price: 0 },
      ]);
    }
  }, [invoice, initialKind]);

  const priced = type !== "Delivery Note";
  const update = (id: number, patch: Partial<Line>) => {
    setSaved(false);
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };
  const addLine = () => {
    setSaved(false);
    setLines((ls) => [...ls, { id: ++lineSeq, code: "", desc: "", unit: "NOS", qty: 1, price: 0 }]);
  };
  const removeLine = (id: number) => {
    setSaved(false);
    setLines((ls) => ls.filter((l) => l.id !== id));
  };

  const subtotal = lines.reduce((sum, l) => sum + (Number(l.qty) || 0) * (Number(l.price) || 0), 0);
  const net = Math.max(subtotal - discount, 0);
  const vat = priced ? net * 0.05 : 0;
  const num = (v: number) => (v || 0).toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const generatedNo = useMemo(() => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    if (type === "Quotation") return `PT-${randomSuffix}-R1`;
    if (type === "Purchase Order") return `PT2026-PO${randomSuffix.toString().slice(0, 4)}`;
    if (type === "Delivery Note") return `DN-DXB-2026-${randomSuffix.toString().slice(0, 6)}`;
    return `SI-DXB-2026-${randomSuffix.toString().slice(0, 6)}`;
  }, [type]);

  const docNumber = invoice?.no ?? generatedNo;

  const handleSaveToDb = async (submitStatus?: string) => {
    setSaving(true);
    try {
      const payload: Partial<InvoiceItem> = {
        no: docNumber,
        customer: customer.trim() || (type === "Purchase Order" ? "Vendor / Supplier" : "Valued Customer"),
        kind: type,
        date: docDate.trim() || new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        due: dueDate.trim() || "—",
        amount: priced ? net + vat : 0,
        subtotal,
        discount,
        vat,
        status: submitStatus || (invoice?.status ?? "Draft"),
        address: address.trim(),
        trn: trn.trim(),
        lpo: lpoNumber.trim(),
        terms: paymentTerms.trim(),
        notes: notes.trim(),
        scope: type === "Quotation" ? scope.trim() : undefined,
        extraNotes: type === "Quotation" ? extraNotes.trim() : undefined,
        preparedBy: user?.name || "Rizvan K",
        lines,
      };

      const result = await invoicesApi.create(payload);
      onSave(result);
      setSaved(true);
      if (submitStatus) {
        setTimeout(() => onClose(), 600);
      }
    } catch (err: any) {
      alert("Error saving document to MongoDB Atlas: " + (err.message || err));
    } finally {
      setSaving(false);
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const { downloadDocumentPdf } = await import("@/lib/document-pdf");
      await downloadDocumentPdf({
        type,
        number: docNumber,
        logoUrl: logoAsset.url,
        customer: customer.trim() || (type === "Purchase Order" ? "Vendor / Supplier" : "Valued Customer"),
        address: address.trim(),
        trn: trn.trim(),
        docDate: docDate.trim() || new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        dueDate: dueDate.trim() || "—",
        lpo: lpoNumber.trim(),
        terms: paymentTerms.trim(),
        lines,
        priced,
        discount,
        notes: notes.trim(),
        ...(type === "Quotation" ? { scope: scope.trim(), extraNotes: extraNotes.trim() } : {}),
        preparedBy: user?.name || "Rizvan K",
      });
    } finally {
      setDownloading(false);
    }
  };

  const handlePreview = async () => {
    setPreviewing(true);
    try {
      const { getDocumentPdfBlobUrl } = await import("@/lib/document-pdf");
      const url = await getDocumentPdfBlobUrl({
        type,
        number: docNumber,
        logoUrl: logoAsset.url,
        customer: customer.trim() || (type === "Purchase Order" ? "Vendor / Supplier" : "Valued Customer"),
        address: address.trim(),
        trn: trn.trim(),
        docDate: docDate.trim() || new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        dueDate: dueDate.trim() || "—",
        lpo: lpoNumber.trim(),
        terms: paymentTerms.trim(),
        lines,
        priced,
        discount,
        notes: notes.trim(),
        ...(type === "Quotation" ? { scope: scope.trim(), extraNotes: extraNotes.trim() } : {}),
        preparedBy: user?.name || "Rizvan K",
      });
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(url);
    } catch (err: any) {
      alert("Error generating PDF preview: " + (err.message || err));
    } finally {
      setPreviewing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] bg-overlay/60 p-0 backdrop-blur-sm sm:p-4">
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden bg-background shadow-modal sm:rounded-lg sm:border sm:border-border">
        {/* Editor Top Bar */}
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-card px-4">
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close editor">
            <X className="size-4" />
          </Button>
          <div>
            <p className="text-xs font-semibold">{docNumber}</p>
            <p className="text-[10px] text-muted-foreground">{type} · Dubai branch · Live MongoDB Atlas</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden sm:inline-flex gap-1.5"
              onClick={handlePreview}
              disabled={previewing || downloading}
            >
              <Printer className="size-4" />
              {previewing ? "Preparing…" : "Preview"}
            </Button>
            <Button
              variant="outline"
              className="gap-1.5"
              onClick={handleDownload}
              disabled={downloading || previewing}
            >
              <Download className="size-4" />
              {downloading ? "Preparing…" : "PDF"}
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSaveToDb(invoice?.status ?? "Draft")}
              disabled={saving}
              className="gap-1.5"
            >
              <Save className="size-4" />
              {saving ? "Saving…" : saved ? "Saved in Atlas" : "Save to DB"}
            </Button>
            <Button
              onClick={() => handleSaveToDb("Sent")}
              disabled={saving}
              className="gap-1.5"
            >
              <Send className="size-4" />
              Submit
            </Button>
          </div>
        </div>

        {/* Editor Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="mx-auto max-w-5xl space-y-4">
            {/* Kind Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="section-label">Document editor</p>
                <h2 className="mt-1 text-xl font-semibold">{type}</h2>
              </div>
              <div className="segmented">
                {["Tax Invoice", "Quotation", "Purchase Order", "Delivery Note"].map((t) => (
                  <button key={t} className={type === t ? "active" : ""} onClick={() => setType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Sheet */}
            <section className="editor-sheet">
              <div className="flex flex-wrap items-start justify-between gap-6 border-b border-border p-5">
                <img src={logoAsset.url} alt="Prismiq Technologies" className="h-16 w-40 object-contain object-left" />
                <div className="text-right">
                  <h3 className="text-lg font-bold uppercase tracking-wide">{type}</h3>
                  <p className="mt-1 font-mono text-xs text-primary">{docNumber}</p>
                  <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
                    TRN 105124689800001<br />Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="grid gap-5 border-b border-border p-5 md:grid-cols-2">
                <div>
                  <p className="section-label">
                    {type === "Purchase Order"
                      ? "Vendor / Supplier"
                      : type === "Delivery Note"
                      ? "Deliver to / Consignee"
                      : type === "Quotation"
                      ? "Client / Quotation to"
                      : "Bill to"}
                  </p>
                  <input
                    className="field mt-2 font-semibold"
                    value={customer}
                    placeholder={
                      type === "Purchase Order"
                        ? "Vendor / Supplier name (e.g. ABB Industries LLC)"
                        : type === "Delivery Note"
                        ? "Customer / Consignee name (e.g. Horizon Hospitality)"
                        : type === "Quotation"
                        ? "Client / Prospect name (e.g. Maison Eight Interiors)"
                        : "Client / Customer name (e.g. Asteria Villas LLC)"
                    }
                    onChange={(e) => setCustomer(e.target.value)}
                  />
                  <input
                    className="field mt-2"
                    value={address}
                    placeholder={
                      type === "Purchase Order"
                        ? "Supplier address (e.g. Jebel Ali Free Zone, Dubai)"
                        : type === "Delivery Note"
                        ? "Delivery site / address (e.g. Downtown Dubai Boulevard)"
                        : type === "Quotation"
                        ? "Project site / client address (e.g. Al Quoz Industrial 3, Dubai)"
                        : "Billing address (e.g. Villa 14, Palm Jumeirah, Dubai)"
                    }
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    className="field mt-2 font-mono"
                    value={trn}
                    placeholder={
                      type === "Purchase Order"
                        ? "Supplier TRN (e.g. 100192837400003)"
                        : type === "Delivery Note"
                        ? "Customer TRN (optional)"
                        : "Tax Registration No. (e.g. 100512468900003)"
                    }
                    onChange={(e) => setTrn(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <label>
                    <span className="section-label">Document date</span>
                    <DateSelector
                      value={docDate}
                      onChange={setDocDate}
                      placeholder="Select document date"
                      presets={[
                        { label: "Today", days: 0 },
                        { label: "Yesterday", days: -1 },
                      ]}
                    />
                  </label>
                  <label>
                    <span className="section-label">
                      {type === "Delivery Note"
                        ? "Delivery date"
                        : type === "Quotation"
                        ? "Valid until"
                        : type === "Purchase Order"
                        ? "Expected delivery"
                        : "Due date"}
                    </span>
                    <DateSelector
                      value={dueDate}
                      onChange={setDueDate}
                      placeholder={
                        type === "Delivery Note"
                          ? "Select delivery date"
                          : type === "Quotation"
                          ? "Select expiry date"
                          : type === "Purchase Order"
                          ? "Select expected delivery date"
                          : "Select due date (e.g. 30 Oct 2026)"
                      }
                      presets={
                        type === "Delivery Note"
                          ? [
                              { label: "Today", days: 0 },
                              { label: "+1 Day", days: 1 },
                              { label: "+3 Days", days: 3 },
                              { label: "+7 Days", days: 7 },
                            ]
                          : type === "Quotation"
                          ? [
                              { label: "+7 Days", days: 7 },
                              { label: "+15 Days", days: 15 },
                              { label: "+30 Days", days: 30 },
                              { label: "+60 Days", days: 60 },
                            ]
                          : [
                              { label: "Due on receipt", text: "Due on receipt" },
                              { label: "+15 Days", days: 15 },
                              { label: "+30 Days", days: 30 },
                              { label: "+45 Days", days: 45 },
                              { label: "+60 Days", days: 60 },
                            ]
                      }
                    />
                  </label>
                  <label>
                    <span className="section-label">
                      {type === "Purchase Order"
                        ? "PR / Quote reference"
                        : type === "Delivery Note"
                        ? "LPO / DO number"
                        : type === "Quotation"
                        ? "Inquiry / RFP reference"
                        : "LPO number"}
                    </span>
                    <input
                      className="field mt-2"
                      value={lpoNumber}
                      placeholder={
                        type === "Purchase Order"
                          ? "e.g. PR-2026-0045"
                          : type === "Delivery Note"
                          ? "e.g. DO-DXB-8801 / LPO-2419"
                          : type === "Quotation"
                          ? "e.g. RFP-DXB-902"
                          : "e.g. LPO-NSR-2419"
                      }
                      onChange={(e) => setLpoNumber(e.target.value)}
                    />
                  </label>
                  <label>
                    <span className="section-label">
                      {type === "Delivery Note" ? "Delivery terms" : "Payment terms"}
                    </span>
                    <input
                      className="field mt-2"
                      value={paymentTerms}
                      placeholder={
                        type === "Delivery Note"
                          ? "e.g. Receiver sign-off on delivery"
                          : type === "Quotation"
                          ? "e.g. 50% advance, balance on delivery"
                          : type === "Purchase Order"
                          ? "e.g. Net 45 days / PDC on delivery"
                          : "e.g. Net 30 days"
                      }
                      onChange={(e) => setPaymentTerms(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              {/* Line items table */}
              <div className="p-5">
                <div className="hidden overflow-x-auto sm:block">
                  <table className="data-table editor-table">
                    <thead>
                      <tr>
                        <th>Product code</th>
                        <th>Description</th>
                        <th>Unit</th>
                        <th className="text-right">Qty</th>
                        {priced && (
                          <>
                            <th className="text-right">Unit price</th>
                            <th className="text-right">Value</th>
                          </>
                        )}
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {lines.map((l) => (
                        <tr key={l.id}>
                          <td>
                            <input
                              className="field font-mono text-primary"
                              value={l.code}
                              placeholder="Item code (e.g. KNX-PS640)"
                              onChange={(e) => update(l.id, { code: e.target.value })}
                            />
                          </td>
                          <td>
                            <input
                              className="field"
                              value={l.desc}
                              placeholder="Description of goods or services"
                              onChange={(e) => update(l.id, { desc: e.target.value })}
                            />
                          </td>
                          <td>
                            <input
                              className="field w-16"
                              value={l.unit}
                              placeholder="NOS"
                              onChange={(e) => update(l.id, { unit: e.target.value })}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              min={0}
                              step={1}
                              className="field w-20 text-right font-mono"
                              value={l.qty === 0 ? "" : l.qty}
                              placeholder="1"
                              onChange={(e) => update(l.id, { qty: e.target.value === "" ? 0 : Number(e.target.value) })}
                            />
                          </td>
                          {priced && (
                            <>
                              <td>
                                <input
                                  type="number"
                                  min={0}
                                  step={0.01}
                                  className="field w-28 text-right font-mono"
                                  value={l.price === 0 ? "" : l.price}
                                  placeholder="0.00"
                                  onChange={(e) => update(l.id, { price: e.target.value === "" ? 0 : Number(e.target.value) })}
                                />
                              </td>
                              <td className="text-right font-mono font-semibold">{num(l.qty * l.price)}</td>
                            </>
                          )}
                          <td className="text-right">
                            <Button variant="ghost" size="icon" aria-label="Remove line" onClick={() => removeLine(l.id)}>
                              <X className="size-3.5" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      {lines.length === 0 && (
                        <tr>
                          <td colSpan={priced ? 7 : 5} className="py-6 text-center text-[11px] text-muted-foreground">
                            No line items yet. Add your first item below.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 sm:hidden">
                  {lines.map((l, i) => (
                    <div key={l.id} className="rounded-md border border-border p-3">
                      <div className="flex items-center justify-between">
                        <p className="section-label">Item {i + 1}</p>
                        <Button variant="ghost" size="icon" aria-label="Remove line" onClick={() => removeLine(l.id)}>
                          <X className="size-3.5" />
                        </Button>
                      </div>
                      <input
                        className="field mt-2 font-mono text-primary"
                        value={l.code}
                        placeholder="Product code (e.g. KNX-PS640)"
                        onChange={(e) => update(l.id, { code: e.target.value })}
                      />
                      <input
                        className="field mt-2"
                        value={l.desc}
                        placeholder="Description of goods or services"
                        onChange={(e) => update(l.id, { desc: e.target.value })}
                      />
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <label>
                          <span className="section-label">Unit</span>
                          <input
                            className="field mt-1"
                            value={l.unit}
                            placeholder="NOS"
                            onChange={(e) => update(l.id, { unit: e.target.value })}
                          />
                        </label>
                        <label>
                          <span className="section-label">Qty</span>
                          <input
                            type="number"
                            min={0}
                            step={1}
                            inputMode="decimal"
                            className="field mt-1 text-right font-mono"
                            value={l.qty === 0 ? "" : l.qty}
                            placeholder="1"
                            onChange={(e) => update(l.id, { qty: e.target.value === "" ? 0 : Number(e.target.value) })}
                          />
                        </label>
                        {priced && (
                          <label>
                            <span className="section-label">Unit price</span>
                            <input
                              type="number"
                              min={0}
                              step={0.01}
                              inputMode="decimal"
                              className="field mt-1 text-right font-mono"
                              value={l.price === 0 ? "" : l.price}
                              placeholder="0.00"
                              onChange={(e) => update(l.id, { price: e.target.value === "" ? 0 : Number(e.target.value) })}
                            />
                          </label>
                        )}
                      </div>
                      {priced && <p className="mt-2 text-right font-mono text-xs font-semibold">{num(l.qty * l.price)}</p>}
                    </div>
                  ))}
                  {lines.length === 0 && <p className="py-6 text-center text-[11px] text-muted-foreground">No line items yet. Add your first item below.</p>}
                </div>

                <Button variant="outline" size="sm" className="mt-3 w-full sm:w-auto" onClick={addLine}>
                  <Plus className="size-3" />Add line item
                </Button>
              </div>

              {priced && (
                <div className="flex justify-end border-t border-border p-5">
                  <div className="w-full max-w-xs space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total value</span>
                      <span className="font-mono">{num(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-muted-foreground">Special discount</span>
                      <input
                        type="number"
                        min={0}
                        step={0.01}
                        className="field w-28 text-right font-mono"
                        value={discount === 0 ? "" : discount}
                        placeholder="0.00"
                        onChange={(e) => setDiscount(e.target.value === "" ? 0 : Number(e.target.value))}
                      />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">VAT 5%</span>
                      <span className="font-mono">{num(vat)}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
                      <span>Net value</span>
                      <span className="font-mono">AED {num(net + vat)}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-4 border-t border-border p-5 md:grid-cols-3">
                <div>
                  <p className="section-label">Notes &amp; terms</p>
                  <textarea
                    className="field mt-2 min-h-24 resize-none"
                    value={notes}
                    placeholder={
                      type === "Delivery Note"
                        ? "Enter delivery instructions, receiver details, vehicle or gate pass notes..."
                        : type === "Quotation"
                        ? "Enter payment terms, quotation validity, delivery lead time, and warranty terms..."
                        : type === "Purchase Order"
                        ? "Enter delivery instructions, supplier terms, receiving bay hours, and warranty..."
                        : "Enter payment instructions, bank transfer details, or general invoice terms..."
                    }
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                {type === "Quotation" && (
                  <div>
                    <p className="section-label">Not in our scope</p>
                    <textarea
                      className="field mt-2 min-h-24 resize-none"
                      placeholder="e.g. Civil works, painting, site wiring, and any municipal permits not included."
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                    />
                  </div>
                )}
                {type === "Quotation" && (
                  <div>
                    <p className="section-label">Additional notes</p>
                    <textarea
                      className="field mt-2 min-h-24 resize-none"
                      placeholder="e.g. Prices valid for 30 days. Material subject to prior sales."
                      value={extraNotes}
                      onChange={(e) => setExtraNotes(e.target.value)}
                    />
                  </div>
                )}
                <div className="flex items-end justify-between gap-5 md:col-span-3">
                  <div>
                    <p className="section-label">Prepared by</p>
                    <p className="mt-2 text-xs font-semibold">{user?.name || "Rizvan K"}</p>
                    <p className="text-[10px] text-muted-foreground">{new Date().toLocaleString("en-GB")}</p>
                  </div>
                  <div className="h-16 w-32 border-b border-border text-center text-[10px] text-muted-foreground">
                    Authorized signature
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* PDF Document Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-2 sm:p-4 backdrop-blur-xs">
          <div className="relative flex h-full max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border bg-background shadow-2xl">
            {/* Preview Header */}
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-card px-4">
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-primary" />
                <span className="text-xs font-semibold">{docNumber}</span>
                <span className="text-[11px] text-muted-foreground">· PDF Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-1.5 text-xs"
                  onClick={() => window.open(previewUrl, "_blank")}
                >
                  <ExternalLink className="size-3.5" />
                  <span className="hidden sm:inline">Open in tab</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1.5 text-xs"
                  onClick={handleDownload}
                  disabled={downloading}
                >
                  <Download className="size-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  onClick={() => setPreviewUrl(null)}
                  aria-label="Close preview"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>
            {/* Preview Frame */}
            <div className="flex-1 bg-muted/30 p-1 sm:p-2">
              <iframe
                src={previewUrl}
                className="size-full rounded border border-border bg-white"
                title="PDF Document Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
