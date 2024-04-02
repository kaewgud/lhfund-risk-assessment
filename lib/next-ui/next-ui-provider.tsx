"use client";

import { NextUIProvider as Provider } from "@nextui-org/system";
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
	children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function NextUIProvider({ children, themeProps }: ProvidersProps) {
  	const router = useRouter();

	return (
		<Provider navigate={router.push}>
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</Provider>
	);
}
