import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ImageWithFallback({ src, ...props }) {
	const [error, setError] = useState(false);
	const [imgSrc, setImgSrc] = useState(src);

	function onError() {
		if (!error) {
			setImgSrc('/images/placeholder-image.jpg');
			setError(true);
		}
	}

	return <Card.Img src={imgSrc} {...props} onError={onError} />;
}

export default function Participant({ lastName, firstName, email }) {
	const title = `${firstName}, ${lastName}`;

	return (
		<Card style={{ width: '18rem' }}>
			<ImageWithFallback variant='top' src='1.jpg' />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</Card.Text>
				<Button variant='light'>{email}</Button>
			</Card.Body>
		</Card>
	);
}
