import {
	Navbar,
	Nav,
	Container,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

import { LoginStatus } from './login-status';
import { AddParticipantMenu } from './Add-Participant-Link';

export default function NavBar() {
	return (
		<Navbar bg='light' expand='lg'>
			<Container fluid>
				<Navbar.Brand href='/'>Perficient Hackathon</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href='/'>Home</Nav.Link>
						<AddParticipantMenu/>
						<LoginStatus />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
