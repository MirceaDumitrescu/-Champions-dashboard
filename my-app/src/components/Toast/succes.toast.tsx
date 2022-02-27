import { toast } from "react-toastify";

const notifySucces = () =>
	toast.success("Added to Watchlist", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export default notifySucces;
