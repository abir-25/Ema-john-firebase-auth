import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* 
Step-1
Firebase Authentication
-----------------------
1. Create Firebase App
2. Create Web App
3. Enable Auth Method (Google SignIn, Email Password)
4. Get Configuration
5. Initialize Firebase (Firebase.config.js , Firebase.init.js)
-----------------------

Step-2
Setup Component
---------------
1. Create Login Component
2. Set Route to Login Component
3. Create Register Component
4. Set Route to Register Component
-----------------------

Step-3
Set Auth System
---------------
1. Set up Sign in Method
2. Set up Sign out Method
3. user State
4. Special Observer to change user when user changed
5. Return necessary methods and states from useFirebase
-----------------------

Step-4
Create Auth Context (useAuth)
-----------------------------
1. Create an auth context
2. Create context provider
3. Set context provider value
4. Create useAuth hook
5. Use auth context provider in App.js
6. Return necessary methods and states from useFirebase
-----------------------

Step-5
Create Private Route
--------------------
1. Create private route
2. Set private route
-----------------------

Step-6
Redirect After Login
--------------------
1. After Login Redirect User to their desired destination

*/
