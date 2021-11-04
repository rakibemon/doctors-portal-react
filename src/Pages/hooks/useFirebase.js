import { useEffect, useState } from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut} from 'firebase/auth';
import FirebaseInitialize from '../Login/firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();
FirebaseInitialize();
const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});

    const emailRegister = (email,password) =>{
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            // Signed in 
            // ...
          })
          .catch((error) => {
          });
    }; 
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
                // ...
              } else {
                setUser({})
              }
            });
            return ()=> unsubscribe;
    },[auth])

    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        user,
        setUser,
        emailRegister,
        googleSignIn,
        logOut
    }
};

export default useFirebase;