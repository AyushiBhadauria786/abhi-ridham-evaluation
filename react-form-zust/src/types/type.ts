export interface FormField {
    name: string;
    label: string;
    placeholder?: string;
    type: string;
    validation?: {
      required?: string | boolean;
    };
    multiline?: boolean;
    rows?: number;
  }

  export interface BasicData {
    fullName: string;
    headline: string;
    email: string;
    website?: string; 
    phone: string;
    location: string;
    summary?: string;
  }
  
  export type ListSectionName = Exclude<SectionName, 'Basics'>;


  export type SectionName = 'Basics' | 'Profiles' | 'Experience' | 'Education' | 'Skills' | 'Projects';  
  export type SectionData = Record<string, string | number | undefined>;
 
  export type GlobalFormData = {
    Basics?: BasicData; 
    Profiles?: SectionData[];
    Experience?: SectionData[];
    Education?: SectionData[];
    Skills?: SectionData[];
    Projects?: SectionData[];
  };
  