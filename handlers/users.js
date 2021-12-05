import { auth, createUserWithEmailAndPassword } from '../firebase';

import { client } from '../sanity';

export async function createUser(email, password, lastName, firstName) {
	try {
		const authResult = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const userId = authResult.user.uid;
		const token = authResult.user.getIdToken();

		const profile = {
			_type: 'user',
			id: userId,
			lastName: lastName,
			firstName: firstName,
		};

		const profileResult = await client.create(profile);

		console.log(profileResult);

		return {
			userId: userId,
			token: token,
		};
	} catch (error) {
		console.error(error);
		if (error.code === 'auth/email-already-in-use') {
			return { error: 'Email is already in use' };
		}
		return { error: 'Failed to create an account' };
	}
}

export async function getProfile(id) {
	if (id === null) {
		return { error: 'User has to be logged in' };
	}

	const data = await client.fetch(
		`*[_type == "user" && id match '${id}']{lastName, firstName}`
	);

	if (data === null || !Array.isArray(data) || data.length <= 0) {
		return {
			lastName: '',
			firstName: '',
		};
	}

	return {
		lastName: data[0].lastName,
		firstName: data[0].firstName,
	};
}

export async function updateProfile(id, lastName, firstName) {
	const data = await client.fetch(`*[_type == "user" && id == '${id}']{_id}`);
	const sanityId = data[0]._id;
	client
		.patch(sanityId)
		.set({ lastName: lastName, firstName: firstName })
		.commit()
		.then((updated) => {
			console.log('updated', updated);
		})
		.catch((err) => {
			console.error(err);
		});
}
