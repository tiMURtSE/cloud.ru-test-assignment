import { useState } from "react";
import ProgressBar from "@components/ProgressBar/ProgressBar";
import Wrapper from "@components/Wrapper/Wrapper";
import styles from "./Create.module.scss";
import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import ThirdStep from "./components/ThirdStep/ThirdStep";

function Create() {
	const [step, setStep] = useState(1);

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<FirstStep
						step={step}
						setStep={setStep}
					/>
				);
			case 2:
				return (
					<SecondStep
						step={step}
						setStep={setStep}
					/>
				);
			case 3:
				return (
					<ThirdStep
						step={step}
						setStep={setStep}
					/>
				);
		}
	};

	return (
		<div className="container">
			<Wrapper>
				<div className={styles["progress-bar-wrapper"]}>
					<ProgressBar state={step} />
				</div>

				{renderStep()}
			</Wrapper>
		</div>
	);
}

export default Create;
