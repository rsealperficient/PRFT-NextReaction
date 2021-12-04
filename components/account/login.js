import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'contexts/AuthContext';

export default function Login() {
	const router = useRouter();
	const { login } = useAuth();

	const emailRef = useRef();
	const passwordRef = useRef();
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');
		setIsLoading(true);
		try {
			await login(emailRef.current.value, passwordRef.current.value);
			router.push('/participants');
		} catch (error) {
			console.log(error);
			setError('Failed to login');
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
						<h2 className='text-center mb-4'>Log In</h2>
						{error && <Alert variant='danger'>{error}</Alert>}
						<Form onSubmit={handleSubmit}>
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
							<Button
								disabled={isLoading}
								style={{ marginTop: '10px' }}
								className='w-100'
								type='submit'
							>
								Log In
							</Button>
						</Form>
						<div className='w-100 text-center mt-3'>
							<Link href='/account/forgot-password'>
								Forgot Password?
							</Link>
						</div>
					</Card.Body>
				</Card>
				<div className='w-100 text-center mt-2'>
					Need an account?{' '}
					<Link href='/account/signup'>
						<a>Sign Up</a>
					</Link>
				</div>
			</div>
		</Container>
	);
}
