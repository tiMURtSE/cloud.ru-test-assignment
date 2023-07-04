import styles from "./ProgressBar.module.scss";

type Props = {
	state: number;
};

function ProgressBar({ state }: Props) {
	let firstBarClassName = `${styles.bar} ${styles["first-bar"]}`;
	let secondBarClassName = `${styles.bar} ${styles["second-bar"]}`;

	let firstCirleClassName = [styles.circle, styles["first-circle"]];
	let secondCirleClassName = [styles.circle, styles["second-circle"]];
	let thirdCirleClassName = [styles.circle, styles["third-circle"]];

	if (state >= 1) {
		firstCirleClassName.push(styles.active);
	}
	if (state >= 2) {
		firstCirleClassName.pop();
		firstCirleClassName.push(styles.completed);

		firstBarClassName += ` ${styles.filled}`;
		secondCirleClassName.push(styles.active);
	}
	if (state >= 3) {
		secondCirleClassName.pop();
		secondCirleClassName.push(styles.completed);

		secondBarClassName += ` ${styles.filled}`;
		thirdCirleClassName.push(styles.active);
	}

	return (
		<div className={styles.wrapper}>
			<div className={firstBarClassName}></div>
			<div className={secondBarClassName}></div>

			<div className={firstCirleClassName.join(" ")}></div>
			<div className={secondCirleClassName.join(" ")}></div>
			<div className={thirdCirleClassName.join(" ")}></div>
		</div>
	);
}

export default ProgressBar;
