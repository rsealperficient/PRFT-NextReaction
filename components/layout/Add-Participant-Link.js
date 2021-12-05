import { useRouter } from 'next/router';

import { NavDropdown } from 'react-bootstrap';

import { useAuth } from 'contexts/AuthContext';

import ParticipantAdd from '../participants/participant-add';

export function AddParticipantMenu() {
	const router = useRouter();
	const { currentUser, logout, firstName, lastName } = useAuth();

	async function handleParticipantAdd(e) {
		await ParticipantAdd();
		router.push('/participants');
	}

	if (
		currentUser === null ||
		typeof currentUser === 'undefined' ||
		currentUser?.email === null
	    ) {
		    return ("");
	    }

	return (
		<NavDropdown title="Participants">
            <NavDropdown.Item href='/participants'>List</NavDropdown.Item>
			<NavDropdown.Item href='/participants/add'>Add Participant</NavDropdown.Item>
		</NavDropdown>
	);
}
