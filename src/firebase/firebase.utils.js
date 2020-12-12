import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDs9NadrRVsNx23rK4t587ArDGfprQxE-M",
    authDomain: "e-commerce-bdfc6.firebaseapp.com",
    projectId: "e-commerce-bdfc6",
    storageBucket: "e-commerce-bdfc6.appspot.com",
    messagingSenderId: "840562845975",
    appId: "1:840562845975:web:610d542fc9528cbedaaf52",
    measurementId: "G-7LS7EHJBKG"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileRef = async(user, anotherData) => {
  if(!user) return;

  console.log(user);
  const userRef = firestore.doc(`users/${user.uid}`);
  
  const snapShot = await userRef.get();

  try{
    if(!snapShot.exists){
      const {displayName, email} = user;
      const createAt = new Date();
  
      userRef.set({
        displayName,
        email,
        createAt,
        ...anotherData
      });
    }
  }catch(error){
    console.log('Error Adding User', error.message);
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider(); // Activing Google Auth 
provider.setCustomParameters({ prompt: 'select_account' }); // Pop Up Command for Select Account
export const SignInWithGoogle = () => auth.signInWithPopup(provider); // Create Google Auth With Pop Up 

export default firebase;

