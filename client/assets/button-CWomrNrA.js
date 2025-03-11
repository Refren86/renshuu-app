import { ab as i, r as d, j as c, S as u, d as f } from "./index-DznMvQEf.js";
const l = i(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          success: "bg-teal-700 text-white hover:bg-teal-600",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: { default: "px-4 py-2 min-h-10", sm: "rounded-md px-3", lg: "rounded-lg px-8 py-4", icon: "h-10 w-10" },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  g = d.forwardRef(({ className: e, variant: t, size: r, asChild: o = !1, ...n }, s) => {
    const a = o ? u : "button";
    return c.jsx(a, { className: f(l({ variant: t, size: r, className: e })), ref: s, ...n });
  });
g.displayName = "Button";
export { g as B, l as b };
