import React, { useRef, useState, useEffect } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'contexts/AuthContext';

export default function Profile() {
	const router = useRouter();
	const {
		currentUser,
		updatePassword,
		updateEmail,
		lastName,
		firstName,
		updateProfile,
	} = useAuth();

	if (currentUser === null) {
		router.push('/account/login');
		return <></>;
	}

	const lastNameRef = useRef();
	const firstNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		const promises = [];
		setLoading(true);
		setError('');

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		if (
			lastNameRef.current.value !== lastName ||
			firstNameRef.current.value !== firstName
		) {
			promises.push(
				updateProfile(
					currentUser.uid,
					lastNameRef.current.value,
					firstNameRef.current.value
				)
			);
		}

		Promise.all(promises)
			.then(() => {
				router.push('/');
			})
			.catch(() => {
				setError('Failed to update account');
			})
			.finally(() => {
				setLoading(false);
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
						<h2 className='text-center mb-4'>Update Profile</h2>
						{error && <Alert variant='danger'>{error}</Alert>}
						<Form onSubmit={handleSubmit}>
							<Form.Group id='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									ref={emailRef}
									required
									defaultValue={currentUser.email}
								/>
							</Form.Group>
							<Form.Group id='lastName'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type='text'
									defaultValue={lastName}
									ref={lastNameRef}
									required
								/>
							</Form.Group>
							<Form.Group id='firstName'>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type='text'
									defaultValue={firstName}
									ref={firstNameRef}
									required
								/>
							</Form.Group>
							<Form.Group id='password'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									ref={passwordRef}
									placeholder='Leave blank to keep the same'
								/>
							</Form.Group>
							<Form.Group id='password-confirm'>
								<Form.Label>Password Confirmation</Form.Label>
								<Form.Control
									type='password'
									ref={passwordConfirmRef}
									placeholder='Leave blank to keep the same'
								/>
							</Form.Group>
							<Button
								disabled={loading}
								className='w-100'
								style={{ marginTop: '10px' }}
								type='submit'
							>
								Update
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<div className='w-100 text-center mt-2'>
					<Link href='/'>Cancel</Link>
				</div>
			</div>
		</Container>
	);
}
