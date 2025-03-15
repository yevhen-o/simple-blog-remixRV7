import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";
import { getReactRouterPath, IDENTIFIERS } from "./utils/urlHelper";

export default [
  layout("./features/layout/MainLayout/index.ts", [
    route(getReactRouterPath(IDENTIFIERS.HOME), "./pages/Home.tsx"),
    route(getReactRouterPath(IDENTIFIERS.BLOG), "./pages/Blog.tsx"),
    route(getReactRouterPath(IDENTIFIERS.BLOG_VIEW), "./pages/BlogPost.tsx"),
    route(getReactRouterPath(IDENTIFIERS.BLOG_ADD), "./pages/BlogAddNew.tsx"),
    route(getReactRouterPath(IDENTIFIERS.USERS), "./pages/UserList.tsx"),
    route(getReactRouterPath(IDENTIFIERS.USER_ADD), "./pages/UserAddNew.tsx"),
    route(getReactRouterPath(IDENTIFIERS.USER_VIEW), "./pages/UserPage.tsx"),
    route("*", "./pages/NotFound.tsx"),
  ]),
] satisfies RouteConfig;
