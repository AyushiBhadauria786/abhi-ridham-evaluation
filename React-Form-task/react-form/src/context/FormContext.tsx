import React, { createContext, useState, useContext, useCallback } from 'react';
import { GlobalFormData,SectionName,SectionData, BasicData } from '../types/type';

type ListSectionName = Exclude<SectionName, 'Basics'>;

interface FormContextType {
  formData: GlobalFormData;
  updateBasicsData: (data: BasicData) => void;
  addListItemData: (section: ListSectionName, data: SectionData) => void;
  updateListItemData: (section: ListSectionName, index: number, data: SectionData) => void;
  deleteListItemData: (section: ListSectionName, index: number) => void;
  getListItem: (section: ListSectionName, index: number) => SectionData | undefined;
  resetAllFormData: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<GlobalFormData>({});

  const updateBasicsData = useCallback((data: BasicData) => {
    setFormData((prev) => ({
      ...prev,
      Basics: data, 
    }));
  }, []);

  const addListItemData = useCallback((section: ListSectionName, data: SectionData) => {
    setFormData((prev) => {
      const currentSectionData = prev[section] || [];
      return {
        ...prev,
        [section]: [...currentSectionData, data],
      };
    });
  }, []);

  const updateListItemData = useCallback((section: ListSectionName, index: number, data: SectionData) => {
    setFormData((prev) => {
      const currentSectionData = [...(prev[section] || [])]; 
      if (index >= 0 && index < currentSectionData.length) {
        currentSectionData[index] = data; 
      }
      return {
        ...prev,
        [section]: currentSectionData,
      };
    });
  }, []);

  const deleteListItemData = useCallback((section: ListSectionName, index: number) => {
    setFormData((prev) => {
      const currentSectionData = prev[section] || [];
      const updatedSectionData = currentSectionData.filter((_, i) => i !== index); 
      return {
        ...prev,
        [section]: updatedSectionData,
      };
    });
  }, []);

  const getListItem = useCallback((section: ListSectionName, index: number): SectionData | undefined => {
    const sectionData = formData[section];
    return sectionData?.[index];
}, [formData]);

const resetAllFormData = useCallback(() => {
  console.log("Resetting all form data"); 
  setFormData({}); 
}, []);


  return (
    <FormContext.Provider value={{
      formData,
      updateBasicsData,
      addListItemData,
      updateListItemData,
      deleteListItemData,
      getListItem,
      resetAllFormData
   }}>
    {children}
  </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useFormContext must be used within FormProvider');
  return context;
};
