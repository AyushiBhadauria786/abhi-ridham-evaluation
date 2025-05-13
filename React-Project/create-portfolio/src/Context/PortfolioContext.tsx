import React, { createContext, useContext, useState } from 'react';

export interface BasicData {
  FullName: string;
  Headline: string;
  Email: string;
  Website: string;
  Phone: number | string;
  Location: string;
  Summary: string;
}

interface PortfolioContextType {
  basicData: BasicData | null;
  setBasicData: (data: BasicData) => void | null;
  sectionData: Record<string, any[]>;
  setSectionData: React.Dispatch<React.SetStateAction<Record<string, any[]>>>


}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [basicData, setBasicData] = useState<BasicData | null>(null);
  const [sectionData, setSectionData] = useState<Record<string, any[]>>({});
  

  return (
    <PortfolioContext.Provider value={{ basicData, setBasicData, sectionData, setSectionData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return context;
};
