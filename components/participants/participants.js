import NavBar from 'components/layout/navbar';
import ReactPlaceHolder from 'react-placeholder';
import { Alert, CardGroup } from 'react-bootstrap';

import useRequestRest, { REQUEST_STATUS } from 'hooks/useRequestRest';
import Participant from './participant';
import styles from './participants.module.css';

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
			<div className={styles.cardgrid}>
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
								skills={x.skills}
							/>
						);
					})}
				</ReactPlaceHolder>
			</div>
		</>
	);
}