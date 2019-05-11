import Firebase from "firebase";
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB8wHa2o_WyiF5Kawkn64DrDHhSHMZDKYo",
    authDomain: "bwish-926d0.firebaseapp.com",
    databaseURL: "https://bwish-926d0.firebaseio.com",
    projectId: "bwish-926d0",
    storageBucket: "bwish-926d0.appspot.com",
    messagingSenderId: "120094261556",
    appId: "1:120094261556:web:a62412640ec1e849"
};

class FirebaseConfig {
    constructor() {

        Firebase.initializeApp(config)
        this.auth = Firebase.auth();
        console.log(this.auth)
    }

    createUserWithEmailAndPassword = (email, password) =>{
        this.auth.createUserWithEmailAndPassword(email, password);

    }

    doSignInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)

    }



    signout = () => {
        this.auth.signout();
    }

    print() {
        console.log("Eshta")
    }



}


export default FirebaseConfig;