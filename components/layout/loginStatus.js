import { useRouter } from 'next/router';

import { NavDropdown } from 'react-bootstrap';

import { useAuth } from 'contexts/AuthContext';

export function LoginStatus() {
	const router = useRouter();
	const { currentUser, logout, firstName, lastName } = useAuth();

	async function handleLogout(e) {
		await logout();
		router.push('/');
	}

	if (
		currentUser === null ||
		typeof currentUser === 'undefined' ||
		currentUser?.email === null
	) {
		return (
			<NavDropdown title='Login'>
				<NavDropdown.Item href='/account/login'>Login</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href='/account/signup'>
					Sign Up
				</NavDropdown.Item>
			</NavDropdown>
		);
	}

	const title = `${firstName}, ${lastName}`;

	return (
		<NavDropdown title={title}>
			<NavDropdown.Item href='/account/profile'>Profile</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href='#' onClick={handleLogout}>
				Log Out
			</NavDropdown.Item>
		</NavDropdown>
	);
}
