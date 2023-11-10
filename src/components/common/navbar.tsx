"use client";

import { Route } from "@/interfaces";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { clsx } from "@nextui-org/shared-utils";
import { link } from "@nextui-org/theme";
import { isAppleDevice } from "@react-aria/utils";
import { includes } from "lodash";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useCmdkStore } from "./cmdk";
import { Icon } from "./icon";
import { ThemeSwitch } from "./theme-switch";

export interface NavbarProps {
  routes: Route[];
  mobileRoutes: Route[];
  children?: ReactNode;
  authorGithub: string;
  authorLinkedin: string;
  NavItems: () => JSX.Element;
}

const SearchButton = ({ onClick }: { onClick: () => void }) => {
  const [commandKey, setCommandKey] = useState<"ctrl" | "command">("command");
  useEffect(() => {
    setCommandKey(isAppleDevice() ? "command" : "ctrl");
  }, []);

  return (
    <Button
      aria-label="Buscar"
      className="text-sm font-normal"
      endContent={
        <Kbd className="py-0.5 px-2 bg-background" keys={commandKey}>
          K
        </Kbd>
      }
      startContent={
        <AiOutlineSearch
          className="text-base pointer-events-none flex-shrink-0"
          size={18}
          strokeWidth={2}
        />
      }
      onPress={onClick}
    >
      Buscar...
    </Button>
  );
};

const Navbar: FC<NavbarProps> = ({
  authorGithub,
  authorLinkedin,
  children,
  routes,
  mobileRoutes = [],
  NavItems,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);

  const pathname = usePathname();
  const cmdkStore = useCmdkStore();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinkClasses = clsx(
    link({ color: "foreground" }),
    "data-[active=true]:text-primary"
  );

  return (
    <NextUINavbar
      className={clsx({
        "z-[100001]": isMenuOpen,
      })}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="gap-3 max-w-fit">
        <NextLink
          aria-label="Home"
          className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50"
          href="/"
        >
          <Icon name="logo" className="fill-primary" height={40} width={40} />
        </NextLink>
      </NavbarBrand>
      <NavbarContent
        className=" hidden sm:flex basis-1/5 sm:basis-full"
        justify="start"
      >
        {routes.map((route) => (
          <NavbarItem key={route.key}>
            <NextLink
              className={navLinkClasses}
              color="foreground"
              data-active={includes(pathname, route.path)}
              href={route.path}
              aria-label={route.title}
            >
              {route.title}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="flex w-full gap-2" justify="end">
        <NavbarItem className="flex h-full items-center">
          <Link
            isExternal
            aria-label="Github"
            className="p-1"
            href={"https://github.com/" + authorGithub}
          >
            <Icon name="git" className="text-foreground" />
          </Link>
        </NavbarItem>

        <NavbarItem className="flex h-full items-center">
          <Link
            isExternal
            aria-label="Linkedin"
            className="p-1"
            href={"https://www.linkedin.com/in/" + authorLinkedin}
          >
            <Icon name="linkedin" className="text-foreground" />
          </Link>
        </NavbarItem>

        <NavbarItem className="flex h-full items-center">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="flex h-full items-center sm:hidden">
          <Button
            size="sm"
            isIconOnly
            className="bg-transparent"
            aria-label="Buscar"
            onPress={() => cmdkStore.onOpen()}
          >
            <AiOutlineSearch className="mt-px text-foreground" size={20} />
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <SearchButton onClick={() => cmdkStore.onOpen()} />
        </NavbarItem>
        <NavItems />
        <NavbarItem className="w-10 h-full sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-full h-full pt-1"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {mobileRoutes.map((item) => (
            <NavbarMenuItem key={item.key}>
              <NextLink
                href={item.path}
                data-active={includes(pathname, item.key)}
                className={clsx(
                  link({ color: "foreground" }),
                  "data-[active=true]:text-primary"
                )}
                aria-label={item.title}
              >
                {item.title}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
        {children}
      </NavbarMenu>
    </NextUINavbar>
  );
};

interface Props {
  routes: Route[];
  mobileRoutes: Route[];
  children?: ReactNode;
  authorGithub: string;
  authorLinkedin: string;
}

const LoginButton = () => (
  <>
    <Button
      color="primary"
      aria-label="Login"
      as={NextLink}
      href="/auth/sign-in"
      className="hidden sm:flex"
    >
      Login
      <FiLogIn className="mt-px text-primary-foreground" size={20} />
    </Button>
    <Button
      aria-label="Login"
      as={NextLink}
      href="/auth/sign-in"
      className="flex sm:hidden"
      isIconOnly
      size="sm"
      variant="light"
    >
      <FiLogIn size={20} />
    </Button>
  </>
);

export const NavbarPublic = (props: Props) => {
  return (
    <Navbar
      {...props}
      NavItems={() => (
        <NavbarItem className="flex h-full items-center">
          <LoginButton />
        </NavbarItem>
      )}
    />
  );
};

export const NavbarPrivate = (props: Props) => {
  const { userId } = useAuth();
  const isAuth = !!userId;
  return (
    <Navbar
      {...props}
      NavItems={() => (
        <NavbarItem className="flex h-full items-center">
          {isAuth ? <UserButton userProfileUrl="/me" /> : <LoginButton />}
        </NavbarItem>
      )}
    />
  );
};
