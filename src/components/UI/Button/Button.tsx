import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isWhite?: boolean;
}

function Button({ children, isWhite, ...props }: Props) {
	const className = `${styles.btn} ${isWhite ? styles.white : ""}`;

	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
}

export default Button;
