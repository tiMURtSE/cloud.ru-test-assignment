import { useForm, useFieldArray } from "react-hook-form";
import { object, array, string, InferType, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./SecondStep.module.scss";
import AddButton from "@components/UI/AddButton/AddButton";
import Button from "@components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import AdvantageField from "@components/UI/AdvantageField/AdvantageField";
import { REQUIRED_FIELD_MESSAGE } from "@consts/index";
import { setFormData } from "@store/formSlice";

type Props = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

const advantagesSchema = object({
	advantages: array().of(
		object({
			advantage: string().required(REQUIRED_FIELD_MESSAGE),
		})
	),
	checkboxes: array().of(number()),
	radio: number().required(REQUIRED_FIELD_MESSAGE),
});

type FormData = InferType<typeof advantagesSchema>;

function SecondStep({ step, setStep }: Props) {
	const formData = useAppSelector((state) => state.form.formData);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormData>({
		mode: "onBlur",
		defaultValues: formData,
		resolver: yupResolver(advantagesSchema) as any,
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "advantages",
	});

	const onSubmit = (data: FormData) => {
		dispatch(setFormData({ formData: data }));
		setStep(step + 1);
	};
	console.log(errors);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles["inner"]}>
				{fields.map((field, index) => (
					<AdvantageField
						key={field.id}
						onRemove={() => remove(index)}
						{...register(`advantages.${index}.advantage` as const)}
					/>
				))}

				<AddButton onClick={() => append({ advantage: "" })} />

				<fieldset className={styles["checkboxes"]}>
					<legend>Checkbox group</legend>
					{[1, 2, 3].map((item) => (
						<div key={`checkbox-${item}`}>
							<label className={styles["checkbox__item"]}>
								<input
									type="checkbox"
									value={item}
									defaultChecked={formData.checkboxes.includes(item)}
									{...register("checkboxes")}
								/>
								<span>{item}</span>
							</label>
						</div>
					))}
				</fieldset>

				<fieldset className={styles["checkboxes"]}>
					<legend>Radiobox group</legend>

					{[1, 2, 3].map((item) => (
						<div key={`radio-${item}`}>
							<label className={styles["checkbox__item"]}>
								<input
									type="radio"
									value={item}
									defaultChecked={formData.radio === item}
									{...register("radio")}
								/>
								<span>{item}</span>
							</label>
						</div>
					))}
				</fieldset>
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
					Далее
				</Button>
			</div>
		</form>
	);
}

export default SecondStep;
