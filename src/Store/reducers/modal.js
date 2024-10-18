import { createSlice } from "@reduxjs/toolkit";
import { CATEGORY_CONFIG_MODAL } from "../../components/Modal/categoryConfig";

const initState = {
  isModalOpen: false,
  data: {
    id: null,
    amount: 0,
    date: "",
    category: "",
    description: "",
    type: "",
    oldType: "",
  },
  isEditing: false,
  type: "income",
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = true;
    },
    closeIsModalOpen: (state, action) => {
      state.isModalOpen = false;
    },
    setModalData: (state, action) => {
      state.data = action.payload;
    },
    resetModalData: (state, action) => {
      state.data = CATEGORY_CONFIG_MODAL[action.payload]?.defaultData;
    },
    setModalType: (state, action) => {
      // console.log(action.payload);
      state.type = action.payload;
    },
    setModalIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
  },
});

export const {
  setIsModalOpen,
  closeIsModalOpen,
  setModalData,
  resetModalData,
  setModalType,
  setModalIsEditing,
} = modalSlice.actions;
export default modalSlice.reducer;
