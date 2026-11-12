import { useState, useEffect, useMemo } from "react";
import {
  Users,
  UserPlus,
  ShieldAlert,
  Search,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
  Edit2,
  Trash2,
  Lock,
  Mail,
  User as UserIcon,
  Building2,
  Phone,
  X,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usersApi, type SystemUser, type CreateSystemUserPayload, type UpdateSystemUserPayload } from "@/lib/users-api";
import type { UserProfile } from "@/lib/auth-api";

interface UserManagementWorkspaceProps {
  currentUser: UserProfile;
}

const ROLE_OPTIONS = [
  { value: "super_admin", label: "Super Admin", color: "bg-purple-500/15 text-purple-400 border-purple-500/30", defaultDesig: "Super Admin & Director" },
  { value: "admin", label: "Operations Admin", color: "bg-blue-500/15 text-blue-400 border-blue-500/30", defaultDesig: "Operations Administrator" },
  { value: "manager", label: "Finance Manager", color: "bg-amber-500/15 text-amber-400 border-amber-500/30", defaultDesig: "Finance & Branch Manager" },
  { value: "accountant", label: "Senior Accountant", color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", defaultDesig: "Senior Accountant" },
  { value: "sales", label: "Sales Executive", color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30", defaultDesig: "Senior Sales Executive" },
];

export function UserManagementWorkspace({ currentUser }: UserManagementWorkspaceProps) {
  const [users, setUsers] = useState<SystemUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  // Modals state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<SystemUser | null>(null);
  const [deleteConfirmUser, setDeleteConfirmUser] = useState<SystemUser | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await usersApi.getAll();
      setUsers(data);
    } catch (err: any) {
      setFeedbackMsg({ type: "error", text: err.message || "Failed to load users" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const showFeedback = (text: string, type: "success" | "error" = "success") => {
    setFeedbackMsg({ type, text });
    setTimeout(() => setFeedbackMsg(null), 3500);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesQuery = `${u.name} ${u.email} ${u.designation || ""} ${u.role}`.toLowerCase().includes(query.toLowerCase());
      const matchesRole = roleFilter === "All" || u.role === roleFilter;
      return matchesQuery && matchesRole;
    });
  }, [users, query, roleFilter]);

  const stats = useMemo(() => {
    const total = users.length;
    const active = users.filter((u) => u.isActive).length;
    const superAdmins = users.filter((u) => u.role === "super_admin").length;
    const opsStaff = users.filter((u) => u.role === "manager" || u.role === "accountant" || u.role === "sales").length;
    return { total, active, superAdmins, opsStaff };
  }, [users]);

  const handleDelete = async (userToDelete: SystemUser) => {
    try {
      await usersApi.remove(userToDelete._id);
      setUsers((prev) => prev.filter((u) => u._id !== userToDelete._id));
      showFeedback(`User ${userToDelete.name} has been removed.`);
      setDeleteConfirmUser(null);
    } catch (err: any) {
      showFeedback(err.message || "Failed to delete user", "error");
    }
  };

  return (
    <div className="space-y-4 animate-enter">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-purple-400 border border-purple-500/20">
              Super Admin Control
            </span>
          </div>
          <h2 className="mt-1 text-2xl font-semibold">User &amp; Access Management</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Manage system users, access categories, designations and security permissions in MongoDB Atlas.
          </p>
        </div>
        <Button onClick={() => setCreateModalOpen(true)} className="gap-1.5">
          <UserPlus className="size-4" />
          Add new user
        </Button>
      </div>

      {/* Feedback banner */}
      {feedbackMsg && (
        <div
          className={`flex items-center gap-2 rounded-lg border p-3 text-xs ${
            feedbackMsg.type === "success"
              ? "border-success/30 bg-success/10 text-success"
              : "border-destructive/30 bg-destructive/10 text-destructive"
          }`}
        >
          {feedbackMsg.type === "success" ? <CheckCircle2 className="size-4 shrink-0" /> : <ShieldAlert className="size-4 shrink-0" />}
          <span>{feedbackMsg.text}</span>
        </div>
      )}

      {/* KPI Stats */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="glass-panel p-4">
          <p className="section-label">Total System Users</p>
          <p className="mt-2 font-mono text-2xl font-semibold">{stats.total}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Live accounts in Atlas</p>
        </div>
        <div className="glass-panel p-4">
          <p className="section-label">Active Users</p>
          <p className="mt-2 font-mono text-2xl font-semibold text-success">{stats.active}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Authenticated access granted</p>
        </div>
        <div className="glass-panel p-4">
          <p className="section-label">Super Administrators</p>
          <p className="mt-2 font-mono text-2xl font-semibold text-purple-400">{stats.superAdmins}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Full governance access</p>
        </div>
        <div className="glass-panel p-4">
          <p className="section-label">Operational Roles</p>
          <p className="mt-2 font-mono text-2xl font-semibold text-primary">{stats.opsStaff}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Managers, Accountants, Sales</p>
        </div>
      </div>

      {/* Table Section */}
      <section className="glass-panel overflow-hidden">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-3">
          <label className="searchbox flex min-w-64 flex-1">
            <Search className="size-4" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search user name, email, role or designation..."
            />
          </label>
          <div className="segmented">
            {["All", "super_admin", "admin", "manager", "accountant", "sales"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRoleFilter(r)}
                className={roleFilter === r ? "active capitalize" : "capitalize"}
              >
                {r === "All" ? "All Roles" : r.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Access Category</th>
                <th>Designation</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-xs text-muted-foreground">
                    Loading users from MongoDB Atlas...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-xs text-muted-foreground">
                    No users found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => {
                  const roleCfg = ROLE_OPTIONS.find((opt) => opt.value === u.role) || {
                    label: u.role,
                    color: "bg-muted text-foreground border-border",
                  };
                  const isCurrentSelf = currentUser.email === u.email;

                  return (
                    <tr key={u._id}>
                      <td>
                        <div className="flex items-center gap-2.5">
                          <div className="grid size-8 shrink-0 place-items-center rounded-md bg-primary-soft text-primary font-bold text-xs">
                            {u.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-xs flex items-center gap-1.5">
                              {u.name}
                              {isCurrentSelf && (
                                <span className="rounded bg-muted px-1.5 py-0.2 text-[9px] text-muted-foreground">
                                  You
                                </span>
                              )}
                            </p>
                            <p className="text-[11px] text-muted-foreground">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold ${roleCfg.color}`}>
                          {roleCfg.label}
                        </span>
                      </td>
                      <td className="text-xs font-medium">{u.designation || "—"}</td>
                      <td className="text-xs text-muted-foreground">{u.companyName || "Prismiq LLC"}</td>
                      <td className="font-mono text-xs text-muted-foreground">{u.phone || "—"}</td>
                      <td>
                        {u.isActive ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-success">
                            <span className="size-1.5 rounded-full bg-success" /> Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                            <span className="size-1.5 rounded-full bg-muted-foreground" /> Inactive
                          </span>
                        )}
                      </td>
                      <td className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setEditingUser(u)}
                            className="size-7 text-muted-foreground hover:text-primary"
                            title="Edit User & Access"
                          >
                            <Edit2 className="size-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={isCurrentSelf}
                            onClick={() => setDeleteConfirmUser(u)}
                            className={`size-7 text-muted-foreground hover:text-destructive ${
                              isCurrentSelf ? "opacity-30 cursor-not-allowed" : ""
                            }`}
                            title={isCurrentSelf ? "Cannot delete own Super Admin account" : "Remove User"}
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-[10px] text-muted-foreground">
          <span>Total {filteredUsers.length} users</span>
          <span className="font-mono">Super Admin Governance · Live MongoDB Atlas</span>
        </div>
      </section>

      {/* Add User Modal */}
      {createModalOpen && (
        <AddUserModal
          onClose={() => setCreateModalOpen(false)}
          onCreated={(newUser) => {
            setUsers((prev) => [newUser, ...prev]);
            showFeedback(`User ${newUser.name} created successfully!`);
            setCreateModalOpen(false);
          }}
        />
      )}

      {/* Edit User Modal */}
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onUpdated={(updated) => {
            setUsers((prev) => prev.map((u) => (u._id === updated._id ? updated : u)));
            showFeedback(`User ${updated.name} updated successfully!`);
            setEditingUser(null);
          }}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {deleteConfirmUser && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter">
          <div className="w-full max-w-sm rounded-xl border border-border bg-popover p-5 shadow-modal space-y-4">
            <div className="flex items-center gap-3 text-destructive">
              <div className="grid size-10 place-items-center rounded-full bg-destructive/15">
                <Trash2 className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Remove User Account?</h3>
                <p className="text-xs text-muted-foreground">{deleteConfirmUser.name}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-5">
              Are you sure you want to permanently delete <strong className="text-foreground">{deleteConfirmUser.email}</strong>? They will immediately lose all system access.
            </p>
            <div className="flex gap-2 justify-end pt-2">
              <Button variant="outline" size="sm" onClick={() => setDeleteConfirmUser(null)}>
                Cancel
              </Button>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(deleteConfirmUser)}>
                Yes, Delete User
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AddUserModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: (user: SystemUser) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [designation, setDesignation] = useState("Operations Administrator");
  const [companyName, setCompanyName] = useState("Prismiq Technologies LLC");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
    const preset = ROLE_OPTIONS.find((r) => r.value === newRole);
    if (preset) {
      setDesignation(preset.defaultDesig);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const created = await usersApi.create({
        name,
        email,
        password,
        role,
        designation,
        companyName,
        phone,
      });
      onCreated(created);
    } catch (err: any) {
      setError(err.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter">
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-popover shadow-modal">
        <div className="flex items-center justify-between border-b border-border bg-card/60 px-5 py-4">
          <div className="flex items-center gap-2">
            <UserPlus className="size-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Add New System User
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="size-7 rounded-full">
            <X className="size-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          {error && (
            <div className="rounded-md border border-destructive/30 bg-destructive/10 p-2.5 text-xs text-destructive">
              {error}
            </div>
          )}

          <div>
            <label className="text-[11px] font-medium text-muted-foreground">Full Name</label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tariq Mansoor"
                className="field pl-9"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-medium text-muted-foreground">Email Address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tariq@prismiq.ae"
                className="field pl-9"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-medium text-muted-foreground">Temporary Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="field pl-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Access Category</label>
              <select
                className="field mt-1 text-xs"
                value={role}
                onChange={(e) => handleRoleChange(e.target.value)}
              >
                {ROLE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="field mt-1 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Company</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="field mt-1 text-xs"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Phone (optional)</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50..."
                className="field mt-1 text-xs"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="outline" type="button" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Creating..." : "Save User"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function EditUserModal({
  user,
  onClose,
  onUpdated,
}: {
  user: SystemUser;
  onClose: () => void;
  onUpdated: (user: SystemUser) => void;
}) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [designation, setDesignation] = useState(user.designation || "");
  const [companyName, setCompanyName] = useState(user.companyName || "Prismiq Technologies LLC");
  const [phone, setPhone] = useState(user.phone || "");
  const [isActive, setIsActive] = useState(user.isActive);
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const payload: UpdateSystemUserPayload = {
        name,
        email,
        role,
        designation,
        companyName,
        phone,
        isActive,
        ...(newPassword ? { newPassword } : {}),
      };
      const updated = await usersApi.update(user._id, payload);
      onUpdated(updated);
    } catch (err: any) {
      setError(err.message || "Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter">
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-popover shadow-modal">
        <div className="flex items-center justify-between border-b border-border bg-card/60 px-5 py-4">
          <div className="flex items-center gap-2">
            <Edit2 className="size-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Edit User &amp; Access Category
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="size-7 rounded-full">
            <X className="size-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          {error && (
            <div className="rounded-md border border-destructive/30 bg-destructive/10 p-2.5 text-xs text-destructive">
              {error}
            </div>
          )}

          <div>
            <label className="text-[11px] font-medium text-muted-foreground">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field mt-1"
            />
          </div>

          <div>
            <label className="text-[11px] font-medium text-muted-foreground">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Access Category</label>
              <select
                className="field mt-1 text-xs"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {ROLE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="field mt-1 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Company</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="field mt-1 text-xs"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-muted-foreground">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="field mt-1 text-xs"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-medium text-muted-foreground">
              Reset Password (leave empty to keep current)
            </label>
            <input
              type="password"
              minLength={6}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="field mt-1"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="isActiveCheck"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="size-4 rounded border-border"
            />
            <label htmlFor="isActiveCheck" className="text-xs font-medium cursor-pointer">
              Account Active (User can authenticate and log in)
            </label>
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="outline" type="button" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Updating..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

