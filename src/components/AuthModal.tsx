import { useState, useEffect } from "react";
import {
  X,
  Lock,
  Mail,
  User as UserIcon,
  Building2,
  Phone,
  LogIn,
  UserPlus,
  LogOut,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { authApi, type UserProfile } from "@/lib/auth-api";
import logoAsset from "@/assets/prismiq-logo.png.asset.json";

// User self-registration is disabled. Accounts are managed by Super Admin.
const REGISTRATION_ENABLED = false;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onAuthSuccess: (user: UserProfile) => void;
  onLogout: () => void;
}

export function AuthModal({
  isOpen,
  onClose,
  currentUser,
  onAuthSuccess,
  onLogout,
}: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("Prismiq Technologies LLC");
  const [designation, setDesignation] = useState("Operations Admin");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setError(null);
      setSuccessMsg(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const performLogin = async (loginEmail: string, loginPass: string) => {
    setError(null);
    setLoading(true);
    try {
      const res = await authApi.login({ email: loginEmail, password: loginPass });
      setSuccessMsg(`Welcome, ${res.user.name}!`);
      onAuthSuccess(res.user);
      setTimeout(() => {
        onClose();
        setSuccessMsg(null);
      }, 600);
    } catch (err: any) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await performLogin(email, password);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!REGISTRATION_ENABLED) {
      setError("User self-registration is currently disabled. Please contact your Super Administrator.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await authApi.signup({
        name,
        email,
        password,
        companyName,
        designation,
        phone,
      });
      setSuccessMsg("Account registered successfully in MongoDB Atlas!");
      onAuthSuccess(res.user);
      setTimeout(() => {
        onClose();
        setSuccessMsg(null);
      }, 600);
    } catch (err: any) {
      setError(err.message || "Registration failed. Please check the details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter">
      <div className="relative max-h-[92vh] w-full max-w-md overflow-hidden rounded-xl border border-border bg-popover shadow-modal flex flex-col">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border bg-card/60 px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Prismiq"
              className="h-8 w-24 object-contain brightness-0 invert"
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Identity & Access
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="size-7 rounded-full text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-4">
          {currentUser ? (
            /* Logged in state */
            <div className="space-y-5 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-action/20 text-action">
                <CheckCircle2 className="size-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{currentUser.name}</h3>
                <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-primary">
                  <span>{currentUser.designation || currentUser.role}</span>
                  <span>·</span>
                  <span>{currentUser.companyName || "Prismiq Technologies LLC"}</span>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-3.5 text-left text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Session Status:</span>
                  <span className="font-semibold text-success flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-success" /> Active JWT
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Database:</span>
                  <span className="font-mono text-[11px] text-primary">MongoDB Atlas (Live)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Assigned Role:</span>
                  <span className="font-mono text-[11px] font-semibold uppercase">{currentUser.role}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" onClick={onClose}>
                  Close
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1 gap-1.5"
                  onClick={() => {
                    authApi.logout();
                    onLogout();
                    onClose();
                  }}
                >
                  <LogOut className="size-3.5" />
                  Sign out
                </Button>
              </div>
            </div>
          ) : (
            /* Auth Form (Login / Signup) */
            <div className="space-y-4">
              {/* Tab Selector */}
              <div className="flex rounded-lg border border-border bg-muted/40 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setTab("login");
                    setError(null);
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-xs font-semibold transition ${
                    tab === "login"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <LogIn className="size-3.5" />
                  Sign in
                </button>
                <button
                  type="button"
                  disabled={!REGISTRATION_ENABLED}
                  onClick={() => {
                    if (!REGISTRATION_ENABLED) return;
                    setTab("signup");
                    setError(null);
                  }}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-semibold transition ${
                    tab === "signup"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground/60 cursor-not-allowed opacity-60"
                  }`}
                  title="User self-registration is disabled. Accounts are managed by Super Admin."
                >
                  <UserPlus className="size-3.5" />
                  <span>Create account</span>
                  <span className="rounded bg-muted px-1.5 py-0.2 text-[9px] font-semibold text-muted-foreground uppercase">
                    Disabled
                  </span>
                </button>
              </div>

              {/* Status alerts */}
              {error && (
                <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
                  {error}
                </div>
              )}
              {successMsg && (
                <div className="rounded-md border border-success/30 bg-success/10 p-3 text-xs text-success flex items-center gap-2">
                  <CheckCircle2 className="size-4" />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Login Form */}
              {tab === "login" ? (
                <form onSubmit={handleLogin} className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">
                      Email address
                    </label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@prismiq.ae"
                        className="field pl-9"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">
                      Password
                    </label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="field pl-9"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 font-semibold"
                  >
                    {loading ? "Authenticating…" : "Sign In"}
                  </Button>
                </form>
              ) : (
                /* Signup Form (Disabled) */
                <div className="space-y-4">
                  <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200 flex items-start gap-2.5">
                    <ShieldAlert className="size-4 shrink-0 mt-0.5 text-amber-400" />
                    <div className="space-y-1">
                      <p className="font-semibold text-amber-300">Registration Disabled</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Public registration is disabled. User accounts and roles are provisioned exclusively by the <strong>Super Admin</strong>.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSignup} className="space-y-3">
                    <fieldset disabled={!REGISTRATION_ENABLED} className="space-y-3 opacity-60">
                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground">
                          Full Name
                        </label>
                        <div className="relative mt-1">
                          <UserIcon className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Omar Al Mazrouei"
                            className="field pl-9"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground">
                          Business Email
                        </label>
                        <div className="relative mt-1">
                          <Mail className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@prismiq.ae"
                            className="field pl-9"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground">
                          Password (min 6 characters)
                        </label>
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
                          <label className="text-[11px] font-medium text-muted-foreground">
                            Category / Role
                          </label>
                          <select
                            className="field mt-1 text-xs"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                          >
                            <option value="Super Admin">Super Admin</option>
                            <option value="Operations Admin">Operations Admin</option>
                            <option value="Finance Manager">Finance Manager</option>
                            <option value="Senior Accountant">Senior Accountant</option>
                            <option value="Sales Executive">Sales Executive</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[11px] font-medium text-muted-foreground">
                            Company Name
                          </label>
                          <div className="relative mt-1">
                            <Building2 className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
                            <input
                              type="text"
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                              placeholder="Prismiq LLC"
                              className="field pl-8 text-xs"
                            />
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={true}
                        className="w-full mt-2 font-semibold cursor-not-allowed opacity-60"
                      >
                        Registration Disabled by Admin
                      </Button>
                    </fieldset>
                  </form>

                  <div className="text-center pt-1 border-t border-border/50">
                    <button
                      type="button"
                      onClick={() => setTab("login")}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      &larr; Return to Sign In
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
