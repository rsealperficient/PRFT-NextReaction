export default {
	name: 'participant',
	title: 'Participant',
	type: 'document',
	fields: [
		{
			name: 'email',
			title: 'email',
			type: 'string',
		},
		{
			name: 'lastName',
			title: 'Last Name',
			type: 'string',
		},
		{
			name: 'firstName',
			title: 'First Name',
			type: 'string',
		},
        {
			name: 'picture',
			title: 'Picture',
			type: 'image',
		}
  	],
};
