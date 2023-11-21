import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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

const auth = getAuth(app);

const authForm = document.querySelector(".containerOne");
const userEmail = document.querySelector("#username");
const userPassword = document.querySelector("#password");
const signUpButton = document.querySelector("#btnL");

const userSignUp = async()=>{
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;

    createUserWithEmailAndPassword(auth,signUpEmail,signUpPassword)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        alert("your account has been created ");
    })
    .catch((error) => {
        const errorCode =error.code;
        const errorMessage = error.message;
        console.log(errorCode + error.Message);
        alert("signUp failed"); 
    })
}

const checkAuthState = async() =>{
    onAuthStateChanged(auth,user =>{

        if(user){
            //user is found
            window.location.href="./home.html"
        }
        else{
            //user is not found
        }
    })
}

checkAuthState();
//runs continuosly

//addEventListners to login btn and call the signUp function 
signUpButton.addEventListener('click',userSignUp);
