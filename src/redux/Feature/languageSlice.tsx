import {createSlice} from '@reduxjs/toolkit';
import english from '../../shared/I18Folder/english.json';
import spanish from '../../shared/I18Folder/spanish.json';

const initialState = {
  id: 0,
  value: english,
};

export const languageSlice = createSlice({
  name: 'authSlice',

  initialState,
  reducers: {
    toggle: (state, action) => {
      state.id = action.payload;
      state.value = action.payload === 1 ? spanish : english;
    },
  },
});

export const {toggle} = languageSlice.actions;

export default languageSlice.reducer;
