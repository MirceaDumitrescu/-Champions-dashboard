import saveChampion from "./saveChampion";
import deleteChampion from "./deleteChampion";
import Champion from "../../features/champions/types/champion";

const CheckSaved = (isSaved: any, champion: Champion, dispatch: any) => {
	if (isSaved === -1) {
		return (
			<i
				className="fa-brands fa-gratipay"
				id="unsaved"
				onClick={() => saveChampion(champion, dispatch)}
			></i>
		);
	} else {
		return (
			<i
				className="fa-brands fa-gratipay"
				id="saved"
				onClick={() => deleteChampion(champion, dispatch)}
			></i>
		);
	}
};

export default CheckSaved;
