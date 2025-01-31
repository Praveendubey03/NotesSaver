import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const storedPastes = localStorage.getItem("pastes");

let pastes = [];
if (storedPastes) {
  try {
    pastes = JSON.parse(storedPastes);
  } catch (error) {
    console.error("Error parsing stored Notes:", error);
    pastes = [];
  }
}

const initialState = {
  pastes: pastes,
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Note Created Successfully");
    },
    updateToPastes: (state, action) => {
      // Your logic here
      const paste = action.payload;
      const index = state.pastes.findIndex((item) =>
      item._id === paste._id);
      if(index >= 0){
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Note updated")
      }
    },
    resetAllPastes: (state, action) => {
      // Your logic here
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      // Your logic here
      const pasteId = action.payload;
      
      console.log(pasteId);
      const index = state.pastes.findIndex((item) =>
      item._id === pasteId);
      if(index >= 0){
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", JSON.stringify
          (state.pastes));

          toast.success("Note deleted");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateToPastes, addToPastes, removeFromPastes, resetAllPastes } = pasteSlice.actions;

export default pasteSlice.reducer;
