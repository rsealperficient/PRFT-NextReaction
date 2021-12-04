import { v4 as uuidv4 } from 'uuid';
import { client } from '../sanity';

export async function getAllParticipants() {
	try {
		let participants = [];
		const data = await client.fetch(`*[_type == "participant"]`);

		if (data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				const item = {
					id: data[i].id,
					lastName: data[i].lastName,
					firstName: data[i].firstName,
					email: data[i].email,
					skills: data[i].skills,
					picture: data[i].picture
				};
				participants.push(item);
			}
		}

		return participants;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function addParticipant(lastName, firstName, email, skills) {
	const participant = {
		_type: 'participant',
		id: uuidv4(),
		lastName: lastName,
		firstName: firstName,
		email: email,
		skills: skills,
	};

	client
		.create(participant)
		.then((result) => {
			console.log('participant was created', result);
		})
		.catch((err) => {
			console.error(err);
		});
};
