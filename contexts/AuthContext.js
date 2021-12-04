import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import {
	auth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	updateEmail as fbUpdateEmail,
	updatePassword as fbUpdatePassword,
} from '../firebase';

import { createUser, getProfile, updateProfile } from 'handlers/users';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [lastName, setLastName] = useState('');
	const [firstName, setFirstName] = useState('');

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	function resetPassword(email) {
		return sendPasswordResetEmail(auth, email);
	}

	function updateEmail(email) {
		fbUpdateEmail(auth.currentUser, email);
	}

	function updatePassword(password) {
		return fbUpdatePassword(auth.currentUser, password);
	}

	useEffect(() => {
		async function getToken(user) {
			if (user) {
				const token = await user.getIdToken();
			}
		}

		async function getProfileData(user) {
			if (!user) {
				setLastName('');
				setFirstName('');
				return;
			}

			const profileData = await getProfile(user.uid);
			setLastName(profileData.lastName);
			setFirstName(profileData.firstName);
		}

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
			getToken(user);
			getProfileData(user);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		createUser,
		login,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
		updateProfile,
		lastName,
		firstName,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
