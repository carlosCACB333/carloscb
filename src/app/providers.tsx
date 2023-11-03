"use client";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <ProvidersChild>{children}</ProvidersChild>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

const ProvidersChild = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <>
      <ToastContainer
        theme={theme as any}
        toastStyle={{
          background: theme === "dark" ? "#0f121a" : "#eaf5ff",
        }}
      />
      {children}
    </>
  );
};
