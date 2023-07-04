import { useNavigate } from "react-router-dom";
import Button from "@components/UI/Button/Button";
import Wrapper from "@components/Wrapper/Wrapper";
import Input from "@components/UI/Input/Input";
import styles from "./Main.module.scss";
import Header from "./components/Header/Header";
import { useForm } from "react-hook-form";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { REQUIRED_FIELD_MESSAGE, WRONG_EMAIL_MESSAGE } from "@consts/index";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { setFormData } from "@store/formSlice";

const contactsSchema = object({
	tel: string().required(REQUIRED_FIELD_MESSAGE),
	email: string().email(WRONG_EMAIL_MESSAGE).required(REQUIRED_FIELD_MESSAGE),
});

type FormData = InferType<typeof contactsSchema>;

function Main() {
	const formData = useAppSelector((state) => state.form.formData);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: formData,
		resolver: yupResolver(contactsSchema),
		mode: "onBlur",
	});

	const onSubmit = (data: FormData) => {
		dispatch(setFormData({ formData: { ...formData, ...data } }));
		navigate("/create");
	};

	return (
		<div className={"container"}>
			<Wrapper isMain>
				<Header />

				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<div className={styles["text-fields"]}>
						<Input
							type="tel"
							label="Номер телефона"
							isGreyBackground
							placeholder="+7 999 999-99-99"
							{...register("tel")}
							tip={errors.tel?.message}
						/>

						<Input
							type="email"
							label="Email"
							isGreyBackground
							placeholder="tim.jennings@example.com"
							autoCorrect="off"
							{...register("email")}
							tip={errors.email?.message}
						/>
					</div>

					<Button type="submit">Начать</Button>
				</form>
			</Wrapper>
		</div>
	);
}

export default Main;
