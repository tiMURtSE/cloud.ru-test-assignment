import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useModalHandlers = (selector: string) => {
	const navigate = useNavigate();

	const openModal = () => {
		const modal = document.querySelector(selector) as HTMLDialogElement;

		modal.showModal();
	};

	const closeModal = (isSuccess: boolean) => {
		const modal = document.querySelector(selector) as HTMLDialogElement;

		modal.close();

		if (isSuccess) navigate("/");
	};

	return { openModal, closeModal };
};
