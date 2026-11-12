import { useState } from "react";
import {
  Lock,
  Mail,
  User as UserIcon,
  Building2,
  Phone,
  LogIn,
  UserPlus,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { authApi, type UserProfile } from "@/lib/auth-api";
import logoAsset from "@/assets/prismiq-logo.png.asset.json";

// User self-registration is disabled. Accounts are managed by Super Admin.
const REGISTRATION_ENABLED = false;

interface LoginPageProps {
  onLoginSuccess: (user: UserProfile) => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
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

  const performLogin = async (loginEmail: string, loginPass: string) => {
    setError(null);
    setLoading(true);
    try {
      const res = await authApi.login({ email: loginEmail, password: loginPass });
      setSuccessMsg(`Welcome, ${res.user.name}! Redirecting to Dashboard...`);
      setTimeout(() => {
        onLoginSuccess(res.user);
      }, 500);
    } catch (err: any) {
      setError(err.message || "Invalid email or password. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await performLogin(email, password);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
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
      setSuccessMsg(`Account created for ${res.user.name}! Redirecting to Dashboard...`);
      setTimeout(() => {
        onLoginSuccess(res.user);
      }, 500);
    } catch (err: any) {
      setError(err.message || "Registration failed. Please check the details entered.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-background text-foreground overflow-x-hidden">
      <div className="ambient" />

      {/* Main Card */}
      <div className="w-full max-w-md animate-enter">
        {/* Brand header */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="flex h-16 w-48 items-center justify-center rounded-xl bg-sidebar/80 p-2 border border-sidebar-border shadow-panel backdrop-blur-md">
            <img
              src={logoAsset.url}
              alt="Prismiq Technologies"
              className="h-10 w-full object-contain brightness-0 invert"
            />
          </div>
          <h1 className="mt-4 text-xl font-bold tracking-tight">Prismiq Finance & CRM</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Dubai HQ · Confidential Accounting & Operations Workspace
          </p>
        </div>

        {/* Auth Box */}
        <div className="rounded-xl border border-border bg-popover shadow-modal p-6">
          {/* Tab Selector */}
          <div className="flex rounded-lg border border-border bg-muted/40 p-1 mb-5">
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
              Sign In
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
              title="User self-registration is disabled. Accounts are provisioned exclusively by Super Admin."
            >
              <UserPlus className="size-3.5" />
              <span>Create Account</span>
              <span className="rounded bg-muted px-1.5 py-0.2 text-[9px] font-semibold text-muted-foreground uppercase">
                Disabled
              </span>
            </button>
          </div>

          {/* Feedback alerts */}
          {error && (
            <div className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
              {error}
            </div>
          )}
          {successMsg && (
            <div className="mb-4 rounded-md border border-success/30 bg-success/10 p-3 text-xs text-success flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Login Form */}
          {tab === "login" ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
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
                {loading ? "Verifying credentials..." : "Sign In to Prismiq CRM"}
              </Button>
            </form>
          ) : (
            /* Signup Form (Disabled) */
            <div className="space-y-4">
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200 flex items-start gap-2.5">
                <ShieldAlert className="size-4 shrink-0 mt-0.5 text-amber-400" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-300">Self-Registration Disabled</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Public account creation is disabled. User accounts and role categories are provisioned exclusively by the <strong>Super Admin</strong> in the User Management workspace.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                <fieldset disabled={!REGISTRATION_ENABLED} className="space-y-3.5 opacity-60">
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
                      Password (min 6 chars)
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
                        Role Category
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
                        Company
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

                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">
                      Phone (optional)
                    </label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50..."
                        className="field pl-8 text-xs"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={true}
                    className="w-full mt-2 font-semibold cursor-not-allowed opacity-60"
                  >
                    Registration Disabled by Administrator
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

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Protected by JWT &amp; MongoDB Atlas · Confidential Enterprise CRM
        </p>
      </div>
    </div>
  );
}
