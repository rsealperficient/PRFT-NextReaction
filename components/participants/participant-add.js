import React, { useRef, useState } from 'react';
import {
	Container,
	Form,
	Button,
	Card,
	Alert,
	Link,
	Nav,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from 'contexts/AuthContext';
import axios from 'axios';

export default function ParticipantAdd() {
	const router = useRouter();
	const { currentUser } = useAuth();

	if (currentUser === null) {
		router.push('/');
		return <></>;
	}

	const url = '/api/participants';

	const lastNameRef = useRef();
	const firstNameRef = useRef();
	const emailRef = useRef();
	const skillsRef = useRef();
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');
		setIsLoading(true);
		const participant = {
			lastName: lastNameRef.current.value,
			firstName: firstNameRef.current.value,
			email: emailRef.current.value,
			skills: skillsRef.current.value,
		};
		axios
			.post(url, participant)
			.then((response) => {
				setIsLoading(false);
				router.push('/participants');
			})
			.catch((error) => {
				setError(error);
				setIsLoading(false);
			});
	}

	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<div className='w-100' style={{ maxWidth: '400px' }}>
				<Card>
					<Card.Body>
						<h2 className='text-center mb-4'>Add Participant</h2>
						{error && <Alert variant='danger'>{error}</Alert>}
						<Form onSubmit={handleSubmit}>
							<Form.Group id='lastName'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type='text'
									ref={lastNameRef}
									required
								/>
							</Form.Group>
							<Form.Group id='firstName'>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type='text'
									ref={firstNameRef}
									required
								/>
							</Form.Group>
							<Form.Group id='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									ref={emailRef}
									required
								/>
							</Form.Group>
							<Form.Group id='skills'>
								<Form.Label>Skills</Form.Label>
								<Form.Control
									as='textarea'
									rows={3}
									ref={skillsRef}
									required
								/>
							</Form.Group>
							<Button
								disabled={isLoading}
								style={{ marginTop: '10px' }}
								className='w-100'
								type='submit'
							>
								Create
							</Button>
						</Form>
					</Card.Body>
					<a href='/participants'>Cancel</a>
				</Card>
			</div>
		</Container>
	);
}
