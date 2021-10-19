import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const auth = getAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);



    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)


    }

    const signInWithEmailPassword = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(()=> setIsLoading(false))
    }
    const signUpWithEmailPassword = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(()=> setIsLoading(false))

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError('')
            })
            .finally(()=> setIsLoading(false))
    }

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError('')
            }
        });
        setIsLoading(false)
    }, [])

    return {
        signInUsingGoogle,
        signInWithEmailPassword,
        signUpWithEmailPassword,
        logOut,
        user,
        error,
        setIsLoading,
        isLoading
    }
};

export default useFirebase;