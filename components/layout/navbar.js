import {
	Navbar,
	Nav,
	Container,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

import { LoginStatus } from './loginStatus';

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
						<Nav.Link href='/participants'>Participants</Nav.Link>
						<LoginStatus />
					</Nav>
					<Form className='d-flex'>
						<FormControl
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
						/>
						<Button variant='outline-success'>Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
