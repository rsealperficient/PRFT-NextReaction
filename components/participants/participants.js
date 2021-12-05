import ReactPlaceHolder from 'react-placeholder';
import { Alert, CardGroup } from 'react-bootstrap';
import classes from "./participant.module.css";

import useRequestRest, { REQUEST_STATUS } from 'hooks/useRequestRest';
import Participant from './participant';
import styles from './participants.module.css';

export default function Participants() {
	const {
		data: participantsData,
		requestStatus,
		error,
		deleteRecord,
	} = useRequestRest();

	if (requestStatus === REQUEST_STATUS.FAILURE) {
		return (
			<Alert variant='danger'>
				ERROR: <b>loading Speaker Data Failed {error}</b>
			</Alert>
		);
	}

	const delRecord = (participant) => {
		deleteRecord(participant);
	};

	return (
		<>
			<div className={styles.cardgrid}>
				<ReactPlaceHolder
					type='media'
					rows={15}
					ready={requestStatus === REQUEST_STATUS.SUCCESS}
				>
					{participantsData && participantsData.length > 0 ? (
						participantsData.map((x) => {
							return (
								<Participant
									key={x.id}
									participant={x}
									deleteRecord={delRecord}
								/>
							);
						})
					) : (
						<Alert variant='info'>No participants so far</Alert>
					)}
				</ReactPlaceHolder>
			</div>
		</>
	);
}
