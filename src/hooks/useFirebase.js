import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloading, setIsloading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsloading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsloading(false);
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false))
    }

    return {
        user,
        isloading,
        setUser,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;