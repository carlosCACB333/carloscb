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
  debug: false,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
