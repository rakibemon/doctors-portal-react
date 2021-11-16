import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile, getIdToken,signOut } from 'firebase/auth';
import FirebaseInitialize from '../Login/firebase/firebase.init';
import axios from 'axios';
const googleProvider = new GoogleAuthProvider();
FirebaseInitialize();
const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('')

  const emailRegister = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setError('');
      const newUser = {email,  displayName: name}
      setUser(newUser);

      // send user to the Database
      saveUser(email, name)

      //send name to firebase after creation

      updateProfile(auth.currentUser, {
        displayName: name //dirct to ekanei amra set kre dissi name ta tahle 18 no line e kn declear krsi ?
      }).then(() => {
        // Profile updated!
      }).catch((error) => {
        setError(error.message)
      });
      
      history.replace('/home')
      })
    .catch((error) => {
      setError(error.message)
    })
    .finally(()=>{
        setIsLoading(false)
    })
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
        setUser(user);
        setError('');
        getIdToken(user)
        .then(idToken=>{
          setToken(idToken);
          
        })
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [auth]);

  // for admin check
  useEffect(()=>{
    axios.get(`http://localhost:5000/users/${user?.email}`)
    .then(data => {
      setAdmin(data?.data?.admin)
    })
  },[user?.email])

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
  };


  const saveUser = (email,displayName) =>{
    const user = {email, displayName} // email:email and email same jinis property and value name same
    axios.post('http://localhost:5000/users', user)
    .then(data => {
      // Save user to DB
    }
    );
  };


  const googleSaveUser = (email,displayName) =>{
    const user = {email, displayName} // email:email and email same jinis property and value name same
    axios.put('http://localhost:5000/users', user)
    .then(data => console.log(data.data)
    );
  };
  return {
    user,
    setUser,
    error,
    setError,
    admin,
    token,
    emailRegister,
    isLoading,
    googleSaveUser,
    setIsLoading,
    loginWithEmail,
    googleSignIn,
    logOut
  }
};

export default useFirebase;