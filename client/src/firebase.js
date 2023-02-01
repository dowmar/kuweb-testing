// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration



const firebaseConfig = {
    apiKey: "AIzaSyCalOW6BcLCiI8pK51HZKjR5JA_O8q9pGg",
    authDomain: "esp32-kudara.firebaseapp.com",
    databaseURL: "https://esp32-kudara-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp32-kudara",
    storageBucket: "esp32-kudara.appspot.com",
    messagingSenderId: "292713542566",
    appId: "1:292713542566:web:905f5ecd33cb84c5541567"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};
export {
    auth,
    db,
    signInWithGoogle,
    logout,
};