import {auth} from "./firebase.js";
import {
 createUserWithEmailAndPassword,
 updateProfile
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const form=document.getElementById("registerForm");

form.addEventListener("submit",async(e)=>{
 e.preventDefault();

 const name=document.getElementById("name").value;
 const email=document.getElementById("email").value;
 const role=document.getElementById("role").value;
 const pass=document.getElementById("password").value;
 const confirm=document.getElementById("confirmPassword").value;

 if(pass!==confirm){
  alert("Passwords do not match!");
  return;
 }

 try{
  const user=await createUserWithEmailAndPassword(auth,email,pass);
  await updateProfile(user.user,{displayName:name});
  localStorage.setItem("role",role);
  location.href="dashboard.html";
 }catch(error){
  alert(error.message);
 }
});
