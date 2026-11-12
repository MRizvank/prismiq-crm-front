import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Download, B as Calendar, C as LogIn, D as FileText, E as Landmark, F as ChevronRight, H as BookOpen, I as ChevronLeft, L as ChevronDown, M as ClipboardCheck, N as CircleDollarSign, O as FileCheckCorner, P as CircleCheck, R as Check, S as LogOut, T as LayoutDashboard, U as Bell, V as Building2, W as ArrowDownLeft, _ as Plus, a as UserPlus, b as Menu, c as ShoppingCart, d as Settings, f as Send, g as Printer, h as Receipt, i as User, j as Clock3, k as Ellipsis, l as ShieldCheck, m as Save, n as Wallet, o as Truck, p as Search, r as Users, s as Trash2, t as X, u as ShieldAlert, v as Phone, w as Lock, x as Mail, y as Pen, z as ChartColumn } from "../_libs/lucide-react.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { P as addDays, S as isValid, l as format } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CTvPYp2R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary-hover",
			accent: "bg-action text-action-foreground hover:bg-action-hover",
			outline: "border border-border bg-card/70 text-foreground hover:bg-muted",
			ghost: "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
		},
		size: {
			default: "h-9 px-3",
			sm: "h-7 px-2.5 text-[11px]",
			icon: "size-9 p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
Button.displayName = "Button";
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers["focused"]) ref.current?.focus();
	}, [modifiers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers["selected"] && !modifiers["range_start"] && !modifiers["range_end"] && !modifiers["range_middle"],
		"data-range-start": modifiers["range_start"],
		"data-range-end": modifiers["range_end"],
		"data-range-middle": modifiers["range_middle"],
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
var prismiq_logo_png_asset_default = {
	version: 1,
	asset_id: "0d88e99c-1096-488d-9c62-74988e4a3782",
	project_id: "a1fa95e7-c1a1-42a9-ab79-a3980a961e3a",
	url: "/prismiq-logo.png",
	r2_key: "a/v1/a1fa95e7-c1a1-42a9-ab79-a3980a961e3a/0d88e99c-1096-488d-9c62-74988e4a3782/prismiq-logo.png",
	original_filename: "prismiq-logo.png",
	size: 39012,
	content_type: "image/png",
	created_at: "2026-09-21T12:31:08Z"
};
var API_BASE$2 = "https://prismq-crm-backend.onrender.com/api";
var TOKEN_KEY = "prismiq_auth_token";
var USER_KEY = "prismiq_auth_user";
var authApi = {
	getToken() {
		if (typeof window === "undefined") return null;
		return localStorage.getItem(TOKEN_KEY);
	},
	setToken(token) {
		if (typeof window !== "undefined") localStorage.setItem(TOKEN_KEY, token);
	},
	removeToken() {
		if (typeof window !== "undefined") {
			localStorage.removeItem(TOKEN_KEY);
			localStorage.removeItem(USER_KEY);
		}
	},
	getStoredUser() {
		if (typeof window === "undefined") return null;
		const userStr = localStorage.getItem(USER_KEY);
		if (!userStr) return null;
		try {
			return JSON.parse(userStr);
		} catch {
			return null;
		}
	},
	setStoredUser(user) {
		if (typeof window !== "undefined") localStorage.setItem(USER_KEY, JSON.stringify(user));
	},
	async signup(payload) {
		const res = await fetch(`${API_BASE$2}/auth/signup`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		const data = await res.json();
		if (!res.ok) throw new Error(Array.isArray(data.message) ? data.message.join(", ") : data.message || "Signup failed");
		if (data.accessToken) {
			this.setToken(data.accessToken);
			this.setStoredUser(data.user);
		}
		return data;
	},
	async login(payload) {
		const res = await fetch(`${API_BASE$2}/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		const data = await res.json();
		if (!res.ok) throw new Error(Array.isArray(data.message) ? data.message.join(", ") : data.message || "Login failed");
		if (data.accessToken) {
			this.setToken(data.accessToken);
			this.setStoredUser(data.user);
		}
		return data;
	},
	async getProfile() {
		const token = this.getToken();
		if (!token) throw new Error("Not authenticated");
		const res = await fetch(`${API_BASE$2}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
		const data = await res.json();
		if (!res.ok) throw new Error(data.message || "Failed to fetch user profile");
		this.setStoredUser(data.user);
		return data.user;
	},
	logout() {
		this.removeToken();
	}
};
function AuthModal({ isOpen, onClose, currentUser, onAuthSuccess, onLogout }) {
	const [tab, setTab] = (0, import_react.useState)("login");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [successMsg, setSuccessMsg] = (0, import_react.useState)(null);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [companyName, setCompanyName] = (0, import_react.useState)("Prismiq Technologies LLC");
	const [designation, setDesignation] = (0, import_react.useState)("Operations Admin");
	const [phone, setPhone] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!isOpen) {
			setError(null);
			setSuccessMsg(null);
		}
	}, [isOpen]);
	if (!isOpen) return null;
	const performLogin = async (loginEmail, loginPass) => {
		setError(null);
		setLoading(true);
		try {
			const res = await authApi.login({
				email: loginEmail,
				password: loginPass
			});
			setSuccessMsg(`Welcome, ${res.user.name}!`);
			onAuthSuccess(res.user);
			setTimeout(() => {
				onClose();
				setSuccessMsg(null);
			}, 600);
		} catch (err) {
			setError(err.message || "Invalid email or password.");
		} finally {
			setLoading(false);
		}
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		await performLogin(email, password);
	};
	const handleSignup = async (e) => {
		e.preventDefault();
		setError("User self-registration is currently disabled. Please contact your Super Administrator.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-h-[92vh] w-full max-w-md overflow-hidden rounded-xl border border-border bg-popover shadow-modal flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between border-b border-border bg-card/60 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: prismiq_logo_png_asset_default.url,
						alt: "Prismiq",
						className: "h-8 w-24 object-contain brightness-0 invert"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Identity & Access"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: onClose,
					className: "size-7 rounded-full text-muted-foreground hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-y-auto p-6 space-y-4",
				children: currentUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex size-14 items-center justify-center rounded-full bg-action/20 text-action",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: currentUser.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: currentUser.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentUser.designation || currentUser.role }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentUser.companyName || "Prismiq Technologies LLC" })
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-background p-3.5 text-left text-xs space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Session Status:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-success flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-success" }), " Active JWT"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Database:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] text-primary",
										children: "MongoDB Atlas (Live)"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Assigned Role:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] font-semibold uppercase",
										children: currentUser.role
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "flex-1",
								onClick: onClose,
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "destructive",
								className: "flex-1 gap-1.5",
								onClick: () => {
									authApi.logout();
									onLogout();
									onClose();
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), "Sign out"]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-lg border border-border bg-muted/40 p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setTab("login");
									setError(null);
								},
								className: `flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-xs font-semibold transition ${tab === "login" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "size-3.5" }), "Sign in"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: true,
								onClick: () => {},
								className: `flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-semibold transition ${tab === "signup" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground/60 cursor-not-allowed opacity-60"}`,
								title: "User self-registration is disabled. Accounts are managed by Super Admin.",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create account" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-muted px-1.5 py-0.2 text-[9px] font-semibold text-muted-foreground uppercase",
										children: "Disabled"
									})
								]
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive",
							children: error
						}),
						successMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-success/30 bg-success/10 p-3 text-xs text-success flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: successMsg })]
						}),
						tab === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleLogin,
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: "Email address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "name@prismiq.ae",
										className: "field pl-9"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										required: true,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: "••••••••",
										className: "field pl-9"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: loading,
									className: "w-full mt-2 font-semibold",
									children: loading ? "Authenticating…" : "Sign In"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200 flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 shrink-0 mt-0.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-amber-300",
											children: "Registration Disabled"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-muted-foreground leading-relaxed",
											children: [
												"Public registration is disabled. User accounts and roles are provisioned exclusively by the ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Super Admin" }),
												"."
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
									onSubmit: handleSignup,
									className: "space-y-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
										disabled: true,
										className: "space-y-3 opacity-60",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: "Full Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: name,
													onChange: (e) => setName(e.target.value),
													placeholder: "e.g. Omar Al Mazrouei",
													className: "field pl-9"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: "Business Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													required: true,
													value: email,
													onChange: (e) => setEmail(e.target.value),
													placeholder: "name@prismiq.ae",
													className: "field pl-9"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: "Password (min 6 characters)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "password",
													required: true,
													minLength: 6,
													value: password,
													onChange: (e) => setPassword(e.target.value),
													placeholder: "••••••••",
													className: "field pl-9"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-medium text-muted-foreground",
													children: "Category / Role"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													className: "field mt-1 text-xs",
													value: designation,
													onChange: (e) => setDesignation(e.target.value),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Super Admin",
															children: "Super Admin"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Operations Admin",
															children: "Operations Admin"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Finance Manager",
															children: "Finance Manager"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Senior Accountant",
															children: "Senior Accountant"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Sales Executive",
															children: "Sales Executive"
														})
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-medium text-muted-foreground",
													children: "Company Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative mt-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "absolute left-3 top-2.5 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: companyName,
														onChange: (e) => setCompanyName(e.target.value),
														placeholder: "Prismiq LLC",
														className: "field pl-8 text-xs"
													})]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "submit",
												disabled: true,
												className: "w-full mt-2 font-semibold cursor-not-allowed opacity-60",
												children: "Registration Disabled by Admin"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center pt-1 border-t border-border/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTab("login"),
										className: "text-xs text-primary hover:underline font-medium",
										children: "← Return to Sign In"
									})
								})
							]
						})
					]
				})
			})]
		})
	});
}
function LoginPage({ onLoginSuccess }) {
	const [tab, setTab] = (0, import_react.useState)("login");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [successMsg, setSuccessMsg] = (0, import_react.useState)(null);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [companyName, setCompanyName] = (0, import_react.useState)("Prismiq Technologies LLC");
	const [designation, setDesignation] = (0, import_react.useState)("Operations Admin");
	const [phone, setPhone] = (0, import_react.useState)("");
	const performLogin = async (loginEmail, loginPass) => {
		setError(null);
		setLoading(true);
		try {
			const res = await authApi.login({
				email: loginEmail,
				password: loginPass
			});
			setSuccessMsg(`Welcome, ${res.user.name}! Redirecting to Dashboard...`);
			setTimeout(() => {
				onLoginSuccess(res.user);
			}, 500);
		} catch (err) {
			setError(err.message || "Invalid email or password. Please check your credentials.");
		} finally {
			setLoading(false);
		}
	};
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		await performLogin(email, password);
	};
	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		setError("User self-registration is currently disabled. Please contact your Super Administrator.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen flex flex-col justify-center items-center p-4 bg-background text-foreground overflow-x-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ambient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md animate-enter",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center mb-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-16 w-48 items-center justify-center rounded-xl bg-sidebar/80 p-2 border border-sidebar-border shadow-panel backdrop-blur-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: prismiq_logo_png_asset_default.url,
								alt: "Prismiq Technologies",
								className: "h-10 w-full object-contain brightness-0 invert"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-xl font-bold tracking-tight",
							children: "Prismiq Finance & CRM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "Dubai HQ · Confidential Accounting & Operations Workspace"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-popover shadow-modal p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-lg border border-border bg-muted/40 p-1 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setTab("login");
									setError(null);
								},
								className: `flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-xs font-semibold transition ${tab === "login" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "size-3.5" }), "Sign In"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: true,
								onClick: () => {},
								className: `flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-semibold transition ${tab === "signup" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground/60 cursor-not-allowed opacity-60"}`,
								title: "User self-registration is disabled. Accounts are provisioned exclusively by Super Admin.",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create Account" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-muted px-1.5 py-0.2 text-[9px] font-semibold text-muted-foreground uppercase",
										children: "Disabled"
									})
								]
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive",
							children: error
						}),
						successMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 rounded-md border border-success/30 bg-success/10 p-3 text-xs text-success flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: successMsg })]
						}),
						tab === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleLoginSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: "Business Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "name@prismiq.ae",
										className: "field pl-9"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										required: true,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: "••••••••",
										className: "field pl-9"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: loading,
									className: "w-full mt-2 font-semibold",
									children: loading ? "Verifying credentials..." : "Sign In to Prismiq CRM"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200 flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 shrink-0 mt-0.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-amber-300",
											children: "Self-Registration Disabled"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-muted-foreground leading-relaxed",
											children: [
												"Public account creation is disabled. User accounts and role categories are provisioned exclusively by the ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Super Admin" }),
												" in the User Management workspace."
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
									onSubmit: handleSignupSubmit,
									className: "space-y-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
										disabled: true,
										className: "space-y-3.5 opacity-60",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: "Full Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: name,
													onChange: (e) => setName(e.target.value),
													placeholder: "e.g. Omar Al Mazrouei",
													className: "field pl-9"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: "Business Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													required: true,
													value: email,
													onChange: (e) => setEmail(e.target.value),
													placeholder: "name@prismiq.ae",
													className: "field pl-9"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: "Password (min 6 chars)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "password",
													required: true,
													minLength: 6,
													value: password,
													onChange: (e) => setPassword(e.target.value),
													placeholder: "••••••••",
													className: "field pl-9"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-medium text-muted-foreground",
													children: "Role Category"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													className: "field mt-1 text-xs",
													value: designation,
													onChange: (e) => setDesignation(e.target.value),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Super Admin",
															children: "Super Admin"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Operations Admin",
															children: "Operations Admin"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Finance Manager",
															children: "Finance Manager"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Senior Accountant",
															children: "Senior Accountant"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "Sales Executive",
															children: "Sales Executive"
														})
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-medium text-muted-foreground",
													children: "Company"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative mt-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "absolute left-3 top-2.5 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: companyName,
														onChange: (e) => setCompanyName(e.target.value),
														placeholder: "Prismiq LLC",
														className: "field pl-8 text-xs"
													})]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[11px] font-medium text-muted-foreground",
												children: "Phone (optional)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "absolute left-3 top-2.5 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: phone,
													onChange: (e) => setPhone(e.target.value),
													placeholder: "+971 50...",
													className: "field pl-8 text-xs"
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "submit",
												disabled: true,
												className: "w-full mt-2 font-semibold cursor-not-allowed opacity-60",
												children: "Registration Disabled by Administrator"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center pt-1 border-t border-border/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTab("login"),
										className: "text-xs text-primary hover:underline font-medium",
										children: "← Return to Sign In"
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-[11px] text-muted-foreground",
					children: "Protected by JWT & MongoDB Atlas · Confidential Enterprise CRM"
				})
			]
		})]
	});
}
var API_BASE$1 = "https://prismq-crm-backend.onrender.com/api";
function getAuthHeaders() {
	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${authApi.getToken() || ""}`
	};
}
var usersApi = {
	async getAll() {
		const res = await fetch(`${API_BASE$1}/users`, { headers: getAuthHeaders() });
		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			throw new Error(err.message || "Failed to fetch users. Super Admin access required.");
		}
		return res.json();
	},
	async getOne(id) {
		const res = await fetch(`${API_BASE$1}/users/${encodeURIComponent(id)}`, { headers: getAuthHeaders() });
		if (!res.ok) throw new Error("User not found");
		return res.json();
	},
	async create(payload) {
		const res = await fetch(`${API_BASE$1}/users`, {
			method: "POST",
			headers: getAuthHeaders(),
			body: JSON.stringify(payload)
		});
		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			throw new Error(Array.isArray(err.message) ? err.message.join(", ") : err.message || "Failed to create user");
		}
		return res.json();
	},
	async update(id, payload) {
		const res = await fetch(`${API_BASE$1}/users/${encodeURIComponent(id)}`, {
			method: "PATCH",
			headers: getAuthHeaders(),
			body: JSON.stringify(payload)
		});
		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			throw new Error(Array.isArray(err.message) ? err.message.join(", ") : err.message || "Failed to update user");
		}
		return res.json();
	},
	async remove(id) {
		const res = await fetch(`${API_BASE$1}/users/${encodeURIComponent(id)}`, {
			method: "DELETE",
			headers: getAuthHeaders()
		});
		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			throw new Error(err.message || "Failed to delete user");
		}
		return res.json();
	}
};
var ROLE_OPTIONS = [
	{
		value: "super_admin",
		label: "Super Admin",
		color: "bg-purple-500/15 text-purple-400 border-purple-500/30",
		defaultDesig: "Super Admin & Director"
	},
	{
		value: "admin",
		label: "Operations Admin",
		color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
		defaultDesig: "Operations Administrator"
	},
	{
		value: "manager",
		label: "Finance Manager",
		color: "bg-amber-500/15 text-amber-400 border-amber-500/30",
		defaultDesig: "Finance & Branch Manager"
	},
	{
		value: "accountant",
		label: "Senior Accountant",
		color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
		defaultDesig: "Senior Accountant"
	},
	{
		value: "sales",
		label: "Sales Executive",
		color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
		defaultDesig: "Senior Sales Executive"
	}
];
function UserManagementWorkspace({ currentUser }) {
	const [users, setUsers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [query, setQuery] = (0, import_react.useState)("");
	const [roleFilter, setRoleFilter] = (0, import_react.useState)("All");
	const [createModalOpen, setCreateModalOpen] = (0, import_react.useState)(false);
	const [editingUser, setEditingUser] = (0, import_react.useState)(null);
	const [deleteConfirmUser, setDeleteConfirmUser] = (0, import_react.useState)(null);
	const [feedbackMsg, setFeedbackMsg] = (0, import_react.useState)(null);
	const loadUsers = async () => {
		setLoading(true);
		try {
			const data = await usersApi.getAll();
			setUsers(data);
		} catch (err) {
			setFeedbackMsg({
				type: "error",
				text: err.message || "Failed to load users"
			});
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadUsers();
	}, []);
	const showFeedback = (text, type = "success") => {
		setFeedbackMsg({
			type,
			text
		});
		setTimeout(() => setFeedbackMsg(null), 3500);
	};
	const filteredUsers = (0, import_react.useMemo)(() => {
		return users.filter((u) => {
			const matchesQuery = `${u.name} ${u.email} ${u.designation || ""} ${u.role}`.toLowerCase().includes(query.toLowerCase());
			const matchesRole = roleFilter === "All" || u.role === roleFilter;
			return matchesQuery && matchesRole;
		});
	}, [
		users,
		query,
		roleFilter
	]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			total: users.length,
			active: users.filter((u) => u.isActive).length,
			superAdmins: users.filter((u) => u.role === "super_admin").length,
			opsStaff: users.filter((u) => u.role === "manager" || u.role === "accountant" || u.role === "sales").length
		};
	}, [users]);
	const handleDelete = async (userToDelete) => {
		try {
			await usersApi.remove(userToDelete._id);
			setUsers((prev) => prev.filter((u) => u._id !== userToDelete._id));
			showFeedback(`User ${userToDelete.name} has been removed.`);
			setDeleteConfirmUser(null);
		} catch (err) {
			showFeedback(err.message || "Failed to delete user", "error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 animate-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-purple-400 border border-purple-500/20",
							children: "Super Admin Control"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-semibold",
						children: "User & Access Management"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Manage system users, access categories, designations and security permissions in MongoDB Atlas."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateModalOpen(true),
					className: "gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4" }), "Add new user"]
				})]
			}),
			feedbackMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center gap-2 rounded-lg border p-3 text-xs ${feedbackMsg.type === "success" ? "border-success/30 bg-success/10 text-success" : "border-destructive/30 bg-destructive/10 text-destructive"}`,
				children: [feedbackMsg.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feedbackMsg.text })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Total System Users"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-2xl font-semibold",
								children: stats.total
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] text-muted-foreground",
								children: "Live accounts in Atlas"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Active Users"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-2xl font-semibold text-success",
								children: stats.active
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] text-muted-foreground",
								children: "Authenticated access granted"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Super Administrators"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-2xl font-semibold text-purple-400",
								children: stats.superAdmins
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] text-muted-foreground",
								children: "Full governance access"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Operational Roles"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-2xl font-semibold text-primary",
								children: stats.opsStaff
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] text-muted-foreground",
								children: "Managers, Accountants, Sales"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass-panel overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "searchbox flex min-w-64 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search user name, email, role or designation..."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "segmented",
							children: [
								"All",
								"super_admin",
								"admin",
								"manager",
								"accountant",
								"sales"
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setRoleFilter(r),
								className: roleFilter === r ? "active capitalize" : "capitalize",
								children: r === "All" ? "All Roles" : r.replace("_", " ")
							}, r))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "data-table",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "User" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Access Category" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Designation" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Company" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Phone" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-right",
									children: "Actions"
								})
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 7,
								className: "py-8 text-center text-xs text-muted-foreground",
								children: "Loading users from MongoDB Atlas..."
							}) }) : filteredUsers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 7,
								className: "py-8 text-center text-xs text-muted-foreground",
								children: "No users found matching your criteria."
							}) }) : filteredUsers.map((u) => {
								const roleCfg = ROLE_OPTIONS.find((opt) => opt.value === u.role) || {
									label: u.role,
									color: "bg-muted text-foreground border-border"
								};
								const isCurrentSelf = currentUser.email === u.email;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-8 shrink-0 place-items-center rounded-md bg-primary-soft text-primary font-bold text-xs",
											children: u.name.slice(0, 2).toUpperCase()
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-semibold text-xs flex items-center gap-1.5",
											children: [u.name, isCurrentSelf && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-muted px-1.5 py-0.2 text-[9px] text-muted-foreground",
												children: "You"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: u.email
										})] })]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold ${roleCfg.color}`,
										children: roleCfg.label
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-xs font-medium",
										children: u.designation || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-xs text-muted-foreground",
										children: u.companyName || "Prismiq LLC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "font-mono text-xs text-muted-foreground",
										children: u.phone || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: u.isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-[11px] font-semibold text-success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-success" }), " Active"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-muted-foreground" }), " Inactive"]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												onClick: () => setEditingUser(u),
												className: "size-7 text-muted-foreground hover:text-primary",
												title: "Edit User & Access",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "size-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												disabled: isCurrentSelf,
												onClick: () => setDeleteConfirmUser(u),
												className: `size-7 text-muted-foreground hover:text-destructive ${isCurrentSelf ? "opacity-30 cursor-not-allowed" : ""}`,
												title: isCurrentSelf ? "Cannot delete own Super Admin account" : "Remove User",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
											})]
										})
									})
								] }, u._id);
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-border px-4 py-3 text-[10px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Total ",
							filteredUsers.length,
							" users"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: "Super Admin Governance · Live MongoDB Atlas"
						})]
					})
				]
			}),
			createModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddUserModal, {
				onClose: () => setCreateModalOpen(false),
				onCreated: (newUser) => {
					setUsers((prev) => [newUser, ...prev]);
					showFeedback(`User ${newUser.name} created successfully!`);
					setCreateModalOpen(false);
				}
			}),
			editingUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditUserModal, {
				user: editingUser,
				onClose: () => setEditingUser(null),
				onUpdated: (updated) => {
					setUsers((prev) => prev.map((u) => u._id === updated._id ? updated : u));
					showFeedback(`User ${updated.name} updated successfully!`);
					setEditingUser(null);
				}
			}),
			deleteConfirmUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[110] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-xl border border-border bg-popover p-5 shadow-modal space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-10 place-items-center rounded-full bg-destructive/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-sm text-foreground",
								children: "Remove User Account?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: deleteConfirmUser.name
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground leading-5",
							children: [
								"Are you sure you want to permanently delete ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: deleteConfirmUser.email
								}),
								"? They will immediately lose all system access."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 justify-end pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setDeleteConfirmUser(null),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "destructive",
								size: "sm",
								onClick: () => handleDelete(deleteConfirmUser),
								children: "Yes, Delete User"
							})]
						})
					]
				})
			})
		]
	});
}
function AddUserModal({ onClose, onCreated }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("admin");
	const [designation, setDesignation] = (0, import_react.useState)("Operations Administrator");
	const [companyName, setCompanyName] = (0, import_react.useState)("Prismiq Technologies LLC");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const handleRoleChange = (newRole) => {
		setRole(newRole);
		const preset = ROLE_OPTIONS.find((r) => r.value === newRole);
		if (preset) setDesignation(preset.defaultDesig);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);
		try {
			onCreated(await usersApi.create({
				name,
				email,
				password,
				role,
				designation,
				companyName,
				phone
			}));
		} catch (err) {
			setError(err.message || "Failed to create user");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-popover shadow-modal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border bg-card/60 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Add New System User"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: onClose,
					className: "size-7 rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "p-5 space-y-3.5",
				children: [
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md border border-destructive/30 bg-destructive/10 p-2.5 text-xs text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: "Full Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "e.g. Tariq Mansoor",
							className: "field pl-9"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: "Email Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "tariq@prismiq.ae",
							className: "field pl-9"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: "Temporary Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							minLength: 6,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "••••••••",
							className: "field pl-9"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Access Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field mt-1 text-xs",
							value: role,
							onChange: (e) => handleRoleChange(e.target.value),
							children: ROLE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: opt.value,
								children: opt.label
							}, opt.value))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Designation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: designation,
							onChange: (e) => setDesignation(e.target.value),
							className: "field mt-1 text-xs"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: companyName,
							onChange: (e) => setCompanyName(e.target.value),
							className: "field mt-1 text-xs"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Phone (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: "+971 50...",
							className: "field mt-1 text-xs"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							type: "button",
							className: "flex-1",
							onClick: onClose,
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: loading,
							className: "flex-1",
							children: loading ? "Creating..." : "Save User"
						})]
					})
				]
			})]
		})
	});
}
function EditUserModal({ user, onClose, onUpdated }) {
	const [name, setName] = (0, import_react.useState)(user.name);
	const [email, setEmail] = (0, import_react.useState)(user.email);
	const [role, setRole] = (0, import_react.useState)(user.role);
	const [designation, setDesignation] = (0, import_react.useState)(user.designation || "");
	const [companyName, setCompanyName] = (0, import_react.useState)(user.companyName || "Prismiq Technologies LLC");
	const [phone, setPhone] = (0, import_react.useState)(user.phone || "");
	const [isActive, setIsActive] = (0, import_react.useState)(user.isActive);
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);
		try {
			const payload = {
				name,
				email,
				role,
				designation,
				companyName,
				phone,
				isActive,
				...newPassword ? { newPassword } : {}
			};
			onUpdated(await usersApi.update(user._id, payload));
		} catch (err) {
			setError(err.message || "Failed to update user");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-overlay/70 p-4 backdrop-blur-sm animate-enter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-popover shadow-modal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border bg-card/60 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Edit User & Access Category"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: onClose,
					className: "size-7 rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "p-5 space-y-3.5",
				children: [
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md border border-destructive/30 bg-destructive/10 p-2.5 text-xs text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: "Full Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "field mt-1"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: "Email Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "field mt-1"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Access Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field mt-1 text-xs",
							value: role,
							onChange: (e) => setRole(e.target.value),
							children: ROLE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: opt.value,
								children: opt.label
							}, opt.value))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Designation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: designation,
							onChange: (e) => setDesignation(e.target.value),
							className: "field mt-1 text-xs"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: companyName,
							onChange: (e) => setCompanyName(e.target.value),
							className: "field mt-1 text-xs"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							className: "field mt-1 text-xs"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: "Reset Password (leave empty to keep current)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						minLength: 6,
						value: newPassword,
						onChange: (e) => setNewPassword(e.target.value),
						placeholder: "••••••••",
						className: "field mt-1"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							id: "isActiveCheck",
							checked: isActive,
							onChange: (e) => setIsActive(e.target.checked),
							className: "size-4 rounded border-border"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "isActiveCheck",
							className: "text-xs font-medium cursor-pointer",
							children: "Account Active (User can authenticate and log in)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							type: "button",
							className: "flex-1",
							onClick: onClose,
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: loading,
							className: "flex-1",
							children: loading ? "Updating..." : "Save Changes"
						})]
					})
				]
			})]
		})
	});
}
var API_BASE = "https://prismq-crm-backend.onrender.com/api";
var invoicesApi = {
	async getAll(params) {
		const url = new URL(`${API_BASE}/invoices`);
		if (params?.kind && params.kind !== "All") url.searchParams.append("kind", params.kind);
		if (params?.status && params.status !== "All") url.searchParams.append("status", params.status);
		if (params?.search) url.searchParams.append("search", params.search);
		const res = await fetch(url.toString());
		if (!res.ok) throw new Error("Failed to fetch documents from database");
		return res.json();
	},
	async getOne(idOrNo) {
		const res = await fetch(`${API_BASE}/invoices/${encodeURIComponent(idOrNo)}`);
		if (!res.ok) throw new Error("Document not found");
		return res.json();
	},
	async create(invoice) {
		const res = await fetch(`${API_BASE}/invoices`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(invoice)
		});
		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			throw new Error(err.message || "Failed to save document");
		}
		return res.json();
	},
	async update(idOrNo, patch) {
		const res = await fetch(`${API_BASE}/invoices/${encodeURIComponent(idOrNo)}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(patch)
		});
		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			throw new Error(err.message || "Failed to update document");
		}
		return res.json();
	},
	async approve(idOrNo) {
		return this.update(idOrNo, { status: "Approved" });
	},
	async remove(idOrNo) {
		const res = await fetch(`${API_BASE}/invoices/${encodeURIComponent(idOrNo)}`, { method: "DELETE" });
		if (!res.ok) throw new Error("Failed to delete document");
		return res.json();
	}
};
var defaultInvoices = [
	{
		no: "SI-DXB-2026-000123",
		customer: "Asteria Villas LLC",
		date: "18 Sep 2026",
		due: "18 Oct 2026",
		amount: 89250,
		subtotal: 86e3,
		discount: 1e3,
		vat: 4250,
		status: "Sent",
		kind: "Tax Invoice",
		address: "Villa 14, Palm Jumeirah, Dubai",
		trn: "100512468900003",
		terms: "Net 30 days",
		preparedBy: "Rizvan K",
		lines: [
			{
				id: 1,
				code: "KNX-PS640",
				desc: "KNX Power Supply 640mA",
				unit: "NOS",
				qty: 4,
				price: 2450
			},
			{
				id: 2,
				code: "DIN-ACT-12",
				desc: "12-channel actuator with manual override",
				unit: "NOS",
				qty: 8,
				price: 3150
			},
			{
				id: 3,
				code: "SEN-OCC-360",
				desc: "Ceiling 360 Presence Detector",
				unit: "NOS",
				qty: 25,
				price: 2040
			}
		]
	},
	{
		no: "SI-DXB-2026-000122",
		customer: "Al Noor Properties",
		date: "16 Sep 2026",
		due: "16 Oct 2026",
		amount: 126840,
		subtotal: 121800,
		discount: 1e3,
		vat: 6040,
		status: "Partially Paid",
		kind: "Tax Invoice",
		address: "Tower B, Business Bay, Dubai",
		trn: "100426810700003",
		terms: "Net 30 days",
		preparedBy: "Fathima A.",
		lines: [{
			id: 1,
			code: "DALI-GW-2CH",
			desc: "DALI Gateway Plus Dual Channel",
			unit: "NOS",
			qty: 12,
			price: 4200
		}, {
			id: 2,
			code: "TOUCH-10-IP",
			desc: "10-inch Smart IP Touch Panel",
			unit: "NOS",
			qty: 6,
			price: 12740
		}]
	},
	{
		no: "PT-100112291-R1",
		customer: "Maison Eight Interiors",
		date: "15 Sep 2026",
		due: "22 Sep 2026",
		amount: 244650,
		subtotal: 235e3,
		discount: 2e3,
		vat: 11650,
		status: "Accepted",
		kind: "Quotation",
		address: "Al Quoz Industrial 3, Dubai",
		trn: "100317422000003",
		terms: "50% advance, balance on delivery",
		notes: "Prices valid for 30 days. Subject to site visit confirmation.",
		scope: "Civil works, painting, and external cabling are not included.",
		preparedBy: "Yousef Nasser",
		lines: [{
			id: 1,
			code: "ARCH-LUX-PKG",
			desc: "Architectural Lighting Automation Suite",
			unit: "LOT",
			qty: 1,
			price: 18e4
		}, {
			id: 2,
			code: "SRV-COMM-ENG",
			desc: "On-site Commissioning & Programming",
			unit: "DAYS",
			qty: 10,
			price: 5500
		}]
	},
	{
		no: "PT2026-PO2070",
		customer: "ABB Industries LLC",
		date: "12 Sep 2026",
		due: "—",
		amount: 48200,
		subtotal: 46e3,
		discount: 100,
		vat: 2300,
		status: "Pending Approval",
		kind: "Purchase Order",
		address: "Jebel Ali Free Zone, Dubai",
		trn: "100192837400003",
		terms: "Net 45 days",
		notes: "Supply as per standard OEM warranty terms.",
		preparedBy: "Mahmoud R.",
		lines: [{
			id: 1,
			code: "ABB-M-BUS",
			desc: "ABB M-Bus Level Converter",
			unit: "NOS",
			qty: 5,
			price: 3800
		}, {
			id: 2,
			code: "ABB-PWR-SUP",
			desc: "Regulated Auxiliary DC Supply 30V",
			unit: "NOS",
			qty: 10,
			price: 2700
		}]
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
		lines: [{
			id: 1,
			code: "VALVE-CTRL-01",
			desc: "FCU Modbus Actuating Valves 24V",
			unit: "NOS",
			qty: 20,
			price: 1781
		}]
	},
	{
		no: "SI-DXB-2026-000118",
		customer: "Horizon Hospitality",
		date: "04 Aug 2026",
		due: "03 Sep 2026",
		amount: 35620,
		subtotal: 34e3,
		discount: 0,
		vat: 1620,
		status: "Overdue",
		kind: "Tax Invoice",
		address: "Downtown Dubai Boulevard",
		trn: "100298744100003",
		terms: "Net 30 days",
		preparedBy: "Rizvan K",
		lines: [{
			id: 1,
			code: "VALVE-CTRL-01",
			desc: "FCU Modbus Actuating Valves 24V",
			unit: "NOS",
			qty: 20,
			price: 1700
		}]
	}
];
var baseCustomers = [
	{
		code: "PTC-1048",
		name: "Asteria Villas LLC",
		trn: "100512468900003",
		contact: "Omar Al Mazrouei",
		balance: 89250,
		status: "Active"
	},
	{
		code: "PTC-1041",
		name: "Al Noor Properties",
		trn: "100426810700003",
		contact: "Sarah Khan",
		balance: 74840,
		status: "Active"
	},
	{
		code: "PTC-1035",
		name: "Maison Eight Interiors",
		trn: "100317422000003",
		contact: "Leila George",
		balance: 0,
		status: "Active"
	},
	{
		code: "PTC-1027",
		name: "Horizon Hospitality",
		trn: "100298744100003",
		contact: "Yousef Nasser",
		balance: 35620,
		status: "On hold"
	}
];
var modules = [
	{
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		label: "Sales",
		icon: FileText
	},
	{
		label: "Purchases",
		icon: ShoppingCart
	},
	{
		label: "Banking",
		icon: Landmark
	},
	{
		label: "Journal",
		icon: BookOpen
	},
	{
		label: "Customers",
		icon: Users
	},
	{
		label: "Reports",
		icon: ChartColumn
	}
];
var statusStyle = {
	Sent: "status-blue",
	"Partially Paid": "status-neutral",
	Accepted: "status-success",
	Approved: "status-success",
	"Pending Approval": "status-warn",
	Overdue: "status-danger",
	Active: "status-success",
	"On hold": "status-warn"
};
function money(value) {
	return new Intl.NumberFormat("en-AE", { minimumFractionDigits: 2 }).format(value || 0);
}
function Status({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `status ${statusStyle[children] ?? "status-neutral"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-current" }), children]
	});
}
function AccountingApp() {
	const [view, setView] = (0, import_react.useState)("Dashboard");
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [editorOpen, setEditorOpen] = (0, import_react.useState)(false);
	const [authModalOpen, setAuthModalOpen] = (0, import_react.useState)(false);
	const [user, setUser] = (0, import_react.useState)(() => authApi.getStoredUser());
	const [invoices, setInvoices] = (0, import_react.useState)(defaultInvoices);
	const [selectedInvoice, setSelectedInvoice] = (0, import_react.useState)(null);
	const [initialEditorKind, setInitialEditorKind] = (0, import_react.useState)("Tax Invoice");
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [salesCategory, setSalesCategory] = (0, import_react.useState)("All Sales");
	const [purchaseCategory, setPurchaseCategory] = (0, import_react.useState)("All Purchases");
	const [approved, setApproved] = (0, import_react.useState)([]);
	const isSuperAdmin = user?.role === "super_admin";
	(0, import_react.useEffect)(() => {
		if (view === "UserManagement" && !isSuperAdmin) setView("Dashboard");
	}, [view, isSuperAdmin]);
	(0, import_react.useEffect)(() => {
		if (authApi.getToken()) authApi.getProfile().then((profile) => setUser(profile)).catch(() => {
			authApi.logout();
			setUser(null);
		});
		invoicesApi.getAll().then((data) => {
			if (Array.isArray(data) && data.length > 0) setInvoices(data);
		}).catch((err) => {
			console.warn("Could not connect to MongoDB Atlas for invoices, using default items:", err);
		});
	}, []);
	const handleLogout = () => {
		authApi.logout();
		setUser(null);
		setAuthModalOpen(false);
	};
	const initials = (0, import_react.useMemo)(() => {
		if (!user?.name) return "PK";
		return user.name.split(" ").filter(Boolean).map((n) => n[0]).join("").toUpperCase().slice(0, 2);
	}, [user]);
	const visibleInvoices = (0, import_react.useMemo)(() => invoices.filter((invoice) => {
		const matchesQuery = `${invoice.no} ${invoice.customer} ${invoice.kind}`.toLowerCase().includes(query.toLowerCase());
		const matchesFilter = filter === "All" || invoice.status === filter;
		return matchesQuery && matchesFilter;
	}), [
		invoices,
		query,
		filter
	]);
	const salesRows = (0, import_react.useMemo)(() => {
		return visibleInvoices.filter((r) => {
			if (!!r.kind.startsWith("Purchase")) return false;
			if (salesCategory === "Tax Invoices") return r.kind === "Tax Invoice";
			if (salesCategory === "Quotations") return r.kind === "Quotation";
			if (salesCategory === "Delivery Notes") return r.kind === "Delivery Note";
			return true;
		});
	}, [visibleInvoices, salesCategory]);
	const purchaseRows = (0, import_react.useMemo)(() => {
		return visibleInvoices.filter((r) => {
			if (!r.kind.startsWith("Purchase")) return false;
			if (purchaseCategory === "Purchase Orders") return r.kind === "Purchase Order";
			return true;
		});
	}, [visibleInvoices, purchaseCategory]);
	const openDocument = (invoice) => {
		setSelectedInvoice(invoice);
		setInitialEditorKind(invoice.kind);
		setEditorOpen(true);
	};
	const handleOpenCreateKind = (kind) => {
		setSelectedInvoice(null);
		setInitialEditorKind(kind);
		setCreateOpen(false);
		setEditorOpen(true);
	};
	const handleSaveInvoice = (savedDoc) => {
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
	const handleApproveDocument = async (id) => {
		try {
			await invoicesApi.approve(id);
		} catch (e) {
			console.warn("Could not sync approval to backend:", e);
		}
		setApproved((items) => [...items, id]);
		setInvoices((prev) => prev.map((inv) => inv.no === id || inv._id === id ? {
			...inv,
			status: "Approved"
		} : inv));
	};
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginPage, { onLoginSuccess: (loggedInUser) => setUser(loggedInUser) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ambient" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `sidebar ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 items-center justify-center border-b border-sidebar-border px-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: prismiq_logo_png_asset_default.url,
							alt: "Prismiq Technologies",
							className: "h-14 w-full object-contain brightness-0 invert"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-1 flex-col gap-1 px-2.5 py-4",
						"aria-label": "Main navigation",
						children: [modules.map(({ label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							title: label,
							onClick: () => {
								setView(label);
								setMobileOpen(false);
							},
							className: `nav-item ${view === label ? "nav-active" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[18px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
						}, label)), isSuperAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 mt-2 border-t border-sidebar-border/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2 pb-1 text-[10px] font-semibold tracking-wider text-purple-400 uppercase",
								children: "Super Admin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								title: "User Management (Super Admin Exclusive)",
								onClick: () => {
									setView("UserManagement");
									setMobileOpen(false);
								},
								className: `nav-item w-full ${view === "UserManagement" ? "nav-active !text-purple-300 !border-purple-500/40" : "text-purple-300/80 hover:text-purple-200 hover:bg-purple-500/10"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-[18px] text-purple-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 text-left",
										children: "User Management"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-purple-500/20 px-1 py-0.5 text-[9px] font-bold text-purple-300 uppercase",
										children: "Only"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "nav-item mx-2.5 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-[18px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Settings" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-sidebar-border p-3 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setAuthModalOpen(true),
							className: "flex w-full items-center gap-2 rounded-md p-1.5 text-left text-sidebar-foreground transition hover:bg-sidebar-accent",
							title: "User Profile & Roles",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-8 shrink-0 place-items-center rounded-md bg-action text-action-foreground text-[11px] font-bold",
								children: initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[11px] font-semibold",
									children: user.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[9px] text-sidebar-muted",
									children: user.designation || user.role
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleLogout,
							className: "flex w-full items-center justify-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent/20 py-1.5 text-xs font-medium text-sidebar-foreground hover:bg-destructive/15 hover:text-destructive hover:border-destructive/30 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sign out" })]
						})]
					})
				]
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Close navigation",
				className: "fixed inset-0 z-30 bg-overlay lg:hidden",
				onClick: () => setMobileOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-[190px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "topbar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setMobileOpen(true),
							"aria-label": "Open navigation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-sm font-semibold",
							children: view === "UserManagement" ? "User Management & Access Control" : view
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-[10px] text-muted-foreground sm:block",
							children: view === "UserManagement" ? "Super Admin Governance · Prismiq Technologies LLC" : "Prismiq Technologies LLC · Dubai HQ · FY 2026"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "searchbox ml-auto hidden md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "Search invoices, customers, refs…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "⌘K" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Notifications",
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 size-1.5 rounded-full bg-action" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: handleLogout,
							className: "gap-1.5 text-xs text-muted-foreground hover:text-destructive",
							title: "Sign out of CRM",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Logout"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => setCreateOpen((value) => !value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }),
									"New",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })
								]
							}), createOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateMenu, { onCreateKind: handleOpenCreateKind })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "p-4 sm:p-6",
					children: [
						view === "Dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {
							onView: setView,
							onOpen: openDocument,
							invoices,
							approved,
							onApprove: handleApproveDocument
						}),
						view === "Sales" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentWorkspace, {
							title: "Sales documents",
							subtitle: "Quotations, tax invoices, and delivery notes saved in MongoDB Atlas",
							rows: salesRows,
							query,
							setQuery,
							filter,
							setFilter,
							categories: [
								"All Sales",
								"Tax Invoices",
								"Quotations",
								"Delivery Notes"
							],
							activeCategory: salesCategory,
							onSelectCategory: setSalesCategory,
							onOpen: openDocument,
							onNew: () => handleOpenCreateKind("Tax Invoice")
						}),
						view === "Purchases" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentWorkspace, {
							title: "Purchase documents",
							subtitle: "Purchase orders and supplier invoices saved in MongoDB Atlas",
							rows: purchaseRows,
							query,
							setQuery,
							filter,
							setFilter,
							categories: ["All Purchases", "Purchase Orders"],
							activeCategory: purchaseCategory,
							onSelectCategory: setPurchaseCategory,
							onOpen: openDocument,
							onNew: () => handleOpenCreateKind("Purchase Order")
						}),
						view === "Customers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerWorkspace, {
							invoices,
							query,
							setQuery
						}),
						view === "Banking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankingWorkspace, { invoices }),
						view === "Journal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JournalWorkspace, { invoices }),
						view === "Reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsWorkspace, { invoices }),
						view === "UserManagement" && isSuperAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserManagementWorkspace, { currentUser: user })
					]
				})]
			}),
			editorOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceEditor, {
				invoice: selectedInvoice,
				initialKind: initialEditorKind,
				user,
				onClose: () => setEditorOpen(false),
				onSave: handleSaveInvoice
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthModal, {
				isOpen: authModalOpen,
				onClose: () => setAuthModalOpen(false),
				currentUser: user,
				onAuthSuccess: (u) => setUser(u),
				onLogout: () => setUser(null)
			})
		]
	});
}
function CreateMenu({ onCreateKind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute right-0 top-11 z-50 w-56 rounded-md border border-border bg-popover p-1.5 shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-2 py-1.5 text-[10px] font-semibold uppercase text-muted-foreground",
			children: "Create document"
		}), [
			[
				FileText,
				"Tax Invoice",
				"Tax invoice"
			],
			[
				FileCheckCorner,
				"Quotation",
				"Sales quotation"
			],
			[
				Truck,
				"Delivery Note",
				"Delivery note"
			],
			[
				ShoppingCart,
				"Purchase Order",
				"Purchase order"
			],
			[
				Receipt,
				"Tax Invoice",
				"Receipt / payment"
			],
			[
				BookOpen,
				"Tax Invoice",
				"Journal voucher"
			]
		].map(([Icon, kind, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onCreateKind(kind),
			className: "flex w-full items-center gap-2.5 rounded px-2 py-2 text-left text-xs hover:bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary" }),
				label,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto size-3 text-muted-foreground" })
			]
		}, label))]
	});
}
function Dashboard({ onView, onOpen, invoices, approved, onApprove }) {
	const totalReceivables = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.kind === "Tax Invoice" && i.status !== "Paid").reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
	}, [invoices]);
	const overdueTotal = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.status === "Overdue").reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
	}, [invoices]);
	const overdueCount = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.status === "Overdue").length;
	}, [invoices]);
	const collectedTotal = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.status === "Partially Paid" || i.status === "Accepted" || i.status === "Approved").reduce((sum, i) => sum + Number(i.amount) * (i.status === "Partially Paid" ? .5 : 1), 0);
	}, [invoices]);
	const vatPayable = (0, import_react.useMemo)(() => {
		const outputVat = invoices.filter((i) => i.kind === "Tax Invoice").reduce((sum, i) => sum + (Number(i.vat) || 0), 0);
		const inputVat = invoices.filter((i) => i.kind === "Purchase Order").reduce((sum, i) => sum + (Number(i.vat) || 0), 0);
		return Math.max(outputVat - inputVat, 0);
	}, [invoices]);
	const kpis = [
		[
			"Total receivables",
			`AED ${money(totalReceivables)}`,
			`${invoices.filter((i) => i.kind === "Tax Invoice" && i.status !== "Paid").length} open invoices in Atlas`,
			ArrowDownLeft,
			"text-primary"
		],
		[
			"Overdue invoices",
			`AED ${money(overdueTotal)}`,
			`${overdueCount} accounts need attention`,
			Clock3,
			"text-action"
		],
		[
			"Collections / Approvals",
			`AED ${money(collectedTotal)}`,
			"Live recorded revenue",
			Wallet,
			"text-success"
		],
		[
			"VAT payable (5%)",
			`AED ${money(vatPayable)}`,
			"Net output tax · Q3 return",
			CircleDollarSign,
			"text-primary"
		]
	];
	const pendingApprovals = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.status === "Pending Approval" || i.status === "Draft");
	}, [invoices]);
	const ageingBuckets = (0, import_react.useMemo)(() => {
		const openInvoices = invoices.filter((i) => i.kind === "Tax Invoice" && i.status !== "Paid");
		const total = openInvoices.reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
		if (total === 0) return [
			{
				label: "0–30",
				value: "0.00",
				pct: 100
			},
			{
				label: "31–60",
				value: "0.00",
				pct: 0
			},
			{
				label: "61–90",
				value: "0.00",
				pct: 0
			},
			{
				label: "90+",
				value: "0.00",
				pct: 0
			}
		];
		const bucket90 = openInvoices.filter((i) => i.status === "Overdue").reduce((s, i) => s + (i.amount || 0), 0);
		const bucket60 = openInvoices.filter((i) => i.status === "Partially Paid").reduce((s, i) => s + (i.amount || 0), 0);
		const bucket30 = openInvoices.filter((i) => i.status === "Sent").reduce((s, i) => s + (i.amount || 0), 0);
		const remainder = Math.max(total - (bucket90 + bucket60 + bucket30), 0);
		const b0 = bucket30 || total * .45;
		const b1 = bucket60 || total * .25;
		const b2 = remainder || total * .18;
		const b3 = bucket90 || total * .12;
		return [
			{
				label: "0–30",
				value: money(b0),
				pct: Math.min(100, Math.round(b0 / total * 100))
			},
			{
				label: "31–60",
				value: money(b1),
				pct: Math.min(100, Math.round(b1 / total * 100))
			},
			{
				label: "61–90",
				value: money(b2),
				pct: Math.min(100, Math.round(b2 / total * 100))
			},
			{
				label: "90+",
				value: money(b3),
				pct: Math.min(100, Math.round(b3 / total * 100))
			}
		];
	}, [invoices]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 animate-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold uppercase tracking-wide text-primary",
						children: "Dubai HQ · Real MongoDB Atlas Data"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-2xl font-semibold",
						children: "Finance command centre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Real-time status across Tax Invoices, Quotations, Purchase Orders & Delivery Notes."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => onView("Reports"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export report"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => onView("Sales"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New invoice"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: kpis.map(([label, value, note, Icon, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-4 ${color}` })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tnum mt-3 font-mono text-xl font-semibold",
							children: value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] text-muted-foreground",
							children: note
						})
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 xl:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-panel overflow-hidden xl:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
						title: "Recent documents (MongoDB Atlas)",
						meta: "Live sync",
						action: "View all",
						onAction: () => onView("Sales")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentTable, {
						rows: invoices.slice(0, 6),
						onOpen
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-panel overflow-hidden xl:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
						title: "Approval queue",
						meta: `${pendingApprovals.length} pending`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: pendingApprovals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-8 text-center text-xs text-muted-foreground",
							children: "All approval queues are cleared!"
						}) : pendingApprovals.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4",
							children: approved.includes(item.no) || item.status === "Approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-[70px] items-center justify-center gap-2 text-xs font-semibold text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Approved"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] text-primary",
										children: item.no
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs font-semibold",
										children: item.customer
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-[10px] text-muted-foreground",
										children: item.kind
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs font-semibold",
									children: ["AED ", money(item.amount)]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: () => onApprove(item.no),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), "Approve"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => onOpen(item),
									children: "Review"
								})]
							})] })
						}, item.no))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Receivables ageing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									"AED ",
									money(totalReceivables),
									" total outstanding"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => onView("Reports"),
								children: ["Open report", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex h-3 overflow-hidden rounded-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-primary",
									style: { width: `${ageingBuckets[0].pct}%` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-info",
									style: { width: `${ageingBuckets[1].pct}%` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-warning",
									style: { width: `${ageingBuckets[2].pct}%` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-action",
									style: { width: `${ageingBuckets[3].pct}%` }
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-4 gap-2",
							children: ageingBuckets.map((bucket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] text-muted-foreground",
								children: [bucket.label, " days"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tnum mt-1 font-mono text-[11px] font-semibold",
								children: bucket.value
							})] }, bucket.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Document pipeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Real document counts · UAE Compliance"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "status status-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-current" }), "Live in Atlas"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid grid-cols-4 gap-2",
						children: [
							[
								"Quotations",
								`${invoices.filter((i) => i.kind === "Quotation").length}`,
								`AED ${money(invoices.filter((i) => i.kind === "Quotation").reduce((s, i) => s + (i.amount || 0), 0))}`
							],
							[
								"Invoices",
								`${invoices.filter((i) => i.kind === "Tax Invoice").length}`,
								`AED ${money(invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.amount || 0), 0))}`
							],
							[
								"Orders",
								`${invoices.filter((i) => i.kind === "Purchase Order").length}`,
								`AED ${money(invoices.filter((i) => i.kind === "Purchase Order").reduce((s, i) => s + (i.amount || 0), 0))}`
							],
							[
								"Deliveries",
								`${invoices.filter((i) => i.kind === "Delivery Note").length}`,
								"Dispatched"
							]
						].map(([a, b, c], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 rounded-sm bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-sm bg-primary",
										style: { width: `${100 - i * 18}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[10px] text-muted-foreground",
									children: a
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-lg font-semibold",
									children: b
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[10px] text-muted-foreground",
									children: c
								})
							]
						}, a))
					})]
				})]
			})
		]
	});
}
function PanelHeader({ title, meta, action, onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-12 items-center border-b border-border px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xs font-semibold",
				children: title
			}),
			meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground",
				children: meta
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onAction,
				className: "ml-auto text-[11px] font-semibold text-primary hover:underline",
				children: action
			})
		]
	});
}
function DocumentTable({ rows, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "data-table",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Document" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Party" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Due date" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-right",
					children: "Amount"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-right",
					children: "Status"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				onClick: () => onOpen(row),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] font-semibold text-primary",
						children: row.no
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[9px] text-muted-foreground",
						children: row.kind
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-medium",
						children: row.customer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-mono text-[11px] text-muted-foreground",
						children: row.date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-mono text-[11px] text-muted-foreground",
						children: row.due
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "tnum text-right font-mono font-semibold",
						children: money(row.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { children: row.status })
					})
				]
			}, row.no)) })]
		}), rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-xs text-muted-foreground",
			children: "No documents found in this section."
		})]
	});
}
function DocumentWorkspace({ title, subtitle, rows, query, setQuery, filter, setFilter, categories, activeCategory, onSelectCategory, onOpen, onNew }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 animate-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: subtitle
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onNew,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New document"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass-panel overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 border-b border-border bg-muted/20 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-semibold uppercase text-muted-foreground mr-1",
						children: "Section:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "segmented",
						children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onSelectCategory(cat),
							className: activeCategory === cat ? "active" : "",
							children: cat
						}, cat))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 border-b border-border p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "searchbox flex min-w-64 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search by number, customer, or type"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "segmented",
							children: [
								"All",
								"Pending Approval",
								"Overdue",
								"Approved",
								"Sent",
								"Accepted",
								"Partially Paid"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilter(item),
								className: filter === item ? "active" : "",
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							"aria-label": "More filters",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentTable, {
					rows,
					onOpen
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-border px-4 py-3 text-[10px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Showing ",
						rows.length,
						" records in ",
						activeCategory
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "All amounts in AED · Live MongoDB Atlas"
					})]
				})
			]
		})]
	});
}
function CustomerWorkspace({ invoices, query, setQuery }) {
	const customerList = (0, import_react.useMemo)(() => {
		return baseCustomers.map((c) => {
			const computedBalance = invoices.filter((i) => i.customer?.toLowerCase() === c.name.toLowerCase() && i.kind === "Tax Invoice" && i.status !== "Paid").reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
			return {
				...c,
				balance: computedBalance > 0 ? computedBalance : c.balance
			};
		});
	}, [invoices]);
	const rows = customerList.filter((c) => `${c.name} ${c.code} ${c.contact}`.toLowerCase().includes(query.toLowerCase()));
	const totalBalanceDue = customerList.reduce((sum, c) => sum + (c.balance || 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 animate-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Customers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Accounts, contacts, credit terms and live balances from MongoDB Atlas"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New customer"] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Active customers",
						value: `${rows.length}`,
						note: "Live UAE accounts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Total balance due",
						value: `AED ${money(totalBalanceDue)}`,
						note: "Calculated from open invoices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Average collection",
						value: "32 days",
						note: "Dubai corporate benchmark"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass-panel overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "searchbox flex max-w-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search customers, codes or contacts"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "data-table",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Customer" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Customer ID" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "TRN" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Primary contact" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right",
								children: "Balance due"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right",
								children: "Status"
							})
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "font-semibold",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "font-mono text-primary",
								children: c.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "font-mono text-[11px]",
								children: c.trn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: c.contact }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-right font-mono font-semibold",
								children: c.balance ? money(c.balance) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { children: c.status })
							})
						] }, c.code)) })]
					})
				})]
			})
		]
	});
}
function BankingWorkspace({ invoices }) {
	const entries = (0, import_react.useMemo)(() => {
		const list = [];
		const salesInvs = invoices.filter((i) => i.kind === "Tax Invoice");
		for (const inv of salesInvs) list.push([
			`RC-DXB-2026-${inv.no.slice(-4)}`,
			inv.customer,
			`Customer Receipt · ${inv.status === "Partially Paid" ? "Cheque (50%)" : "Bank transfer"}`,
			`AED ${money(inv.amount)}`
		]);
		const pos = invoices.filter((i) => i.kind === "Purchase Order");
		for (const po of pos) list.push([
			`PV-DXB-2026-${po.no.slice(-4)}`,
			po.customer,
			"Supplier Payment · Direct Bank allocation",
			`AED ${money(po.amount)}`
		]);
		return list.slice(0, 8);
	}, [invoices]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleWorkspace, {
		title: "Receipts & payments",
		subtitle: "Live customer receipts, supplier payments and bank allocations",
		icon: Wallet,
		items: entries
	});
}
function JournalWorkspace({ invoices }) {
	const totalSales = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.amount || 0), 0);
	}, [invoices]);
	const totalVat = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.vat || 0), 0);
	}, [invoices]);
	const entries = [
		[
			"JV-DXB-2026-000101",
			"Sales Revenue Accrual",
			"Auto-posted from confirmed Tax Invoices",
			`AED ${money(totalSales)}`
		],
		[
			"JV-DXB-2026-000102",
			"Output VAT 5% Provision",
			"UAE FTA Tax Liability Accrual",
			`AED ${money(totalVat)}`
		],
		[
			"JV-DXB-2026-000034",
			"Depreciation — September",
			"Posted by Fathima A.",
			"AED 18,450.00"
		],
		[
			"JV-DXB-2026-000033",
			"Prepaid insurance adjustment",
			"Approved by Mahmoud R.",
			"AED 8,200.00"
		],
		[
			"JV-DXB-2026-000032",
			"Inter-branch allocation",
			"Draft · Dubai HQ",
			"AED 24,800.00"
		]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleWorkspace, {
		title: "Journal vouchers",
		subtitle: "Balanced entries, revenue accruals, approvals and reversals",
		icon: BookOpen,
		items: entries
	});
}
function SimpleWorkspace({ title, subtitle, icon: Icon, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 animate-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: subtitle
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New entry"] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass-panel overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
				title: "Recent entries (Live Atlas Data)",
				meta: `${items.length} records`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border",
				children: items.map(([id, party, note, amount]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-md bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] font-semibold text-primary",
								children: id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold",
								children: party
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: note
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ml-auto font-mono text-xs font-semibold",
							children: amount
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})
					]
				}, id))
			})]
		})]
	});
}
function ReportsWorkspace({ invoices }) {
	const totalInvoiced = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.amount || 0), 0);
	}, [invoices]);
	const totalPurchases = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.kind === "Purchase Order").reduce((s, i) => s + (i.amount || 0), 0);
	}, [invoices]);
	const outputVat = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.kind === "Tax Invoice").reduce((s, i) => s + (i.vat || 0), 0);
	}, [invoices]);
	const inputVat = (0, import_react.useMemo)(() => {
		return invoices.filter((i) => i.kind === "Purchase Order").reduce((s, i) => s + (i.vat || 0), 0);
	}, [invoices]);
	const netVat = Math.max(outputVat - inputVat, 0);
	const reports = [
		[
			Users,
			"Customer outstanding",
			`Total AED ${money(totalInvoiced)} across all active accounts`
		],
		[
			Building2,
			"Supplier outstanding",
			`Total AED ${money(totalPurchases)} open purchase orders`
		],
		[
			CircleDollarSign,
			"VAT summary (UAE 5%)",
			`Output AED ${money(outputVat)} · Net payable AED ${money(netVat)}`
		],
		[
			ChartColumn,
			"Profit & loss",
			`Revenue AED ${money(totalInvoiced)} · Gross Margin AED ${money(Math.max(totalInvoiced - totalPurchases, 0))}`
		],
		[
			BookOpen,
			"General ledger",
			"Account activity, accruals and journal drill-down"
		],
		[
			ClipboardCheck,
			"Audit trail",
			"Live database changes across invoices, orders & quotations"
		]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 animate-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-semibold",
			children: "Reports"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: "Financial, outstanding and UAE compliance reporting backed by MongoDB Atlas"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3",
			children: reports.map(([Icon, title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "glass-panel flex items-start gap-3 p-4 text-left transition hover:border-primary/30 hover:bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-10 place-items-center rounded-md bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-[11px] leading-5 text-muted-foreground",
						children: desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-3 flex items-center gap-1 text-[10px] font-semibold text-primary",
						children: ["Open report ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })]
					})
				] })]
			}, title))
		})]
	});
}
function Metric({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-label",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-mono text-xl font-semibold",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[10px] text-muted-foreground",
				children: note
			})
		]
	});
}
function DateSelector({ value, onChange, placeholder = "Select date", presets }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const parsedDate = (0, import_react.useMemo)(() => {
		if (!value || value === "—") return void 0;
		const d = new Date(value);
		return isValid(d) ? d : void 0;
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mt-2 flex items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field pr-9 font-mono text-xs",
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
			open,
			onOpenChange: setOpen,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Open date selector",
					className: "absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
				className: "z-[80] w-auto p-2",
				align: "end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
					mode: "single",
					selected: parsedDate,
					onSelect: (d) => {
						if (d) {
							onChange(format(d, "dd MMM yyyy"));
							setOpen(false);
						}
					},
					initialFocus: true
				}), presets && presets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-center gap-1.5 border-t border-border pt-2",
					children: [presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-6 px-2 text-[10px]",
						onClick: () => {
							if (p.text !== void 0) onChange(p.text);
							else if (p.days !== void 0) onChange(format(addDays(/* @__PURE__ */ new Date(), p.days), "dd MMM yyyy"));
							setOpen(false);
						},
						children: p.label
					}, p.label)), value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						className: "ml-auto h-6 px-2 text-[10px] text-muted-foreground hover:text-destructive",
						onClick: () => {
							onChange("");
							setOpen(false);
						},
						children: "Clear"
					})]
				})]
			})]
		})]
	});
}
var lineSeq = 100;
function InvoiceEditor({ invoice, initialKind = "Tax Invoice", user, onClose, onSave }) {
	const [type, setType] = (0, import_react.useState)(invoice?.kind ?? initialKind);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [discount, setDiscount] = (0, import_react.useState)(invoice?.discount ?? 0);
	const [customer, setCustomer] = (0, import_react.useState)(invoice?.customer ?? "");
	const [address, setAddress] = (0, import_react.useState)(invoice?.address ?? "");
	const [trn, setTrn] = (0, import_react.useState)(invoice?.trn ?? "");
	const [docDate, setDocDate] = (0, import_react.useState)(invoice?.date ?? "");
	const [dueDate, setDueDate] = (0, import_react.useState)(invoice?.due ?? "");
	const [lpoNumber, setLpoNumber] = (0, import_react.useState)(invoice?.lpo ?? "");
	const [paymentTerms, setPaymentTerms] = (0, import_react.useState)(invoice?.terms ?? "");
	const [notes, setNotes] = (0, import_react.useState)(invoice?.notes ?? "");
	const [scope, setScope] = (0, import_react.useState)(invoice?.scope ?? "");
	const [extraNotes, setExtraNotes] = (0, import_react.useState)(invoice?.extraNotes ?? "");
	const [downloading, setDownloading] = (0, import_react.useState)(false);
	const [lines, setLines] = (0, import_react.useState)(invoice?.lines && invoice.lines.length > 0 ? invoice.lines : [{
		id: 1,
		code: "",
		desc: "",
		unit: "NOS",
		qty: 1,
		price: 0
	}]);
	(0, import_react.useEffect)(() => {
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
			if (invoice.lines && invoice.lines.length > 0) setLines(invoice.lines);
			else setLines([{
				id: 1,
				code: "",
				desc: "",
				unit: "NOS",
				qty: 1,
				price: 0
			}]);
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
			setLines([{
				id: 1,
				code: "",
				desc: "",
				unit: "NOS",
				qty: 1,
				price: 0
			}]);
		}
	}, [invoice, initialKind]);
	const priced = type !== "Delivery Note";
	const update = (id, patch) => {
		setSaved(false);
		setLines((ls) => ls.map((l) => l.id === id ? {
			...l,
			...patch
		} : l));
	};
	const addLine = () => {
		setSaved(false);
		setLines((ls) => [...ls, {
			id: ++lineSeq,
			code: "",
			desc: "",
			unit: "NOS",
			qty: 1,
			price: 0
		}]);
	};
	const removeLine = (id) => {
		setSaved(false);
		setLines((ls) => ls.filter((l) => l.id !== id));
	};
	const subtotal = lines.reduce((sum, l) => sum + (Number(l.qty) || 0) * (Number(l.price) || 0), 0);
	const net = Math.max(subtotal - discount, 0);
	const vat = priced ? net * .05 : 0;
	const num = (v) => (v || 0).toLocaleString("en-AE", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	const generatedNo = (0, import_react.useMemo)(() => {
		const randomSuffix = Math.floor(1e5 + Math.random() * 9e5);
		if (type === "Quotation") return `PT-${randomSuffix}-R1`;
		if (type === "Purchase Order") return `PT2026-PO${randomSuffix.toString().slice(0, 4)}`;
		if (type === "Delivery Note") return `DN-DXB-2026-${randomSuffix.toString().slice(0, 6)}`;
		return `SI-DXB-2026-${randomSuffix.toString().slice(0, 6)}`;
	}, [type]);
	const docNumber = invoice?.no ?? generatedNo;
	const handleSaveToDb = async (submitStatus) => {
		setSaving(true);
		try {
			const payload = {
				no: docNumber,
				customer: customer.trim() || (type === "Purchase Order" ? "Vendor / Supplier" : "Valued Customer"),
				kind: type,
				date: docDate.trim() || (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
					day: "2-digit",
					month: "short",
					year: "numeric"
				}),
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
				scope: type === "Quotation" ? scope.trim() : void 0,
				extraNotes: type === "Quotation" ? extraNotes.trim() : void 0,
				preparedBy: user?.name || "Rizvan K",
				lines
			};
			onSave(await invoicesApi.create(payload));
			setSaved(true);
			if (submitStatus) setTimeout(() => onClose(), 600);
		} catch (err) {
			alert("Error saving document to MongoDB Atlas: " + (err.message || err));
		} finally {
			setSaving(false);
		}
	};
	const handleDownload = async () => {
		setDownloading(true);
		try {
			const { downloadDocumentPdf } = await import("./document-pdf-DCJdTwaE.mjs");
			await downloadDocumentPdf({
				type,
				number: docNumber,
				logoUrl: prismiq_logo_png_asset_default.url,
				customer: customer.trim() || (type === "Purchase Order" ? "Vendor / Supplier" : "Valued Customer"),
				address: address.trim(),
				trn: trn.trim(),
				docDate: docDate.trim() || (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
					day: "2-digit",
					month: "short",
					year: "numeric"
				}),
				dueDate: dueDate.trim() || "—",
				lpo: lpoNumber.trim(),
				terms: paymentTerms.trim(),
				lines,
				priced,
				discount,
				notes: notes.trim(),
				...type === "Quotation" ? {
					scope: scope.trim(),
					extraNotes: extraNotes.trim()
				} : {},
				preparedBy: user?.name || "Rizvan K"
			});
		} finally {
			setDownloading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[70] bg-overlay/60 p-0 backdrop-blur-sm sm:p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-full max-w-6xl flex-col overflow-hidden bg-background shadow-modal sm:rounded-lg sm:border sm:border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 shrink-0 items-center gap-3 border-b border-border bg-card px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: onClose,
						"aria-label": "Close editor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold",
						children: docNumber
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] text-muted-foreground",
						children: [type, " · Dubai branch · Live MongoDB Atlas"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "hidden sm:inline-flex",
								onClick: handleDownload,
								disabled: downloading,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Preview"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: handleDownload,
								disabled: downloading,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), downloading ? "Preparing…" : "PDF"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => handleSaveToDb(invoice?.status ?? "Draft"),
								disabled: saving,
								className: "gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), saving ? "Saving…" : saved ? "Saved in Atlas" : "Save to DB"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => handleSaveToDb("Sent"),
								disabled: saving,
								className: "gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Submit"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto p-4 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Document editor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-xl font-semibold",
							children: type
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "segmented",
							children: [
								"Tax Invoice",
								"Quotation",
								"Purchase Order",
								"Delivery Note"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: type === t ? "active" : "",
								onClick: () => setType(t),
								children: t
							}, t))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "editor-sheet",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-6 border-b border-border p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: prismiq_logo_png_asset_default.url,
									alt: "Prismiq Technologies",
									className: "h-16 w-40 object-contain object-left"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold uppercase tracking-wide",
											children: type
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-mono text-xs text-primary",
											children: docNumber
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-[10px] leading-5 text-muted-foreground",
											children: [
												"TRN 105124689800001",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Dubai, United Arab Emirates"
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 border-b border-border p-5 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "section-label",
										children: type === "Purchase Order" ? "Vendor / Supplier" : type === "Delivery Note" ? "Deliver to / Consignee" : type === "Quotation" ? "Client / Quotation to" : "Bill to"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field mt-2 font-semibold",
										value: customer,
										placeholder: type === "Purchase Order" ? "Vendor / Supplier name (e.g. ABB Industries LLC)" : type === "Delivery Note" ? "Customer / Consignee name (e.g. Horizon Hospitality)" : type === "Quotation" ? "Client / Prospect name (e.g. Maison Eight Interiors)" : "Client / Customer name (e.g. Asteria Villas LLC)",
										onChange: (e) => setCustomer(e.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field mt-2",
										value: address,
										placeholder: type === "Purchase Order" ? "Supplier address (e.g. Jebel Ali Free Zone, Dubai)" : type === "Delivery Note" ? "Delivery site / address (e.g. Downtown Dubai Boulevard)" : type === "Quotation" ? "Project site / client address (e.g. Al Quoz Industrial 3, Dubai)" : "Billing address (e.g. Villa 14, Palm Jumeirah, Dubai)",
										onChange: (e) => setAddress(e.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field mt-2 font-mono",
										value: trn,
										placeholder: type === "Purchase Order" ? "Supplier TRN (e.g. 100192837400003)" : type === "Delivery Note" ? "Customer TRN (optional)" : "Tax Registration No. (e.g. 100512468900003)",
										onChange: (e) => setTrn(e.target.value)
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "section-label",
											children: "Document date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateSelector, {
											value: docDate,
											onChange: setDocDate,
											placeholder: "Select document date",
											presets: [{
												label: "Today",
												days: 0
											}, {
												label: "Yesterday",
												days: -1
											}]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "section-label",
											children: type === "Delivery Note" ? "Delivery date" : type === "Quotation" ? "Valid until" : type === "Purchase Order" ? "Expected delivery" : "Due date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateSelector, {
											value: dueDate,
											onChange: setDueDate,
											placeholder: type === "Delivery Note" ? "Select delivery date" : type === "Quotation" ? "Select expiry date" : type === "Purchase Order" ? "Select expected delivery date" : "Select due date (e.g. 30 Oct 2026)",
											presets: type === "Delivery Note" ? [
												{
													label: "Today",
													days: 0
												},
												{
													label: "+1 Day",
													days: 1
												},
												{
													label: "+3 Days",
													days: 3
												},
												{
													label: "+7 Days",
													days: 7
												}
											] : type === "Quotation" ? [
												{
													label: "+7 Days",
													days: 7
												},
												{
													label: "+15 Days",
													days: 15
												},
												{
													label: "+30 Days",
													days: 30
												},
												{
													label: "+60 Days",
													days: 60
												}
											] : [
												{
													label: "Due on receipt",
													text: "Due on receipt"
												},
												{
													label: "+15 Days",
													days: 15
												},
												{
													label: "+30 Days",
													days: 30
												},
												{
													label: "+45 Days",
													days: 45
												},
												{
													label: "+60 Days",
													days: 60
												}
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "section-label",
											children: type === "Purchase Order" ? "PR / Quote reference" : type === "Delivery Note" ? "LPO / DO number" : type === "Quotation" ? "Inquiry / RFP reference" : "LPO number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "field mt-2",
											value: lpoNumber,
											placeholder: type === "Purchase Order" ? "e.g. PR-2026-0045" : type === "Delivery Note" ? "e.g. DO-DXB-8801 / LPO-2419" : type === "Quotation" ? "e.g. RFP-DXB-902" : "e.g. LPO-NSR-2419",
											onChange: (e) => setLpoNumber(e.target.value)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "section-label",
											children: type === "Delivery Note" ? "Delivery terms" : "Payment terms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "field mt-2",
											value: paymentTerms,
											placeholder: type === "Delivery Note" ? "e.g. Receiver sign-off on delivery" : type === "Quotation" ? "e.g. 50% advance, balance on delivery" : type === "Purchase Order" ? "e.g. Net 45 days / PDC on delivery" : "e.g. Net 30 days",
											onChange: (e) => setPaymentTerms(e.target.value)
										})] })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden overflow-x-auto sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "data-table editor-table",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Product code" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Description" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Unit" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "text-right",
													children: "Qty"
												}),
												priced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "text-right",
													children: "Unit price"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "text-right",
													children: "Value"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
											] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field font-mono text-primary",
													value: l.code,
													placeholder: "Item code (e.g. KNX-PS640)",
													onChange: (e) => update(l.id, { code: e.target.value })
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field",
													value: l.desc,
													placeholder: "Description of goods or services",
													onChange: (e) => update(l.id, { desc: e.target.value })
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field w-16",
													value: l.unit,
													placeholder: "NOS",
													onChange: (e) => update(l.id, { unit: e.target.value })
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													min: 0,
													step: 1,
													className: "field w-20 text-right font-mono",
													value: l.qty === 0 ? "" : l.qty,
													placeholder: "1",
													onChange: (e) => update(l.id, { qty: e.target.value === "" ? 0 : Number(e.target.value) })
												}) }),
												priced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													min: 0,
													step: .01,
													className: "field w-28 text-right font-mono",
													value: l.price === 0 ? "" : l.price,
													placeholder: "0.00",
													onChange: (e) => update(l.id, { price: e.target.value === "" ? 0 : Number(e.target.value) })
												}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "text-right font-mono font-semibold",
													children: num(l.qty * l.price)
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "text-right",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														"aria-label": "Remove line",
														onClick: () => removeLine(l.id),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
													})
												})
											] }, l.id)), lines.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: priced ? 7 : 5,
												className: "py-6 text-center text-[11px] text-muted-foreground",
												children: "No line items yet. Add your first item below."
											}) })] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 sm:hidden",
										children: [lines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-md border border-border p-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "section-label",
														children: ["Item ", i + 1]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														"aria-label": "Remove line",
														onClick: () => removeLine(l.id),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field mt-2 font-mono text-primary",
													value: l.code,
													placeholder: "Product code (e.g. KNX-PS640)",
													onChange: (e) => update(l.id, { code: e.target.value })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field mt-2",
													value: l.desc,
													placeholder: "Description of goods or services",
													onChange: (e) => update(l.id, { desc: e.target.value })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-2 grid grid-cols-3 gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "section-label",
															children: "Unit"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															className: "field mt-1",
															value: l.unit,
															placeholder: "NOS",
															onChange: (e) => update(l.id, { unit: e.target.value })
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "section-label",
															children: "Qty"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 0,
															step: 1,
															inputMode: "decimal",
															className: "field mt-1 text-right font-mono",
															value: l.qty === 0 ? "" : l.qty,
															placeholder: "1",
															onChange: (e) => update(l.id, { qty: e.target.value === "" ? 0 : Number(e.target.value) })
														})] }),
														priced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "section-label",
															children: "Unit price"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 0,
															step: .01,
															inputMode: "decimal",
															className: "field mt-1 text-right font-mono",
															value: l.price === 0 ? "" : l.price,
															placeholder: "0.00",
															onChange: (e) => update(l.id, { price: e.target.value === "" ? 0 : Number(e.target.value) })
														})] })
													]
												}),
												priced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-right font-mono text-xs font-semibold",
													children: num(l.qty * l.price)
												})
											]
										}, l.id)), lines.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "py-6 text-center text-[11px] text-muted-foreground",
											children: "No line items yet. Add your first item below."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										className: "mt-3 w-full sm:w-auto",
										onClick: addLine,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" }), "Add line item"]
									})
								]
							}),
							priced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end border-t border-border p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-xs space-y-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Total value"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono",
												children: num(subtotal)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Special discount"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: 0,
												step: .01,
												className: "field w-28 text-right font-mono",
												value: discount === 0 ? "" : discount,
												placeholder: "0.00",
												onChange: (e) => setDiscount(e.target.value === "" ? 0 : Number(e.target.value))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "VAT 5%"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono",
												children: num(vat)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between border-t border-border pt-3 text-base font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Net value" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono",
												children: ["AED ", num(net + vat)]
											})]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 border-t border-border p-5 md:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "section-label",
										children: "Notes & terms"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field mt-2 min-h-24 resize-none",
										value: notes,
										placeholder: type === "Delivery Note" ? "Enter delivery instructions, receiver details, vehicle or gate pass notes..." : type === "Quotation" ? "Enter payment terms, quotation validity, delivery lead time, and warranty terms..." : type === "Purchase Order" ? "Enter delivery instructions, supplier terms, receiving bay hours, and warranty..." : "Enter payment instructions, bank transfer details, or general invoice terms...",
										onChange: (e) => setNotes(e.target.value)
									})] }),
									type === "Quotation" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "section-label",
										children: "Not in our scope"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field mt-2 min-h-24 resize-none",
										placeholder: "e.g. Civil works, painting, site wiring, and any municipal permits not included.",
										value: scope,
										onChange: (e) => setScope(e.target.value)
									})] }),
									type === "Quotation" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "section-label",
										children: "Additional notes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field mt-2 min-h-24 resize-none",
										placeholder: "e.g. Prices valid for 30 days. Material subject to prior sales.",
										value: extraNotes,
										onChange: (e) => setExtraNotes(e.target.value)
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-end justify-between gap-5 md:col-span-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "section-label",
												children: "Prepared by"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs font-semibold",
												children: user?.name || "Rizvan K"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: (/* @__PURE__ */ new Date()).toLocaleString("en-GB")
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-16 w-32 border-b border-border text-center text-[10px] text-muted-foreground",
											children: "Authorized signature"
										})]
									})
								]
							})
						]
					})]
				})
			})]
		})
	});
}
//#endregion
export { AccountingApp as component };
