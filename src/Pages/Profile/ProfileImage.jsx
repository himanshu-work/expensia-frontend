import React, { useEffect, useState } from "react";
import { fetchImageApi } from "../../api/authService";
import { useSelector } from "react-redux";
import { selectUserImgSrc } from "../../Store/selectors/user";
import { ReactComponent as Person } from "../../assets/icons/person.svg";

const ProfileImage = ({ classes }) => {
  const imageSrc = useSelector(selectUserImgSrc);

  return (
    <div className="w-full ">
      <div className={`relative flex rounded-full `}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Downloaded Image"
            className={`w-40 h-40 rounded-full`}
          />
        ) : (
          <div className={`${classes}`}>
            <Person className={`${classes}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
