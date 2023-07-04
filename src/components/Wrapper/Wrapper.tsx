import { ReactNode } from "react";
import styles from "./Wrapper.module.css";

type Props = {
	children: ReactNode;
	isMain?: boolean;
};

const Wrapper = ({ children, isMain }: Props) => {
	const className = `${styles.wrapper} ${isMain ? styles.main : ""}`;

	return <div className={className}>{children}</div>;
};

export default Wrapper;
