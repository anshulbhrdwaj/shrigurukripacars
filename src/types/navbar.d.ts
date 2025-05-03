import { Dispatch, SetStateAction } from "react";

export interface INavItem {
	id: number;
	name: string;
	link: string;
}

// ==========> PROPS
export interface IHamburgerProps {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}

export interface INavLinkProps {
	data: INavItem;
	isActive: boolean;
	setSelectedIndicator: (href: string) => void;
}
