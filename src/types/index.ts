export type FormDataType = {
	formData: {
		tel: string;
		email: string;
		nickname: string;
		firstName: string;
		lastName: string;
		sex: any;
		advantages: { advantage: string }[];
		checkboxes: number[];
		radio: number | undefined;
		about: string;
	};
};
