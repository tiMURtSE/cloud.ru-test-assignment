import { ButtonHTMLAttributes } from "react";
import styles from "./ClearButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function ClearButton({ ...props }: Props) {
	return <button type="button" className={styles["clear-button"]} {...props}></button>;
}

export default ClearButton;
