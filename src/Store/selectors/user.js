import { createSelector } from "@reduxjs/toolkit";

export const selectUserStore = (state) => {
  return state.user;
};

export const selectUserData = createSelector(
  selectUserStore,
  (userState) => userState.userData
);

export const selectUserImgSrc = createSelector(
  selectUserStore,
  (userState) => userState.imageSrc
);
