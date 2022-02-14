import {
	fetchChampionsRequest,
	fetchChampionsSuccess,
	fetchChampionsFailure,
	fetchTotalPages,
} from "../getChampions";

interface Champion {
	id: number;
	name: string;
	armor: number;
	armorperlevel: number;
	attackdamage: number;
	attackdamageperlevel: number;
	attackrange: number;
	attackspeedoffset: number;
	attackspeedperlevel: number;
	crit: number;
	critperlevel: number;
	hp: number;
	hpperlevel: number;
	hpregen: number;
	hpregenperlevel: number;
	movespeed: number;
	mp: number;
	mpregen: number;
	mpregenperlevel: number;
	spellblock: number;
	spellblockperlevel: number;
}

const fetchApi = (
	dispatch: any,
	number: number,
	size: number
) => {
	dispatch(fetchChampionsRequest());
	const TOKEN =
		"6ucNBrRntWW-irML8DD6DlULRZSPTHff5eq2u2_IOK1fnFyqWAE";
	const fetchChampions = async () => {
		try {
			const response = await fetch(
				`https://api.pandascore.co/lol/champions?page[number]=${number}&page[size]=${size}&token=${TOKEN}`
			);
			const data = await response.json();
			const headers = response.headers;
			const totalPages: string | null =
				headers.get("X-Total");
			dispatch(fetchTotalPages(Number(totalPages)));
			dispatch(fetchChampionsSuccess(data));
		} catch (error: any) {
			dispatch(fetchChampionsFailure(error));
		}
	};
	fetchChampions();
};

export default fetchApi;
