import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import "./championModal.scss";
import Champion from "../../features/champions/types/champion";

interface IChampionModalProps {
	show: boolean;
	onClose: any;
	champion: number;
}

const ChampionModal = (props: IChampionModalProps) => {
	const state = useSelector((state: any) => state);
	const [champion, setChampion] = React.useState<Champion>();
	const localStorageState = useSelector(
		(state: any) => state.watchlist.champions
	);
	const { loading, error, champions, totalPages } = state.champions;

	const findChampion = () => {
		let foundChampion;
		if (champions.length < 1) {
			foundChampion = localStorageState.find(
				(champion: Champion) => champion.id === props.champion
			);
		} else if (champions.length > 0) {
			foundChampion = champions.find(
				(champion: Champion) => champion.id === props.champion
			);
		}
		setChampion(foundChampion);
	};

	React.useEffect(() => {
		findChampion();
	}, [props.champion]);

	return (
		<Modal show={props.show} onHide={props.onClose} fullscreen={true}>
			<Modal.Header closeButton>
				{loading && <div>Loading...</div>}
				{error && <div>Error: {error}</div>}
				{champion && <Modal.Title>{champion.name}</Modal.Title>}
			</Modal.Header>
			{champion && (
				<Modal.Body>
					<div className="champion-container">
						<img src={champion.big_image_url} alt={champion.name} />
						<div className="champion-info">
							<p>Champion Name: {champion.name}</p>
							<p>Champion Armor: {champion.armor}</p>
							<p>Champion Attack Damage: {champion.attackdamage}</p>
							<p>Champion HP: {champion.hp}</p>
							<p>Champion ID: {champion.id}</p>
							<p>Champion Move Speed: {champion.movespeed}</p>
							<p>Champion Crit: {champion.crit}</p>
							<p>Champion MP: {champion.mp}</p>
							<p>Champion Spell Block: {champion.spellblock}</p>
						</div>
					</div>
				</Modal.Body>
			)}
			{!champion && <div>No Champion Found</div>}
		</Modal>
	);
};

export default ChampionModal;
