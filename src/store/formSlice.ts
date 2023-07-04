import { createSlice } from "@reduxjs/toolkit";
import { FormDataType } from "src/types";

const initialState: FormDataType = {
	formData: {
		tel: "+79999999999",
		email: "m@mail.ru",
		nickname: "ameikz",
		firstName: "Timur",
		lastName: "Ts",
		sex: "man",
		advantages: [{ advantage: "adv1" }],
		checkboxes: [2],
		radio: 2,
		about: "qwerty",
	},
};

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setFormData: (state, action) => {
			console.log(action.payload);
			state.formData = action.payload.formData;
		},

		resetFormData: (state) => {
			state.formData = initialState.formData;
		},
	},
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
