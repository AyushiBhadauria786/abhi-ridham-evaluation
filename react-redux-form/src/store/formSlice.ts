import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalFormData, BasicData, SectionData, ListSectionName } from '../types/type'; 
import { createSelector } from 'reselect';
import { RootState } from './store';

interface FormState {
  formData: GlobalFormData;
}

const initialState: FormState = {
  formData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateBasicsData: (state, action: PayloadAction<BasicData>) => {
      state.formData.Basics = action.payload;
    },
    addListItemData: (state, action: PayloadAction<{ section: ListSectionName; data: SectionData }>) => {
      const { section, data } = action.payload;
      if (!state.formData[section]) {
        state.formData[section] = [] as SectionData[];
      }

      (state.formData[section] as SectionData[]).push(data);
    },
    updateListItemData: (state, action: PayloadAction<{ section: ListSectionName; index: number; data: SectionData }>) => {
      const { section, index, data } = action.payload;
      const sectionArray = state.formData[section] as SectionData[] | undefined;
      if (sectionArray && index >= 0 && index < sectionArray.length) {
        sectionArray[index] = data;
      }
    },
    deleteListItemData: (state, action: PayloadAction<{ section: ListSectionName; index: number }>) => {
      const { section, index } = action.payload;
      const sectionArray = state.formData[section] as SectionData[] | undefined;
      if (sectionArray) {
        state.formData[section] = sectionArray.filter((_, i) => i !== index);
      }
    },
    resetAllFormData: (state) => {
      console.log("Resetting all data");
      state.formData = {};
    },
  },
});

export const {
  updateBasicsData,
  addListItemData,
  updateListItemData,
  deleteListItemData,
  resetAllFormData,
} = formSlice.actions;


export const selectFormData = (state: { form: FormState }) => state.form.formData;
export const selectBasicsData = (state: { form: FormState }) => state.form.formData.Basics;
export const selectListSectionItems = (state: { form: FormState }, sectionName: ListSectionName): SectionData[] =>
  ((state.form.formData[sectionName] as SectionData[] | undefined) || []); 

export const selectListItem = (state: { form: FormState }, sectionName: ListSectionName, index: number): SectionData | undefined =>
  ((state.form.formData[sectionName] as SectionData[] | undefined)?.[index]);

export default formSlice.reducer;