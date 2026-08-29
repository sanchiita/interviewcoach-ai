import {auth} from "./firebase.js";
import {signInWithEmailAndPassword}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

loginForm.onsubmit=async(e)=>{
 e.preventDefault();
 try{
  await signInWithEmailAndPassword(auth,email.value,password.value);
  location.href="dashboard.html";
 }catch(error){
  alert("Login failed: "+error.message);
 }
};
