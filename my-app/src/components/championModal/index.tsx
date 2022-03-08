import React from "react";
import Modal from "react-bootstrap/Modal";
import "./championModal.scss";
import Champion from "../../features/champions/types/champion";
import { useParams } from "react-router-dom";

interface IChampionModalProps {
	show: boolean;
	onClose: any;
	champion: Champion;
}

const ChampionModal = ({ show, onClose, champion }: IChampionModalProps) => {
	const { championId } = useParams();

	React.useEffect(() => {}, [championId, champion]);

	return (
		<Modal show={show} onHide={onClose} fullscreen={true}>
			<Modal.Header closeButton>
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
