import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("dashboard", "routes/table-content.tsx"),
  route("usage-record", "routes/usage-record.tsx"),
  route("personal", "routes/indivdual.tsx"),
] satisfies RouteConfig;