import { toast } from "react-toastify";

const notifySuccesSave = () =>
	toast.success("Added to Watchlist", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notifySuccesDelete = () =>
	toast.warning("Succesfully Removed", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export { notifySuccesSave, notifySuccesDelete };
