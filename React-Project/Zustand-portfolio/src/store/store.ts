import { create } from "zustand";
import { set } from "react-hook-form";



export interface BasicData {
    FullName: string;
    Headline: string;
    Email: string;
    Website: string;
    Phone: number | string;
    Location: string;
    Summary: string;
  }
  

interface useStore {
    basicData: BasicData | null;
    sectionData: Record<string, any[]>;
    setBasicData: (data: BasicData) => void;
    setSectionData: (data: Record<string, any[]>) => void;
    addSectionItem: (section: string, item: any) => void;
    resetForm: () => void;
  }

  const initialState = {
    basicData: null,
    sectionData: {},
  };


  export const useStore = create<useStore>((set) => ({
    ...initialState,
  
    setBasicData: (data: BasicData) => set({ basicData: data }),
  
    setSectionData: (data: Record<string, any[]>) => set({ sectionData: data }),
  
    addSectionItem: (section: string, item: any) =>
      set((state) => ({
        sectionData: {
          ...state.sectionData,
          [section]: [...(state.sectionData[section] || []), item],
        },
      })),
  
    resetForm: () => set(initialState),
  }));