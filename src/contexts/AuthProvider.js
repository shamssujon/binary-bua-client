import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import firebaseApp from "../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const auth = getAuth(firebaseApp);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const googleProvier = new GoogleAuthProvider();

	const successToast = (message) => {
		return toast.success(message);
	};

	const errorToast = (message) => {
		return toast.error(message);
	};

	// Create user with email/password
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Login with email/password
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Sign in with google
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvier);
	};

	// Logout
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Update User name and photo
	const updateUserProfile = (profile) => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	// Observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, [auth]);

	const value = {
		user,
		loading,
		createUser,
		loginUser,
		logOut,
		googleSignIn,
		successToast,
		errorToast,
		updateUserProfile,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
