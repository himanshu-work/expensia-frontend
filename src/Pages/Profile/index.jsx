import React, { useEffect, useState } from "react";
import Navbar from "../../components/core/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Store/reducers/user";
import { selectUserData } from "../../Store/selectors/user";
import ChangePassword from "./ChangePassword";
import ProfileImage from "./ProfileImage";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { uploadImageApi } from "../../api/authService";

export const Profile = () => {
  const [isChangingPhoto, setIsChangingPhoto] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });
  const user = useSelector(selectUserData);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(true);

  function changeIsResetPasswordOpen() {
    setIsResetPasswordOpen((prev) => !prev);
  }
  function submitUserData(userData) {
    console.log(userData);
  }

  const handleImageUpload = async (file) => {
    try {
      await uploadImageApi(file);
      // Optionally, update the user data or perform other actions after a successful upload
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Image upload failed:", error);
      // Handle errors
    }
  };
  return (
    <div className="nav-app">
      <Navbar label="Profile" />
      <div className="app-wrapper flex gap-16 justify-center">
        <div className="profile-card2 mb-10">
          <div className="flex justify-center">
            <p className="text-lg text-center pb-3 border-b-2 w-40">
              Expensia User
            </p>
          </div>

          <div className="flex items-center justify-around mb-10 relative mt-5">
            <div className="float-edit-btn">
              <Edit
                className="w-5 cursor-pointer"
                onClick={() => {
                  setIsChangingPhoto((prev) => !prev);
                }}
              />
            </div>
            <ProfileImage classes={"w-32 h-32 rounded-full"} />
            <div>
              <p className="text-xl px-10 capitalize text-zinc-300">
                {user?.name}
              </p>
              <p className="text-md px-10 capitalize text-zinc-300">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="flex-col">
            {isChangingPhoto ? (
              <form className="py-5 w-min flex">
                <input
                  type="file"
                  className="text-sm upload-btn-custom"
                  onChange={(e) => handleImageUpload(e.target.files[0])}
                />
                <button className="upload-btn">Upload Image</button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="profile-card2">
          <div>
            <div className="flex justify-center">
              <p className="text-lg text-center pb-3 border-b-2 w-72">
                Password & Security
              </p>
            </div>
          </div>

          <div></div>
          {isResetPasswordOpen ? (
            <div>
              <p className="pt-4 mt-5">You can change your password</p>
              <button
                className="text-xs anchor-link"
                onClick={() => setIsResetPasswordOpen(false)}
              >
                Change password
              </button>
            </div>
          ) : (
            <ChangePassword
              userData={userData}
              submitUserData={submitUserData} // Fix prop name
              setUserData={setUserData} // Pass setUserData prop
              changeIsResetPasswordOpen={changeIsResetPasswordOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};
