import { j as e, F as t } from "./index-DznMvQEf.js";
const i = ({ size: s = "md" }) =>
  e.jsx("div", {
    className: "flex items-center justify-center",
    children: e.jsxs("div", {
      className: t("relative", { "size-12": s === "sm", "size-24": s === "md", "size-36": s === "lg" }),
      children: [
        [...Array(5)].map((l, r) =>
          e.jsx("div", { className: "absolute w-full h-full border-t-4 border-red-500 rounded-full animate-spin" }, r)
        ),
        e.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center",
          children: e.jsx("span", { className: "text-2xl font-bold text-red-500", children: "待つ" }),
        }),
      ],
    }),
  });
export { i as L };
