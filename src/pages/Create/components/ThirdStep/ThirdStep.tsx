import { useForm } from "react-hook-form";
import Textarea from "@components/UI/Textarea/Textarea";
import styles from "./ThirdStep.module.scss";
import Button from "@components/UI/Button/Button";
import { InferType, object, string } from "yup";
import { MAX_SYMBOL_MESSAGE, REQUIRED_FIELD_MESSAGE } from "@consts/index";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetFormData, setFormData } from "@store/formSlice";
import ModalWindow from "@components/ModalWindow/ModalWindow";
import { useModalHandlers } from "@hooks/useModalHandlers";
import { sendFormData } from "@api/sendFormData";
import { useState } from "react";

type Props = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

const aboutSchema = object({
	about: string()
		.max(200, MAX_SYMBOL_MESSAGE + 200)
		.required(REQUIRED_FIELD_MESSAGE),
});

type FormData = InferType<typeof aboutSchema>;

function ThirdStep({ step, setStep }: Props) {
	const formData = useAppSelector((state) => state.form.formData);
	const dispatch = useAppDispatch();
	const [isSuccess, setIsSuccess] = useState(true);
	const { openModal } = useModalHandlers("#modal");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(aboutSchema),
		defaultValues: formData,
		mode: "onBlur",
	});

	const onSubmit = (data: FormData) => {
		dispatch(setFormData({ formData: data }));
		handleFetch();
	};

	const handleFetch = async () => {
		try {
			const { status } = await sendFormData({ formData });

			if (status === "success") {
				dispatch(resetFormData());
				setIsSuccess(true);
				openModal();
			} else {
				setIsSuccess(false);
				openModal();
			}
		} catch (error) {
			console.log(error);
			setIsSuccess(false);
			openModal();
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			autoComplete="off"
		>
			<div className={styles["textarea-wrapper"]}>
				<Textarea
					id="field-about"
					label="О себе"
					placeholder="О себе"
					defaultValue={formData.about}
					{...register("about")}
					tip={errors.about?.message}
				/>
			</div>

			<div className={styles["buttons"]}>
				<Button
					type="button"
					id="button-back"
					onClick={() => setStep(step - 1)}
					isWhite
				>
					Назад
				</Button>
				<Button
					type="submit"
					id="button-next"
				>
					Отправить
				</Button>
			</div>

			<ModalWindow isSuccess={isSuccess} />
		</form>
	);
}

export default ThirdStep;
