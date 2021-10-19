import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const auth = getAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("")


    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)

            }).catch((error) => {
                setError(error.message)

            });

    }

    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)

            });

    }
    const signUpWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)

            });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError('')
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError('')
            }
        });

    }, [])

    return {
        signInUsingGoogle,
        signInWithEmailPassword,
        signUpWithEmailPassword,
        logOut,
        user,
        error
    }
};

export default useFirebase;