"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: theme === "dark" ? "#0f121a" : "#eaf5ff",
            color: theme === "dark" ? "#d4ddfb" : "#000001",
          },
          duration: 5000,
        }}
      />
      {children}
    </>
  );
};
