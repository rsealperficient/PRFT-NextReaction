import NavBar from 'components/layout/navbar';
import ReactPlaceHolder from 'react-placeholder';
import { Alert, CardGroup } from 'react-bootstrap';

import useRequestRest, { REQUEST_STATUS } from 'hooks/useRequestRest';
import Participant from './participant';

export default function Participants() {
	const { data: participantsData, requestStatus, error } = useRequestRest();

	if (requestStatus === REQUEST_STATUS.FAILURE) {
		return (
			<Alert variant='danger'>
				ERROR: <b>loading Speaker Data Failed {error}</b>
			</Alert>
		);
	}

	return (
		<>
			<NavBar />
			<CardGroup>
				<ReactPlaceHolder
					type='media'
					rows={15}
					ready={requestStatus === REQUEST_STATUS.SUCCESS}
				>
					{participantsData.map((x) => {
						return (
							<Participant
								key={x.id}
								lastName={x.lastName}
								firstName={x.firstName}
								email={x.email}
							/>
						);
					})}
				</ReactPlaceHolder>
			</CardGroup>
		</>
	);
}
