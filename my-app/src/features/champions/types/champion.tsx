type Champion = {
	armor: number;
	armorperlevel: number;
	attackdamage: number;
	attackdamageperlevel: number;
	attackrange: number;
	attackspeedoffset: number;
	attackspeedperlevel: number;
	big_image_url: string;
	crit: number;
	critperlevel: number;
	hp: number;
	hpperlevel: number;
	hpregen: number;
	hpregenperlevel: number;
	id: number;
	image_url: string;
	movespeed: number;
	mp: number;
	mpperlevel: number;
	mpregen: number;
	mpregenperlevel: number;
	name: string;
	spellblock: number;
	spellblockperlevel: number;
	videogame_versions: string[];
};

export default Champion;
