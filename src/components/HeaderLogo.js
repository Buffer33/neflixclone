import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo, supportedLanguge } from "../utils/Constant";
import { toggleGptSeach } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const HeaderLogo = () => {
  const user = useSelector((store) => store.user);
  const showSearchGpt =useSelector(store=>store.gpt.showSearchgpt)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const handleGpt = () => {
    dispatch(toggleGptSeach());
  };
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div
      className={
        !user
          ? "bg-gradient-to-b from-black w-full flex  justify-between"
          : "bg-gradient-to-b from-black w-full flex flex-col md:flex-row justify-between absolute z-10"
      }
    >
      <img className=" w-40 mx-auto md:mx-0" src={Netflix_Logo} alt="logo" />
      {user && (
        <div className="flex m-auto md:m-0">
        { showSearchGpt&& <select
          onChange={handleLanguageChange}
           className="m-4 px-2 outline-none bg-gray-900 text-white">
            {supportedLanguge.map((item) => (
              <option key={item.identifire} value={item.identifire}>
                {item.name}
              </option>
            ))}
          </select>}
          <button
            onClick={handleGpt}
            className="px-2 bg-purple-700 text-white m-4 rounded-lg shadow-xl"
          >
            {showSearchGpt?"Home":"Gpt Search"}
          </button>
          <img
            className="hidden md:inline-block w-12 m-2 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
          />
          <button
            className="p-2 bg-red-600 text-white rounded-xl m-4 shadow-lg"
            onClick={handelSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderLogo;
