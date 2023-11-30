import { authMiddleware } from "@clerk/nextjs";

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
  apiRoutes: ["/(api|trpc)(.*)"],
  debug: true,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
