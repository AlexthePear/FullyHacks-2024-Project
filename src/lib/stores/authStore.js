import { writable } from 'svelte/store';
import { auth, db } from '../firebase/firebase.client.js';
import { doc, setDoc } from "firebase/firestore"
import {
	createUserWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	updatePassword,
	updateEmail
} from 'firebase/auth';

export const authStore = writable({
	isLoading: true,
	currentUser: null
});

export const authHandlers = {
	signup: async (email, password) => {
		await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {	
			console.log(userCredential.user.uid);
			setDoc(doc(db, "Users", userCredential.user.uid), {});
		}); 
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
