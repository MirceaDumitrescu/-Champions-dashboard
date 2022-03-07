import "./button.scss";

const FetchButton = (props: any) => {
	return (
		<>
			<button
				className="fetch-button"
				onClick={() => props.callback(props.dispatch, props.number, props.size)}
			>
				{props.text}
			</button>
		</>
	);
};

export default FetchButton;
