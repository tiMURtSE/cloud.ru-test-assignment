import { useForm } from "react-hook-form";
import { object, string, InferType } from "yup";
import styles from "./FirstStep.module.scss";
import Input from "@components/UI/Input/Input";
import Select from "@components/UI/Select/Select";
import Button from "@components/UI/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	MAX_SYMBOL_MESSAGE,
	NO_SPECIAL_SYMBOL_MESSAGE,
	ONLY_LETTERS_MESSAGE,
	REQUIRED_FIELD_MESSAGE,
	SPECIFY_GENDER_MESSAGE,
	Sex,
} from "@consts/index";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { useNavigate } from "react-router-dom";
import { setFormData } from "@store/formSlice";

type Props = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

const generalInfoSchema = object({
	nickname: string()
		.max(30, MAX_SYMBOL_MESSAGE + 30)
		.matches(/^[a-zA-Zа-яА-ЯёЁ0-9]+$/, NO_SPECIAL_SYMBOL_MESSAGE)
		.required(REQUIRED_FIELD_MESSAGE),
	firstName: string()
		.max(50, MAX_SYMBOL_MESSAGE + 50)
		.matches(/^[а-яА-ЯёЁa-zA-Z]+$/, ONLY_LETTERS_MESSAGE)
		.required(REQUIRED_FIELD_MESSAGE),
	lastName: string()
		.max(50, MAX_SYMBOL_MESSAGE + 50)
		.matches(/^[а-яА-ЯёЁa-zA-Z]+$/, ONLY_LETTERS_MESSAGE)
		.required(REQUIRED_FIELD_MESSAGE),
	sex: string()
		.oneOf([Sex.Man, Sex.Woman], SPECIFY_GENDER_MESSAGE)
		.required(REQUIRED_FIELD_MESSAGE),
});

type FormData = InferType<typeof generalInfoSchema>;

function FirstStep({ step, setStep }: Props) {
	const formData = useAppSelector((state) => state.form.formData);
	const sexOptions = [
		{ id: "field-sex-option-man", value: Sex.Man, label: "Мужской" },
		{ id: "field-sex-option-woman", value: Sex.Woman, label: "Женский" },
	];
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: formData,
		resolver: yupResolver(generalInfoSchema),
		mode: "onBlur",
	});

	const onSubmit = (data: FormData) => {
		dispatch(setFormData({ formData: { ...formData, ...data } }));
		setStep(step + 1);
	};

	return (
		<div className="container">
			<form
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
				noValidate
			>
				<div className={styles["text-fields"]}>
					<Input
						type="text"
						label="Никнейм"
						placeholder="Введите свой никнейм"
						{...register("nickname")}
						tip={errors.nickname?.message}
					/>

					<Input
						type="text"
						label="Имя"
						placeholder="Введите свое имя"
						{...register("firstName")}
						tip={errors.firstName?.message}
					/>

					<Input
						type="text"
						label="Фамилия"
						placeholder="Введите свою фамилию"
						{...register("lastName")}
						tip={errors.lastName?.message}
					/>

					<Select
						label="Пол"
						options={sexOptions}
						{...register("sex")}
						tip={errors.sex?.message}
					/>
				</div>

				<div className={styles["buttons"]}>
					<Button
						type="button"
						id="button-back"
						onClick={() => navigate("/")}
						isWhite
					>
						Назад
					</Button>

					<Button
						type="submit"
						id="button-next"
					>
						Далее
					</Button>
				</div>
			</form>
		</div>
	);
}

export default FirstStep;
