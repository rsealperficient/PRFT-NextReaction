import { deleteParticipant } from 'handlers/participants';

export default async function handler(req, res) {
	switch (req.method) {
		case 'DELETE': {
			const { id } = req.query;

			const deleteResult = await deleteParticipant(id);
			res.status(200).send(JSON.stringify({ success: true }, null, 2));
			break;
		}

		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
