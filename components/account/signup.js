import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'contexts/AuthContext';

export default function Signup() {
	const router = useRouter();
	const { currentUser, createUser } = useAuth();

	if (currentUser !== null) {
		router.push('/');
		return <></>;
	}

	const lastNameRef = useRef();
	const firstNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Password don't match");
		}

		setError('');
		setIsLoading(true);
		const createUserResult = await createUser(
			emailRef.current.value,
			passwordRef.current.value,
			lastNameRef.current.value,
			firstNameRef.current.value
		);

		if (!createUserResult.error) {
			router.push('/');
		} else {
			setError(createUserResult.error);
		}

		setIsLoading(false);
	}

	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<div className='w-100' style={{ maxWidth: '400px' }}>
				<Card>
					<Card.Body>
						<h2 className='text-center mb-4'>Sign Up</h2>
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
							<Form.Group id='password'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									ref={passwordRef}
									required
								/>
							</Form.Group>
							<Form.Group id='password-confirm'>
								<Form.Label>Password Confirmation</Form.Label>
								<Form.Control
									type='password'
									ref={passwordConfirmRef}
									required
								/>
							</Form.Group>
							<Button
								disabled={isLoading}
								style={{ marginTop: '10px' }}
								className='w-100'
								type='submit'
							>
								Sign Up
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<div className='w-100 text-center mt-2'>
					Already have an account?{' '}
					<Link href='/login'>
						<a>Log In</a>
					</Link>
				</div>
			</div>
		</Container>
	);
}
