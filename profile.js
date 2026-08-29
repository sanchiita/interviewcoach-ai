import {auth} from "./firebase.js";
import {onAuthStateChanged}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

onAuthStateChanged(auth,user=>{
  if(!user){
    location.href="login.html";
    return;
  }

  document.getElementById("userName").textContent =
    user.displayName || "User";

  document.getElementById("userEmail").textContent =
    user.email;
});
