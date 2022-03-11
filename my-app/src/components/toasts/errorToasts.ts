import { toast } from "react-toastify";

const notifyErrorDelete = () =>
	toast.error("Already in Watchlist", {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notifyErrorSave = () =>
	toast.error("Not in Watchlist", {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export { notifyErrorSave, notifyErrorDelete };
