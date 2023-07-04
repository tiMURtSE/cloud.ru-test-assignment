import React, { ChangeEvent, TextareaHTMLAttributes, useEffect, useRef, useState } from "react";
import styles from "./Textarea.module.scss";
import { useAppSelector } from "@hooks/index";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	tip?: string;
}

const Textarea = React.forwardRef(
	({ label, tip, ...props }: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
		const formData = useAppSelector((state) => state.form.formData);
		const [counter, setCounter] = useState(formData.about.length);

		const countSymbol = (event: ChangeEvent<HTMLTextAreaElement>) => {
			const inputValue = event.target.value;
			const textWithoutSpaces = inputValue.replace(/\s/g, "");

			setCounter(textWithoutSpaces.length);
		};

		return (
			<label className={styles["label"]}>
				{label && <span>{label}</span>}
				<div className={styles["textarea__wrapper"]}>
					<textarea
						className={styles["textarea"]}
						ref={ref}
						{...props}
						onChange={countSymbol}
					></textarea>

					<span className={styles["counter"]}>{counter} / 200</span>
				</div>

				{tip && <span className={styles["tip"]}>{tip}</span>}
			</label>
		);
	}
);

export default Textarea;
