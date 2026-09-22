import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowDownLeft, ArrowUpRight, BarChart3, Bell, BookOpen, Building2,
  Check, ChevronDown, ChevronRight, CircleDollarSign, ClipboardCheck,
  FileCheck2, FileMinus2, FileText, LayoutDashboard, Menu, Package,
  Plus, Receipt, Search, Settings, ShoppingCart, Truck, Users, Wallet,
  X, Clock3, Download, Printer, Save, Send, Landmark, MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/prismiq-logo.png.asset.json";

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

type View = "Dashboard" | "Sales" | "Purchases" | "Banking" | "Journal" | "Customers" | "Reports";
type Invoice = { no: string; customer: string; date: string; due: string; amount: number; status: string; kind: string };

const invoices: Invoice[] = [
  { no: "SI-DXB-2026-000123", customer: "Asteria Villas LLC", date: "18 Sep 2026", due: "18 Oct 2026", amount: 89250, status: "Sent", kind: "Tax Invoice" },
  { no: "SI-DXB-2026-000122", customer: "Al Noor Properties", date: "16 Sep 2026", due: "16 Oct 2026", amount: 126840, status: "Partially Paid", kind: "Tax Invoice" },
  { no: "PT-100112291-R1", customer: "Maison Eight Interiors", date: "15 Sep 2026", due: "22 Sep 2026", amount: 244650, status: "Accepted", kind: "Quotation" },
  { no: "PI-DXB-2026-000045", customer: "Schneider Gulf FZE", date: "14 Sep 2026", due: "14 Oct 2026", amount: 67420, status: "Approved", kind: "Purchase Invoice" },
  { no: "PT2026-PO2070", customer: "ABB Industries LLC", date: "12 Sep 2026", due: "—", amount: 48200, status: "Pending Approval", kind: "Purchase Order" },
  { no: "SI-DXB-2026-000118", customer: "Horizon Hospitality", date: "04 Aug 2026", due: "03 Sep 2026", amount: 35620, status: "Overdue", kind: "Tax Invoice" },
];

const customers = [
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
  return new Intl.NumberFormat("en-AE", { minimumFractionDigits: 2 }).format(value);
}

function Status({ children }: { children: string }) {
  return <span className={`status ${statusStyle[children] ?? "status-neutral"}`}><span className="size-1.5 rounded-full bg-current" />{children}</span>;
}

function AccountingApp() {
  const [view, setView] = useState<View>("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [approved, setApproved] = useState<string[]>([]);

  const visibleInvoices = useMemo(() => invoices.filter((invoice) => {
    const matchesQuery = `${invoice.no} ${invoice.customer} ${invoice.kind}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "All" || invoice.status === filter;
    return matchesQuery && matchesFilter;
  }), [query, filter]);

  const openDocument = (invoice: Invoice) => { setSelectedInvoice(invoice); setEditorOpen(true); };

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
        </nav>
        <button className="nav-item mx-2.5 mb-2"><Settings className="size-[18px]" /><span>Settings</span></button>
        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-2 rounded-md p-1.5 text-sidebar-foreground">
            <div className="grid size-8 shrink-0 place-items-center rounded-md bg-action text-action-foreground text-[11px] font-bold">RK</div>
            <div className="min-w-0"><p className="truncate text-[11px] font-semibold">Rizvan K</p><p className="truncate text-[9px] text-sidebar-muted">Super Admin</p></div>
          </div>
        </div>
      </aside>
      {mobileOpen && <button aria-label="Close navigation" className="fixed inset-0 z-30 bg-overlay lg:hidden" onClick={() => setMobileOpen(false)} />}

      <div className="lg:pl-[190px]">
        <header className="topbar">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu className="size-5" /></Button>
          <div><h1 className="text-sm font-semibold">{view}</h1><p className="hidden text-[10px] text-muted-foreground sm:block">Prismiq Technologies LLC · Dubai HQ · FY 2026</p></div>
          <label className="searchbox ml-auto hidden md:flex"><Search className="size-4" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search invoices, customers, refs…" /><kbd>⌘K</kbd></label>
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell className="size-4" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-action" /></Button>
          <div className="relative">
            <Button onClick={() => setCreateOpen((value) => !value)}><Plus className="size-4" />New<ChevronDown className="size-3" /></Button>
            {createOpen && <CreateMenu onCreate={() => { setCreateOpen(false); setEditorOpen(true); setSelectedInvoice(null); }} />}
          </div>
        </header>

        <main className="p-4 sm:p-6">
          {view === "Dashboard" && <Dashboard onView={setView} onOpen={openDocument} approved={approved} onApprove={(id) => setApproved((items) => [...items, id])} />}
          {view === "Sales" && <DocumentWorkspace title="Sales documents" subtitle="Quotations, tax invoices, delivery notes and credit notes" rows={visibleInvoices.filter((r) => !r.kind.startsWith("Purchase"))} query={query} setQuery={setQuery} filter={filter} setFilter={setFilter} onOpen={openDocument} onNew={() => { setSelectedInvoice(null); setEditorOpen(true); }} />}
          {view === "Purchases" && <DocumentWorkspace title="Purchase documents" subtitle="Purchase orders, supplier invoices and debit notes" rows={visibleInvoices.filter((r) => r.kind.startsWith("Purchase"))} query={query} setQuery={setQuery} filter={filter} setFilter={setFilter} onOpen={openDocument} onNew={() => { setSelectedInvoice(null); setEditorOpen(true); }} />}
          {view === "Customers" && <CustomerWorkspace query={query} setQuery={setQuery} />}
          {view === "Banking" && <BankingWorkspace />}
          {view === "Journal" && <JournalWorkspace />}
          {view === "Reports" && <ReportsWorkspace />}
        </main>
      </div>
      {editorOpen && <InvoiceEditor invoice={selectedInvoice} onClose={() => setEditorOpen(false)} />}
    </div>
  );
}

function CreateMenu({ onCreate }: { onCreate: () => void }) {
  const options = [
    [FileText, "Sales invoice"], [FileCheck2, "Sales quotation"], [Truck, "Delivery note"],
    [ShoppingCart, "Purchase order"], [Receipt, "Receipt / payment"], [BookOpen, "Journal voucher"],
  ] as const;
  return <div className="absolute right-0 top-11 z-50 w-56 rounded-md border border-border bg-popover p-1.5 shadow-panel">
    <p className="px-2 py-1.5 text-[10px] font-semibold uppercase text-muted-foreground">Create document</p>
    {options.map(([Icon, label]) => <button onClick={onCreate} key={label} className="flex w-full items-center gap-2.5 rounded px-2 py-2 text-left text-xs hover:bg-muted"><Icon className="size-4 text-primary" />{label}<ChevronRight className="ml-auto size-3 text-muted-foreground" /></button>)}
  </div>;
}

function Dashboard({ onView, onOpen, approved, onApprove }: { onView: (v: View) => void; onOpen: (i: Invoice) => void; approved: string[]; onApprove: (id: string) => void }) {
  const kpis = [
    ["Total receivables", "AED 1,284,560", "32 open invoices", ArrowDownLeft, "text-primary"],
    ["Overdue 30+ days", "AED 184,320", "8 clients need attention", Clock3, "text-action"],
    ["Collected this month", "AED 468,900", "↑ 12.4% from August", Wallet, "text-success"],
    ["VAT payable", "AED 42,680", "Q3 return · due 28 Oct", CircleDollarSign, "text-primary"],
  ] as const;
  const queue = [
    { id: "PT2026-PO2070", party: "ABB Industries LLC", type: "Purchase order", amount: "48,200.00" },
    { id: "SI-DXB-2026-000124", party: "Nad Al Sheba Residence", type: "Sales invoice", amount: "112,350.00" },
    { id: "PV-DXB-2026-000188", party: "Schneider Gulf FZE", type: "Supplier payment", amount: "67,420.00" },
  ];
  return <div className="space-y-4 animate-enter">
    <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-wide text-primary">Monday, 21 September</p><h2 className="mt-1 text-2xl font-semibold">Finance command centre</h2><p className="mt-1 text-xs text-muted-foreground">Your live overview across sales, purchasing, cash and compliance.</p></div><div className="flex gap-2"><Button variant="outline" onClick={() => onView("Reports")}><Download className="size-4" />Export report</Button><Button onClick={() => onView("Sales")}><Plus className="size-4" />New invoice</Button></div></div>
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map(([label, value, note, Icon, color]) => <div className="glass-panel p-4" key={label}><div className="flex items-center justify-between"><p className="section-label">{label}</p><Icon className={`size-4 ${color}`} /></div><p className="tnum mt-3 font-mono text-xl font-semibold">{value}</p><p className="mt-2 text-[11px] text-muted-foreground">{note}</p></div>)}
    </section>
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
      <section className="glass-panel overflow-hidden xl:col-span-8"><PanelHeader title="Recent documents" meta="All transactions" action="View all" onAction={() => onView("Sales")} /><DocumentTable rows={invoices.slice(0,5)} onOpen={onOpen} /></section>
      <section className="glass-panel overflow-hidden xl:col-span-4"><PanelHeader title="Approval queue" meta={`${queue.length - approved.length} pending`} />
        <div className="divide-y divide-border">{queue.map((item) => <div key={item.id} className="p-4">{approved.includes(item.id) ? <div className="flex h-[70px] items-center justify-center gap-2 text-xs font-semibold text-success"><Check className="size-4" />Approved</div> : <><div className="flex justify-between gap-3"><div><p className="font-mono text-[11px] text-primary">{item.id}</p><p className="mt-1 text-xs font-semibold">{item.party}</p><p className="mt-0.5 text-[10px] text-muted-foreground">{item.type}</p></div><p className="font-mono text-xs font-semibold">AED {item.amount}</p></div><div className="mt-3 flex gap-2"><Button size="sm" onClick={() => onApprove(item.id)}><Check className="size-3.5" />Approve</Button><Button size="sm" variant="outline">Review</Button></div></>}</div>)}</div>
      </section>
    </div>
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="glass-panel p-4"><div className="flex items-center justify-between"><div><p className="section-label">Receivables ageing</p><p className="mt-1 text-xs text-muted-foreground">AED 1,284,560 total outstanding</p></div><Button variant="ghost" size="sm" onClick={() => onView("Reports")}>Open report<ChevronRight className="size-3" /></Button></div><div className="mt-5 flex h-3 overflow-hidden rounded-sm"><div className="w-[48%] bg-primary"/><div className="w-[26%] bg-info"/><div className="w-[16%] bg-warning"/><div className="w-[10%] bg-action"/></div><div className="mt-3 grid grid-cols-4 gap-2">{[["0–30","616,589"],["31–60","333,986"],["61–90","205,530"],["90+","128,455"]].map(([age,value]) => <div key={age}><p className="text-[10px] text-muted-foreground">{age} days</p><p className="tnum mt-1 font-mono text-[11px] font-semibold">{value}</p></div>)}</div></section>
      <section className="glass-panel p-4"><div className="flex items-center justify-between"><div><p className="section-label">Document pipeline</p><p className="mt-1 text-xs text-muted-foreground">Quote to cash · September</p></div><span className="status status-success"><span className="size-1.5 rounded-full bg-current"/>On track</span></div><div className="mt-5 grid grid-cols-4 gap-2">{[["Quotes","18","AED 642k"],["Accepted","11","AED 398k"],["Invoiced","9","AED 312k"],["Collected","7","AED 241k"]].map(([a,b,c],i)=><div className="relative" key={a}><div className="h-1.5 rounded-sm bg-muted"><div className="h-full rounded-sm bg-primary" style={{width:`${100-i*18}%`}}/></div><p className="mt-3 text-[10px] text-muted-foreground">{a}</p><p className="font-mono text-lg font-semibold">{b}</p><p className="text-[10px] text-muted-foreground">{c}</p></div>)}</div></section>
    </div>
  </div>;
}

function PanelHeader({ title, meta, action, onAction }: { title: string; meta?: string; action?: string; onAction?: () => void }) {
  return <div className="flex h-12 items-center border-b border-border px-4"><h3 className="text-xs font-semibold">{title}</h3>{meta && <span className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{meta}</span>}{action && <button onClick={onAction} className="ml-auto text-[11px] font-semibold text-primary hover:underline">{action}</button>}</div>;
}

function DocumentTable({ rows, onOpen }: { rows: Invoice[]; onOpen: (i: Invoice) => void }) {
  return <div className="overflow-x-auto"><table className="data-table"><thead><tr><th>Document</th><th>Party</th><th>Date</th><th>Due date</th><th className="text-right">Amount</th><th className="text-right">Status</th></tr></thead><tbody>{rows.map((row)=><tr key={row.no} onClick={() => onOpen(row)}><td><p className="font-mono text-[11px] font-semibold text-primary">{row.no}</p><p className="mt-0.5 text-[9px] text-muted-foreground">{row.kind}</p></td><td className="font-medium">{row.customer}</td><td className="font-mono text-[11px] text-muted-foreground">{row.date}</td><td className="font-mono text-[11px] text-muted-foreground">{row.due}</td><td className="tnum text-right font-mono font-semibold">{money(row.amount)}</td><td className="text-right"><Status>{row.status}</Status></td></tr>)}</tbody></table>{rows.length === 0 && <div className="p-10 text-center text-xs text-muted-foreground">No documents match this filter.</div>}</div>;
}

function DocumentWorkspace({ title, subtitle, rows, query, setQuery, filter, setFilter, onOpen, onNew }: { title: string; subtitle: string; rows: Invoice[]; query: string; setQuery: (v:string)=>void; filter:string; setFilter:(v:string)=>void; onOpen:(i:Invoice)=>void; onNew:()=>void }) {
  return <div className="space-y-4 animate-enter"><div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-1 text-xs text-muted-foreground">{subtitle}</p></div><Button onClick={onNew}><Plus className="size-4" />New document</Button></div><section className="glass-panel overflow-hidden"><div className="flex flex-wrap gap-2 border-b border-border p-3"><label className="searchbox flex min-w-64 flex-1"><Search className="size-4"/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by document, party or type"/></label><div className="segmented">{["All","Pending Approval","Overdue","Approved"].map((item)=><button key={item} onClick={()=>setFilter(item)} className={filter===item?"active":""}>{item}</button>)}</div><Button variant="outline" size="icon" aria-label="More filters"><MoreHorizontal className="size-4"/></Button></div><DocumentTable rows={rows} onOpen={onOpen}/><div className="flex items-center justify-between border-t border-border px-4 py-3 text-[10px] text-muted-foreground"><span>Showing {rows.length} records</span><span className="font-mono">All amounts in AED</span></div></section></div>;
}

function CustomerWorkspace({ query, setQuery }: { query:string; setQuery:(v:string)=>void }) {
  const rows = customers.filter(c => `${c.name} ${c.code} ${c.contact}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="space-y-4 animate-enter"><div className="flex items-end justify-between"><div><h2 className="text-2xl font-semibold">Customers</h2><p className="mt-1 text-xs text-muted-foreground">Accounts, contacts, credit terms and balances</p></div><Button><Plus className="size-4"/>New customer</Button></div><div className="grid gap-3 sm:grid-cols-3"><Metric label="Active customers" value="128" note="6 added this month"/><Metric label="Total credit limit" value="AED 4.8M" note="36% utilised"/><Metric label="Average collection" value="32 days" note="2 days faster"/></div><section className="glass-panel overflow-hidden"><div className="border-b border-border p-3"><label className="searchbox flex max-w-lg"><Search className="size-4"/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search customers, codes or contacts"/></label></div><div className="overflow-x-auto"><table className="data-table"><thead><tr><th>Customer</th><th>Customer ID</th><th>TRN</th><th>Primary contact</th><th className="text-right">Balance due</th><th className="text-right">Status</th></tr></thead><tbody>{rows.map(c=><tr key={c.code}><td className="font-semibold">{c.name}</td><td className="font-mono text-primary">{c.code}</td><td className="font-mono text-[11px]">{c.trn}</td><td>{c.contact}</td><td className="text-right font-mono font-semibold">{c.balance ? money(c.balance) : "—"}</td><td className="text-right"><Status>{c.status}</Status></td></tr>)}</tbody></table></div></section></div>;
}

function BankingWorkspace(){return <SimpleWorkspace title="Receipts & payments" subtitle="Customer receipts, supplier payments and bank allocations" icon={Wallet} items={[["RC-DXB-2026-000201","Asteria Villas LLC","Receipt · Bank transfer","AED 44,625.00"],["PV-DXB-2026-000188","Schneider Gulf FZE","Payment · Bank transfer","AED 67,420.00"],["RC-DXB-2026-000199","Al Noor Properties","Receipt · Cheque","AED 52,000.00"]]} />}
function JournalWorkspace(){return <SimpleWorkspace title="Journal vouchers" subtitle="Balanced entries, approvals and reversals" icon={BookOpen} items={[["JV-DXB-2026-000034","Depreciation — September","Posted by Fathima A.","AED 18,450.00"],["JV-DXB-2026-000033","Prepaid insurance adjustment","Approved by Mahmoud R.","AED 8,200.00"],["JV-DXB-2026-000032","Inter-branch allocation","Draft · Dubai HQ","AED 24,800.00"]]} />}
function SimpleWorkspace({title,subtitle,icon:Icon,items}:{title:string;subtitle:string;icon:typeof Wallet;items:string[][]}){return <div className="space-y-4 animate-enter"><div className="flex items-end justify-between"><div><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-1 text-xs text-muted-foreground">{subtitle}</p></div><Button><Plus className="size-4"/>New entry</Button></div><section className="glass-panel overflow-hidden"><PanelHeader title="Recent entries" meta={`${items.length} shown"`}/><div className="divide-y divide-border">{items.map(([id,party,note,amount])=><div className="flex items-center gap-3 p-4" key={id}><span className="grid size-9 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="size-4"/></span><div><p className="font-mono text-[11px] font-semibold text-primary">{id}</p><p className="text-xs font-semibold">{party}</p><p className="text-[10px] text-muted-foreground">{note}</p></div><p className="ml-auto font-mono text-xs font-semibold">{amount}</p><Button variant="ghost" size="icon"><ChevronRight className="size-4"/></Button></div>)}</div></section></div>}

function ReportsWorkspace(){const reports=[[Users,"Customer outstanding","Ageing by customer, invoice and salesperson"],[Building2,"Supplier outstanding","Open supplier invoices and due dates"],[CircleDollarSign,"VAT summary","Output VAT, input VAT and net payable"],[BarChart3,"Profit & loss","Income and expenses by period"],[BookOpen,"General ledger","Account activity and journal drill-down"],[ClipboardCheck,"Audit trail","User actions and field-level changes"]] as const;return <div className="space-y-4 animate-enter"><div><h2 className="text-2xl font-semibold">Reports</h2><p className="mt-1 text-xs text-muted-foreground">Financial, outstanding and compliance reporting</p></div><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{reports.map(([Icon,title,desc])=><button key={title} className="glass-panel flex items-start gap-3 p-4 text-left transition hover:border-primary/30 hover:bg-card"><span className="grid size-10 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="size-5"/></span><span><span className="block text-xs font-semibold">{title}</span><span className="mt-1 block text-[11px] leading-5 text-muted-foreground">{desc}</span><span className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-primary">Open report <ChevronRight className="size-3"/></span></span></button>)}</div></div>}
function Metric({label,value,note}:{label:string;value:string;note:string}){return <div className="glass-panel p-4"><p className="section-label">{label}</p><p className="mt-2 font-mono text-xl font-semibold">{value}</p><p className="mt-1 text-[10px] text-muted-foreground">{note}</p></div>}

type Line = { id: number; code: string; desc: string; unit: string; qty: number; price: number };
let lineSeq = 100;
function InvoiceEditor({ invoice, onClose }: { invoice: Invoice | null; onClose: () => void }) {
  const [type, setType] = useState(invoice?.kind ?? "Tax Invoice");
  const [saved, setSaved] = useState(false);
  const [discount, setDiscount] = useState(1000);
  const [customer, setCustomer] = useState(invoice?.customer ?? "Nad Al Sheba Residence");
  const [address, setAddress] = useState("Villa 22, Nad Al Sheba 1, Dubai");
  const [trn, setTrn] = useState("TRN 100512468900003");
  const [notes, setNotes] = useState("Delivery within 4–6 weeks from approved LPO. Warranty: 12 months from delivery.");
  const [scope, setScope] = useState("");
  const [extraNotes, setExtraNotes] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { id: 1, code: "KNX-PS640", desc: "KNX Power Supply 640mA", unit: "NOS", qty: 4, price: 2450 },
    { id: 2, code: "DIN-ACT-12", desc: "12-channel actuator with manual override", unit: "NOS", qty: 8, price: 3150 },
  ]);
  const priced = type !== "Delivery Note";
  const update = (id: number, patch: Partial<Line>) => { setSaved(false); setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l))); };
  const addLine = () => { setSaved(false); setLines((ls) => [...ls, { id: ++lineSeq, code: "", desc: "", unit: "NOS", qty: 1, price: 0 }]); };
  const removeLine = (id: number) => { setSaved(false); setLines((ls) => ls.filter((l) => l.id !== id)); };
  const subtotal = lines.reduce((sum, l) => sum + l.qty * l.price, 0);
  const net = Math.max(subtotal - discount, 0);
  const vat = net * 0.05;
  const num = (v: number) => v.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const docNumber = invoice?.no ?? (type === "Quotation" ? "PT-100112292-R1" : "SI-DXB-2026-000124");
  const handleDownload = async () => {
    setDownloading(true);
    try {
      const { downloadDocumentPdf } = await import("@/lib/document-pdf");
      await downloadDocumentPdf({
        type, number: docNumber, logoUrl: logoAsset.url,
        customer, address, trn,
        docDate: "21 Sep 2026", dueDate: "21 Oct 2026", lpo: "LPO-NSR-2419", terms: "Net 30 days",
        lines, priced, discount, notes,
        ...(type === "Quotation" ? { scope, extraNotes } : {}),
        preparedBy: "Rizvan K",
      });
    } finally { setDownloading(false); }
  };
  return <div className="fixed inset-0 z-[70] bg-overlay/60 p-0 backdrop-blur-sm sm:p-4"><div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden bg-background shadow-modal sm:rounded-lg sm:border sm:border-border">
    <div className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-card px-4"><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close editor"><X className="size-4"/></Button><div><p className="text-xs font-semibold">{invoice ? invoice.no : "New document"}</p><p className="text-[10px] text-muted-foreground">Draft · Dubai branch</p></div><div className="ml-auto flex gap-2"><Button variant="outline" className="hidden sm:inline-flex"><Printer className="size-4"/>Preview</Button><Button variant="outline" onClick={handleDownload} disabled={downloading}><Download className="size-4"/>{downloading?"Preparing…":"PDF"}</Button><Button variant="outline" onClick={()=>setSaved(true)}><Save className="size-4"/>{saved?"Saved":"Save"}</Button><Button><Send className="size-4"/>Submit</Button></div></div>
    <div className="flex-1 overflow-y-auto p-4 sm:p-6"><div className="mx-auto max-w-5xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="section-label">Document editor</p><h2 className="mt-1 text-xl font-semibold">{type}</h2></div><div className="segmented">{["Tax Invoice","Quotation","Purchase Order","Delivery Note"].map(t=><button key={t} className={type===t?"active":""} onClick={()=>setType(t)}>{t}</button>)}</div></div>
      <section className="editor-sheet"><div className="flex flex-wrap items-start justify-between gap-6 border-b border-border p-5"><img src={logoAsset.url} alt="Prismiq Technologies" className="h-16 w-40 object-contain object-left"/><div className="text-right"><h3 className="text-lg font-bold uppercase tracking-wide">{type}</h3><p className="mt-1 font-mono text-xs text-primary">{invoice?.no ?? (type==="Quotation"?"PT-100112292-R1":"SI-DXB-2026-000124")}</p><p className="mt-2 text-[10px] leading-5 text-muted-foreground">TRN 105124689800001<br/>Dubai, United Arab Emirates</p></div></div>
        <div className="grid gap-5 border-b border-border p-5 md:grid-cols-2"><div><p className="section-label">{type==="Purchase Order"?"Vendor / Supplier":"Bill to"}</p><input className="field mt-2 font-semibold" value={customer} onChange={(e)=>setCustomer(e.target.value)}/><input className="field mt-2" value={address} onChange={(e)=>setAddress(e.target.value)}/><input className="field mt-2 font-mono" value={trn} onChange={(e)=>setTrn(e.target.value)}/></div><div className="grid grid-cols-2 gap-3"><Field label="Document date" value="21 Sep 2026"/><Field label="Due date" value="21 Oct 2026"/><Field label="LPO number" value="LPO-NSR-2419"/><Field label="Payment terms" value="Net 30 days"/></div></div>
        <div className="p-5">
          <div className="hidden overflow-x-auto sm:block">
          <table className="data-table editor-table"><thead><tr><th>Product code</th><th>Description</th><th>Unit</th><th className="text-right">Qty</th>{priced&&<><th className="text-right">Unit price</th><th className="text-right">Value</th></>}<th/></tr></thead>
            <tbody>{lines.map((l)=><tr key={l.id}>
              <td><input className="field font-mono text-primary" value={l.code} placeholder="Code" onChange={(e)=>update(l.id,{code:e.target.value})}/></td>
              <td><input className="field" value={l.desc} placeholder="Item description" onChange={(e)=>update(l.id,{desc:e.target.value})}/></td>
              <td><input className="field w-16" value={l.unit} onChange={(e)=>update(l.id,{unit:e.target.value})}/></td>
              <td><input type="number" min={0} step={1} className="field w-20 text-right font-mono" value={l.qty} onChange={(e)=>update(l.id,{qty:Number(e.target.value)||0})}/></td>
              {priced&&<><td><input type="number" min={0} step={0.01} className="field w-28 text-right font-mono" value={l.price} onChange={(e)=>update(l.id,{price:Number(e.target.value)||0})}/></td><td className="text-right font-mono font-semibold">{num(l.qty*l.price)}</td></>}
              <td className="text-right"><Button variant="ghost" size="icon" aria-label="Remove line" onClick={()=>removeLine(l.id)}><X className="size-3.5"/></Button></td>
            </tr>)}
            {lines.length===0&&<tr><td colSpan={priced?7:5} className="py-6 text-center text-[11px] text-muted-foreground">No line items yet. Add your first item below.</td></tr>}</tbody>
          </table>
          </div>
          <div className="space-y-3 sm:hidden">
            {lines.map((l,i)=><div key={l.id} className="rounded-md border border-border p-3">
              <div className="flex items-center justify-between"><p className="section-label">Item {i+1}</p><Button variant="ghost" size="icon" aria-label="Remove line" onClick={()=>removeLine(l.id)}><X className="size-3.5"/></Button></div>
              <input className="field mt-2 font-mono text-primary" value={l.code} placeholder="Product code" onChange={(e)=>update(l.id,{code:e.target.value})}/>
              <input className="field mt-2" value={l.desc} placeholder="Item description" onChange={(e)=>update(l.id,{desc:e.target.value})}/>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <label><span className="section-label">Unit</span><input className="field mt-1" value={l.unit} onChange={(e)=>update(l.id,{unit:e.target.value})}/></label>
                <label><span className="section-label">Qty</span><input type="number" min={0} step={1} inputMode="decimal" className="field mt-1 text-right font-mono" value={l.qty} onChange={(e)=>update(l.id,{qty:Number(e.target.value)||0})}/></label>
                {priced&&<label><span className="section-label">Unit price</span><input type="number" min={0} step={0.01} inputMode="decimal" className="field mt-1 text-right font-mono" value={l.price} onChange={(e)=>update(l.id,{price:Number(e.target.value)||0})}/></label>}
              </div>
              {priced&&<p className="mt-2 text-right font-mono text-xs font-semibold">{num(l.qty*l.price)}</p>}
            </div>)}
            {lines.length===0&&<p className="py-6 text-center text-[11px] text-muted-foreground">No line items yet. Add your first item below.</p>}
          </div>
          <Button variant="outline" size="sm" className="mt-3 w-full sm:w-auto" onClick={addLine}><Plus className="size-3"/>Add line item</Button>
        </div>
        {priced&&<div className="flex justify-end border-t border-border p-5"><div className="w-full max-w-xs space-y-2 text-xs"><div className="flex justify-between"><span className="text-muted-foreground">Total value</span><span className="font-mono">{num(subtotal)}</span></div><div className="flex items-center justify-between gap-3"><span className="text-muted-foreground">Special discount</span><input type="number" min={0} step={0.01} className="field w-28 text-right font-mono" value={discount} onChange={(e)=>setDiscount(Number(e.target.value)||0)}/></div><div className="flex justify-between"><span className="text-muted-foreground">VAT 5%</span><span className="font-mono">{num(vat)}</span></div><div className="flex justify-between border-t border-border pt-3 text-base font-semibold"><span>Net value</span><span className="font-mono">AED {num(net+vat)}</span></div></div></div>}
        <div className="grid gap-4 border-t border-border p-5 md:grid-cols-3"><div><p className="section-label">Notes &amp; terms</p><textarea className="field mt-2 min-h-24 resize-none" value={notes} onChange={(e)=>setNotes(e.target.value)}/></div>{type==="Quotation"&&<div><p className="section-label">Not in our scope</p><textarea className="field mt-2 min-h-24 resize-none" placeholder="e.g. Civil works, painting, and any permits not included in this quotation." value={scope} onChange={(e)=>setScope(e.target.value)}/></div>}{type==="Quotation"&&<div><p className="section-label">Additional notes</p><textarea className="field mt-2 min-h-24 resize-none" placeholder="e.g. Prices valid for 30 days. Subject to site visit confirmation." value={extraNotes} onChange={(e)=>setExtraNotes(e.target.value)}/></div>}<div className="flex items-end justify-between gap-5 md:col-span-3"><div><p className="section-label">Prepared by</p><p className="mt-2 text-xs font-semibold">Rizvan K</p><p className="text-[10px] text-muted-foreground">21 Sep 2026, 12:42 PM</p></div><div className="h-16 w-32 border-b border-border text-center text-[10px] text-muted-foreground">Authorized signature</div></div></div>
      </section>
    </div></div>
  </div></div>;
}
function Field({label,value}:{label:string;value:string}){return <label><span className="section-label">{label}</span><input className="field mt-2" defaultValue={value}/></label>}