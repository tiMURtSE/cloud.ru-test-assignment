import React, { SelectHTMLAttributes } from "react";
import styles from "./Select.module.scss";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	tip?: string;
	options: { id: string; value: string; label: string }[];
}

const Select = React.forwardRef(
	({ label, tip, options, ...props }: Props, ref: React.ForwardedRef<HTMLSelectElement>) => {
		return (
			<label className={styles.label}>
				{label && <span className={styles.caption}>{label}</span>}

				<select
					className={styles["select"]}
					ref={ref}
					{...props}
				>
					<option
						value="disabled"
						disabled
					>
						Укажите пол
					</option>

					{options.map((option) => (
						<option
							id={option.id}
							value={option.value}
							key={option.id}
						>
							{option.label}
						</option>
					))}
				</select>

				{tip && <span className={styles["tip"]}>{tip}</span>}
			</label>
		);
	}
);

export default Select;
