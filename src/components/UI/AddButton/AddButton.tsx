import { ButtonHTMLAttributes } from "react";
import styles from "./AddButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function AddButton({ ...props }: Props) {
	return <button type="button" className={styles["add-button"]} {...props}></button>;
}

export default AddButton;
