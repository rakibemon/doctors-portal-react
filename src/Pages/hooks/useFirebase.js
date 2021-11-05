import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import FirebaseInitialize from '../Login/firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();
FirebaseInitialize();
const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  const emailRegister = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const googleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
  };

  const loginWithEmail = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setError('')
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [auth])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      setError('')
    }).catch((error) => {
      setError(error.message)
    })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return {
    user,
    setUser,
    error,
    setError,
    emailRegister,
    isLoading,
    setIsLoading,
    loginWithEmail,
    googleSignIn,
    logOut
  }
};

export default useFirebase;