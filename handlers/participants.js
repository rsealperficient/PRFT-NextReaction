export async function getAllParticipants() {
	//TODO; replace to get data from sanity

	let participants = [];
	try {
		participants.push({
			id: 1,
			lastName: 'Smith',
			firstName: 'Mike',
			email: 'aaa@bbb.com',
			skills: 'HTML/CSS, JavaScript, JSON, React, Node.js',
		});

		participants.push({
			id: 2,
			lastName: 'Huff',
			firstName: 'John',
			email: 'def@ghj.com',
			skills: 'JavaScript , C#, jQuery, Angular, NET Core, SQL',
		});

		return participants;
	} catch (error) {
		console.error(error);
		return [];
	}
}
