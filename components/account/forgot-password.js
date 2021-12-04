import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'contexts/AuthContext';

function ForgotPassword() {
	const router = useRouter();
	const { currentUser, resetPassword } = useAuth();

	if (currentUser !== null) {
		router.push('/');
		return <></>;
	}

	const emailRef = useRef();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Check your inbox for further instructions');
		} catch (error) {
			console.log(error);
			setError('Failed to reset password');
		}

		setLoading(false);
	}

	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<div className='w-100' style={{ maxWidth: '400px' }}>
				<Card>
					<Card.Body>
						<h2 className='text-center mb-4'>Password Reset</h2>
						{error && <Alert variant='danger'>{error}</Alert>}
						{message && <Alert variant='success'>{message}</Alert>}
						<Form onSubmit={handleSubmit}>
							<Form.Group id='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									ref={emailRef}
									required
								/>
							</Form.Group>
							<Button
								disabled={loading}
								style={{ marginTop: '10px' }}
								className='w-100'
								type='submit'
							>
								Reset Password
							</Button>
						</Form>
						<div className='w-100 text-center mt-3'>
							<Link href='/account/login'>Login</Link>
						</div>
					</Card.Body>
				</Card>
				<div className='w-100 text-center mt-2'>
					Need an account? <Link href='/account/signup'>Sign Up</Link>
				</div>
			</div>
		</Container>
	);
}

export default ForgotPassword;
