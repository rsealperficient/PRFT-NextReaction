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

						<NavDropdown title='Participants'>
							<NavDropdown.Item href='/participants'>
								List
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='/participants/add'>
								Add Participant
							</NavDropdown.Item>
						</NavDropdown>
						<LoginStatus />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
