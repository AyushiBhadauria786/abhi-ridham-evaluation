import { create } from 'zustand';
import { GlobalFormData, SectionName, SectionData, BasicData } from '../types/type';

type ListSectionName = Exclude<SectionName, 'Basics'>;

interface FormState {
  formData: GlobalFormData;
  updateBasicsData: (data: BasicData) => void;
  addListItemData: (section: ListSectionName, data: SectionData) => void;
  updateListItemData: (section: ListSectionName, index: number, data: SectionData) => void;
  deleteListItemData: (section: ListSectionName, index: number) => void;
  getListItem: (section: ListSectionName, index: number) => SectionData | undefined;
  resetAllFormData: () => void;
}

export const useFormStore = create<FormState>((set, get) => ({
  formData: {}, 

  updateBasicsData: (data) => set((state) => ({
    formData: {
      ...state.formData,
      Basics: data,
    }
  })),

  addListItemData: (section, data) => set((state) => {
    const currentSectionData = state.formData[section] || [];
    return {
      formData: {
        ...state.formData,
        [section]: [...currentSectionData, data],
      }
    };
  }),

  updateListItemData: (section, index, data) => set((state) => {
    const currentSectionData = [...(state.formData[section] || [])];
    if (index >= 0 && index < currentSectionData.length) {
      currentSectionData[index] = data;
    }
    return {
      formData: {
        ...state.formData,
        [section]: currentSectionData,
      }
    };
  }),

  deleteListItemData: (section, index) => set((state) => {
    const currentSectionData = state.formData[section] || [];
    const updatedSectionData = currentSectionData.filter((_, i) => i !== index);
    console.log('Deleted');
    return {
      formData: {
        ...state.formData,
        [section]: updatedSectionData,
        
      }
    };
  }),

  getListItem: (section, index) => {
    const sectionData = get().formData[section];
    return sectionData?.[index];
  },

  resetAllFormData: () => {
    console.log("Resetting all data ");
    set({ formData: {} });
  }
}));

