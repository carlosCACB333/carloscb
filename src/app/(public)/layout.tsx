import { NavbarPublic } from "@/components/common/navbar";
import routes from "@/config/routes.json";
import { LayoutProps } from "@/interfaces";
import { AUTHOR_GITHUB, AUTHOR_LINKEDIN } from "@/utils";

export default function layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col">
      <NavbarPublic
        authorGithub={AUTHOR_GITHUB}
        authorLinkedin={AUTHOR_LINKEDIN}
        mobileRoutes={routes.mobileRoutes}
        routes={routes.routes}
      />
      {children}
    </div>
  );
}
