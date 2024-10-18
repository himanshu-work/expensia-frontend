import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectModalIsOpen } from "../../../Store/selectors/modal";
import {
  selectUserData,
  selectUserImgSrc,
} from "../../../Store/selectors/user";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";
import Modal from "../../Modal";
import TooltipEx from "../Tooltip";
import { fetchImageApi } from "../../../api/authService";
import { setImageSrc } from "../../../Store/reducers/user";
import ProfileImage from "../../../Pages/Profile/ProfileImage";
function Navbar({ label }) {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalIsOpen);
  // console.log(isOpen);
  const navigator = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    // Fetch the image from the server
    fetchImageApi()
      .then((imageUrl) => {
        dispatch(setImageSrc(imageUrl));
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  const imageSrc = useSelector(selectUserImgSrc);

  return (
    <div>
      {isOpen ? <Modal /> : null}
      <div className="navbar flex justify-between px-6 items-center	">
        <p className="text-s font-bold">{label}</p>
        <div className="flex items-center gap-3">
          <a className="cursor-pointer " onClick={() => navigator("/profile")}>
            <div className={`relative flex border-2 rounded-full`}>
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Downloaded Image"
                  className={`w-8 h-8 object-cover rounded-full`}
                />
              ) : (
                <div>
                  <Person className="w-6 h-6" />
                </div>
              )}
            </div>
          </a>
          <p className="cursor-pointer " onClick={() => navigator("/profile")}>
            Hi, {userData.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
