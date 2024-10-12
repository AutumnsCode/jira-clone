import { ReactNode } from "react";

export interface AuthLayoutProps {
	children: ReactNode;
}

export interface DottedSeparatorProps {
	className?: string;
	color?: string;
	height?: string;
	dotSize?: string;
	gapSize?: string;
	direction?: "horizontal" | "vertical"
}

export interface QueryProviderProps {
	children: ReactNode;
}