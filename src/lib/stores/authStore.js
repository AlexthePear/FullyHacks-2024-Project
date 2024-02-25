import { writable } from 'svelte/store';
import { auth } from '../firebase/firebase.client.js';
import { createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';

export const authStore = writable({
	isLoading: true,
	currentUser: null
});

export const authHandlers = {
	signup: async (email, password) => {
		await createUserWithEmailAndPassword(auth, email, password);
	},
	logout: async () => {
		await signOut(auth);
	},
	resetPassword: async (email) => {
		await sendPasswordResetEmail(auth, email);
	},
	updateEmail: async (email) => {
		await updateEmail(auth.currentUser, email);
	},
	updatePassword: async (password) => {
		await updatePassword(auth.currentUser, password);
	},
	login: async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	}
};
