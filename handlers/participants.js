import { client } from '../sanity';

export async function getAllParticipants() {
	try {
		const data = await client.fetch(`*[_type == "participant"]{"Id" : _id, email, lastName, firstName,picture}`)
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
}
