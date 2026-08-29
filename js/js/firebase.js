import {initializeApp} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {getAuth} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig={
 apiKey:"AIzaSyAPmw7O7Dk6QP7Wc4QazUymxV2N2uAvJWY",
 authDomain:"interviewcoach-ai-6af5d.firebaseapp.com",
 projectId:"interviewcoach-ai-6af5d",
 storageBucket:"interviewcoach-ai-6af5d.firebasestorage.app",
 messagingSenderId:"492088003056",
 appId:"1:492088003056:web:47e800f0fa67f60698f535"
};

export const auth=getAuth(initializeApp(firebaseConfig));
