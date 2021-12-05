import React, { useState, useEffect } from 'react';
//import { Card, Button } from 'react-bootstrap';
import styles from './participant.module.css';
import useRequestRest from 'hooks/useRequestRest';

function ImageWithFallback({ src, ...props }) {
	const [error, setError] = useState(false);
	const [imgSrc, setImgSrc] = useState(src);

	function onError() {
		if (!error) {
			setImgSrc('/images/placeholder-image.jpg');
			setError(true);
		}
	}

	return <img src={imgSrc} {...props} onError={onError} />;
}

export default function Participant(props) {
	const { _id, lastName, firstName, email, skills } = props.participant;

	const handleDelete = async () => {
		props.deleteRecord(props.participant);
	};

	const name = `${firstName}, ${lastName}`;

	const cardClass = `${styles.card} ${styles.cardshadow}`;
	const btnClass = `${styles.btn}`;
	const imageCss = `${styles.cardimage}`;
	const iconStyle = { fontSize: '20px' };

	return (
		<div className={cardClass}>
			<div className={styles.cardicon}>
				<i
					className='fa fa-trash'
					aria-hidden='true'
					style={iconStyle}
					onClick={() => handleDelete(_id)}
				></i>
			</div>
			<div className={styles.cardheader}>{name}</div>
			{/* <div className={imageCss}>
				<ImageWithFallback src='1.jpg' />
			</div> */}
			<div className={styles.cardbody}>{skills}</div>
			<div className={styles.cardfooter}>
				<button className={btnClass}>{email}</button>
			</div>
		</div>
	);
}
