import { toast } from "react-toastify";

const notifyError = () =>
	toast.error("Already in Watchlist", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export default notifyError;
