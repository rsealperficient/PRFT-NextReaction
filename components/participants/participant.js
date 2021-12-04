import React, { useState } from 'react';
import styles from './participant.module.css';
import { urlForImage } from '/lib/sanity'

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

export default function Participant({ lastName, firstName, email, skills,picture }) {
	const name = `${firstName}, ${lastName}`;

	const cardClass = `${styles.card} ${styles.cardshadow}`;
	const btnClass = `${styles.btn}`;
	const imageCss = `${styles.cardimage}`;

	return (
		<div className={cardClass}>
			<div className={styles.cardheader}>{name}</div>
			<div className={imageCss}>
				<ImageWithFallback variant='top' src={urlForImage(picture).url()} />
			</div>
			<div className={styles.cardbody}>{skills}</div>
			<div className={styles.cardfooter}>
				<button className={btnClass}>{email}</button>
			</div>
		</div>
	);
}
