import {
	db,
	ref,
	set,
	auth,
	createUserWithEmailAndPassword,
} from '../firebase';

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
			lastName: lastName,
			firstName: firstName,
		};

		await set(ref(db, 'users/' + userId), profile);

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