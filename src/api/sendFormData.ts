import { API_URL } from "@consts/index";
import { FormDataType } from "src/types";

export const sendFormData = async (formData: FormDataType) => {
	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "applicaiton/json",
			},
			body: JSON.stringify(formData),
		});

		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
