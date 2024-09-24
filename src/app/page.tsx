'use client';

import React, { useCallback, useState } from 'react';
import { Button, Card, Modal, Typography } from 'antd';

const Home = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

	const getRandomPosition = useCallback(() => {
		const randomX = Math.floor(Math.random() * 600) - 300; // Valores aleatórios entre -300 e 300
		const randomY = Math.floor(Math.random() * 300) - 150; // Valores aleatórios entre -150 e 150
		return { x: randomX, y: randomY };
	}, []);

	const distance = useCallback((pos1: any, pos2: any) => {
		return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
	}, []);

	const handleClickYes = useCallback(() => {
		setIsModalOpen(true);
	}, []);

	const handleMouseEnter = useCallback(() => {
		const minDistance = 200;
		let newPosition;
		do {
			newPosition = getRandomPosition();
		} while (distance(noButtonPosition, newPosition) < minDistance);

		setNoButtonPosition(newPosition);
	}, [noButtonPosition]);

	const closeModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	const renderModal = useCallback(() => {
		return (
			<Modal
				open={isModalOpen}
				onCancel={closeModal}
				footer={[
					<Button key="close" onClick={closeModal} type='primary'> Amém!</Button>,
				]}
			>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '32px' }}>
					<iframe src="https://giphy.com/embed/1QamCnKK22AsdnyOYC" width="280" height="280" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
					<Typography.Title level={4}>Partiu falar com os pastores! 🙏🏽</Typography.Title>
				</div>
			</Modal>
		);
	}, [isModalOpen]);

	return (
		<>
			<header>
				<Typography.Title>Mel, quer orar comigo? 💗</Typography.Title>
			</header>

			<main id="conteiner">
				<Card bordered={false}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '500px', height: '300px' }}>
						<Button
							className="option"
							id="opcyes"
							type='primary'
							onClick={handleClickYes}
						>
							SIM
						</Button>
						<Button
							className="option"
							id="opcNo"
							style={{ position: noButtonPosition.x ? 'absolute' : 'initial', left: `${noButtonPosition.x}px`, top: `${noButtonPosition.y}px` }}
							onMouseEnter={handleMouseEnter}
						>
							NÃO
						</Button>
					</div>
				</Card>

				{renderModal()}
			</main>
		</>
	);
}

export default Home;
