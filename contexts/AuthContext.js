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

import { createUser } from 'handlers/users';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

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

		async function getToken(user){
			if(user){	
				const token = await user.getIdToken();
			}			
		}

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
			getToken(user);			
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
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
