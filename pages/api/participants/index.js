import { getAllParticipants } from 'handlers/participants';

export default async function handler(req, res) {
	const participants = await getAllParticipants();
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify(participants, null, 2));
	console.log('GET /api/participants status: 200');
}
