import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider , signInWithPopup  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDPXBKkZH_VIQ27Sw01RSpaa2HFA6bpDp4",
authDomain: "q1t1-c6b83.firebaseapp.com",
projectId: "q1t1-c6b83",
storageBucket: "q1t1-c6b83.appspot.com",
messagingSenderId: "248984457348",
appId: "1:248984457348:web:f85c5929bc8b374d1cf2d1",
measurementId: "G-WY3M6D4K63"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth= getAuth(app);
const provider =new GoogleAuthProvider();


const authForm = document.querySelector(".containerOne");
const userEmail = document.querySelector("#username");
const userPassword = document.querySelector("#password");
const signInButton = document.querySelector("#btnL");
const gogly =document.getElementById("signIn");


const userSignIn = async() =>{
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;

    signInWithEmailAndPassword (auth , signInEmail, signInPassword)
    .then((userCredential) => {
        const user= userCredential.user;
        alert("you have signed In we found that you are our valuable customer ");
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode + errorMessage);
    })
}

const userIn = async() => {
    signInWithPopup(auth,provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

const checkAuthState = async() =>{
    onAuthStateChanged(auth, user =>{
        if(user){
            //if we find valid user
            window.location.href="./home.html";
        }
        else {
            //if in place of user we found a falsy value 
        }
    })
} 

checkAuthState();

signInButton.addEventListener('click',userSignIn);
gogly.addEventListener('click',userIn);
