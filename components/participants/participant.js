import React, { useState } from 'react';
//import { Card, Button } from 'react-bootstrap';
import Card from '../ui/Card';
import classes from './participant.module.css';
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

export default function Participant({ lastName, firstName, email, picture }) {
	const title = `${firstName}, ${lastName}`;
	return (
		<Card>
			<div className={classes.image}>
				<ImageWithFallback variant='top' src={urlForImage(picture).url()} />
			</div>
			<div className={classes.content}>
				<h3>{title}</h3>
				<div className={classes.actions}>
					<button>{email}</button>
				</div>
			</div>
		</Card>
	);
}
