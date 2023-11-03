import { NavbarPrivate } from '@/components/common/navbar';
import { LayoutProps } from '@/interfaces';
import { AUTHOR_GITHUB, AUTHOR_LINKEDIN } from '@/utils';
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import { cookies } from 'next/headers';
import React from 'react'
import routes from "@/config/routes.json";

export default function layout({ children }: LayoutProps) {
    const defaultTheme = cookies().get("theme")?.value || "dark";
    const isDark = defaultTheme === "dark";
    return (
        <ClerkProvider
            appearance={{
                variables: {
                    colorPrimary: "#6b9aec",
                    colorText: isDark ? "#d4ddfb" : "#000001",
                    colorTextSecondary: isDark ? "#bdc8f0" : "#404152",
                    colorBackground: isDark ? "#0f121a" : "#eaf5ff",
                    colorInputBackground: isDark ? "#0f121a" : "#eaf5ff",
                    colorInputText: isDark ? "#d4ddfb" : "#000001",
                    colorAlphaShade: "#6b9aec",
                },
                baseTheme: isDark ? dark : undefined,
            }}
        >
            <div className="relative flex flex-col">
                <NavbarPrivate
                    authorGithub={AUTHOR_GITHUB}
                    authorLinkedin={AUTHOR_LINKEDIN}
                    mobileRoutes={routes.mobileRoutes}
                    routes={routes.routes}
                />
                {children}
            </div>

        </ClerkProvider>
    )
}
