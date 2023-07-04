import Button from "@components/UI/Button/Button";
import styles from "./ModalWindow.module.scss";
import { useModalHandlers } from "@hooks/useModalHandlers";
import CloseButton from "@components/UI/CloseButton/CloseButton";

type Props = {
	isSuccess: boolean;
};

function ModalWindow({ isSuccess }: Props) {
	const { closeModal } = useModalHandlers("#modal");

	const modalLabel = isSuccess ? "Форма успешно отправлена" : "Ошибка";
	const successBackgroundClassName = `${styles["background-circle"]} ${styles["success"]}`;
	const errorBackgroundClassName = `${styles["background-circle"]} ${styles["error"]}`;

	return (
		<>
			<dialog
				id="modal"
				className={styles["modal"]}
			>
				<div className={styles["inner-box"]}>
					{isSuccess ? (
						<>
							<h2 className={styles["label"]}>{modalLabel}</h2>

							<div className={successBackgroundClassName}></div>

							<Button
								type="button"
								onClick={() => closeModal(true)}
							>
								На главную
							</Button>
						</>
					) : (
						<>
							<div className={styles["first-row"]}>
								<h2 className={styles["label"]}>{modalLabel}</h2>

								<CloseButton onClick={() => closeModal(false)} />
							</div>

							<div className={errorBackgroundClassName}></div>

							<div className={styles["right-side"]}>
								<Button
									id="button-close"
									type="button"
									onClick={() => closeModal(false)}
								>
									Закрыть
								</Button>
							</div>
						</>
					)}
				</div>
			</dialog>
		</>
	);
}

export default ModalWindow;
