import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface BasicData {
    FullName: string;
    Headline: string;
    Email: string;
    Website: string;
    Phone: number | string;
    Location: string;
    Summary: string;
  }

interface PortfolioState {
    basicData: BasicData | null;
    sectionData: Record<string, any[]>;
}

export const initialState: PortfolioState = {
    basicData: null,
    sectionData: {},
  };


const PortfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {

        setBasicData(state,action:PayloadAction<BasicData>){
            state.basicData = action.payload;
        },

        setSectionData(state,action:PayloadAction<Record<string, any[]>>){
            state.sectionData = action.payload;
        },

        addSectionitem(state,action:PayloadAction<{section:string;item:any}>){
            const {section,item} = action.payload;
            if(!state.sectionData[section]) {
            state.sectionData[section] = [];
            }
            state.sectionData[section].push(item);
        },

        resetForm(){
            return initialState;
        },
    },
});


export const {setBasicData,setSectionData,addSectionitem,resetForm} = PortfolioSlice.actions;

export default PortfolioSlice.reducer;