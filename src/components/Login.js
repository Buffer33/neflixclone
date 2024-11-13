import React, { useRef, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Avtar_URL } from "../utils/Constant";


const Login = () => {
  
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleClick = () => {
    const message = validation(email.current.value, password.current.value);
    setErrorMassage(message);

    if (message) return;
    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            
            photoURL:Avtar_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          
            })
            .catch((error) => {
              // An error occurred
              setErrorMassage(error.message)
            });
          })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMessage);
        });
    } else {
      //    Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className=' w-screen h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg")]'>
      <HeaderLogo />
      <div className=" mt-12 mx-12 flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-96 bg-black p-12 rounded-lg bg-opacity-70 text-white"
        >
          <h1 className="  font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className="outline-none p-3 my-2 mx-auto w-full bg-gray-500"
              type="text"
              placeholder="User Name"
            />
          )}
          <input
            ref={email}
            className="outline-none p-3 my-2 mx-auto w-full bg-gray-500"
            type="email"
            placeholder="Email Id"
          />
          <input
            ref={password}
            className="outline-none p-3 my-2 mx-auto w-full bg-gray-500"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600">{errorMassage}</p>
          <button
            className=" font-bold bg-red-700 outline-none p-3 my-4 mx-auto w-full rounded-lg"
            onClick={handleClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="" onClick={handleSignIn}>
            New to Netflix? Sign Up
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
