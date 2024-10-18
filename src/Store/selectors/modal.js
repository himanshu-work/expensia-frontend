import { createSelector } from "@reduxjs/toolkit";

export const selectModalState = (state) => state.modal;

export const selectModalIsOpen = createSelector(
  selectModalState,
  (modalState) => modalState?.isModalOpen
);

export const selectModalData = createSelector(
  selectModalState,
  (modalState) => modalState?.data
);

export const selectModalType = createSelector(
  selectModalState,
  (modalState) => modalState?.type
);

export const selectModalIsEditing = createSelector(
  selectModalState,
  (modalState) => modalState?.isEditing
);
