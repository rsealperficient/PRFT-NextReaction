import {
    auth,
	createUserWithEmailAndPassword,
} from '../firebase';

import {client} from '../sanity';

export async function createUser(email, password, lastName, firstName) {
	try {
		const authResult = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const userId = authResult.user.uid;
		const token = authResult.user.getIdToken();

        // const profile = {
        //     _type: 'user',
        //     id: userId,
		// 	lastName: lastName,
		// 	firstName: firstName,
		// };

        // const profileResult = await client.create(profile);

        //console.log(profileResult);

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