import {createSlice} from '@reduxjs/toolkit';
import english from '../../shared/i18LanguagesFolder/english.json';
import japanese from '../../shared/i18LanguagesFolder/japanese.json';

const initialState = {
  value: null,
  selection: english,
};

export const appSlice = createSlice({
  name: 'appSlice',

  initialState,
  reducers: {
    languageToggle: (state, action) => {
      state.value = action.payload;
      state.selection = action.payload == 'english' ? english : japanese;
    },
  },
});

export const {languageToggle} = appSlice.actions;

export default appSlice.reducer;
