import { ButtonHTMLAttributes } from "react";
import styles from "./CloseButton.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function CloseButton({ ...props }: ButtonProps) {
	return <button type="button" className={styles["close-button"]} {...props}></button>;
}

export default CloseButton;
