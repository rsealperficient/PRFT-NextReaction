import { getAllParticipants, addParticipant } from 'handlers/participants';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET': {
			const participants = await getAllParticipants();
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(participants, null, 2));
			console.log('GET /api/participants status: 200');
			break;
		}
		case 'POST': {
			console.log('participant - post', req.body);
			if (req.body === null) {
				return res.status(400).json({ body: 'Body must not be empty' });
			}

			const body = req.body;

			const addResult = await addParticipant(
				body.lastName,
				body.firstName,
				body.email,
				body.skills
			);

			res.status(201).send(JSON.stringify(addResult, null, 2));
			break;
		}
		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
