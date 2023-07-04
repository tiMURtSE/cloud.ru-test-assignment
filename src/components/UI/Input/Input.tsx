import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	tip?: string;
	isGreyBackground?: boolean;
}

const Input = React.forwardRef(
	(
		{ label, tip, value, onChange, isGreyBackground, ...props }: Props,
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		const className = `${styles.input} ${isGreyBackground ? styles.grey : ""}`;

		return (
			<label className={styles.label}>
				{label && <span className={styles.caption}>{label}</span>}

				<input
					className={className}
					ref={ref}
					{...props}
				/>

				{tip && <span className={styles.tip}>{tip}</span>}
			</label>
		);
	}
);

export default Input;
