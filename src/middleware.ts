import { authMiddleware } from "@clerk/nextjs";
import { __PROD__ } from "./utils";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/sync",
    "/api/assistant",
    "/api/revalidate",
    "/blog(/.*)?",
    "/project(/.*)?",
    "/certificate(/.*)?",
    "/auth(/.*)?",
    "/ia",
  ],
  debug: !__PROD__,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
