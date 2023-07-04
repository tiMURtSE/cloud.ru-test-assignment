import styles from "./Header.module.scss";

type Props = {};

function Header(props: Props) {
	const firstName = "Иван";
	const lastName = "Иванов";
	const userInitials = [firstName[0], lastName[0]];

	return (
		<div className={styles["header"]}>
			<div className={styles["user-image"]}>{userInitials.join("")}</div>

			<div>
				<div className={styles["user-name"]}>{`${firstName} ${lastName}`}</div>

				<ul className={styles["user-contacts"]}>
					<li>
						<img
							src="/folder.svg"
							alt="folder-icon"
						/>
						<a
							className={styles["contacts-links"]}
							href="#">
							Telegram
						</a>
					</li>
					<li>
						<img
							src="/folder.svg"
							alt="folder-icon"
						/>
						<a
							className={styles["contacts-links"]}
							href="#">
							GitHub
						</a>
					</li>
					<li>
						<img
							src="/folder.svg"
							alt="folder-icon"
						/>
						<a
							className={styles["contacts-links"]}
							href="#">
							Resume
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
