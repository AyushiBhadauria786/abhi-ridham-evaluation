import { describe, it, expect } from "vitest";
import reducer from "../Slice/portfolioSlice";
import {
  setBasicData,
  setSectionData,
  addSectionitem,
  resetForm,
} from "../Slice/portfolioSlice";
import type { BasicData } from "../Slice/portfolioSlice";

const mockData: BasicData = {
  FullName: "Ridham Kansara",
  Headline: "Trainee Developer",
  Email: "rk@gmail.com",
  Website: "www.github.com",
  Phone: "1234567890",
  Location: "Ahmedabad",
  Summary: "Fresher in experience",
};

describe("ProtfolioSlice", () => {
  it("should return the initial state", () => {
      expect(reducer(undefined, { type: "undefined" })).toEqual({
        basicData: null,
        sectionData: {},
      });
    });

    it("should handle setBasicdata", () => {
        const state = reducer(undefined, setBasicData(mockData))
        expect(state.basicData).toEqual(mockData);
    });

    it("should handle setSectiondata", () => {
        const expectSectionData = {
            Profiles: [{network: "Github", username: "gitusername", website: "www.anyurl.com"}],
            Experience: [{company: "Ignek", position: "Trainee Developer" }]
        }
        const sectionState = reducer(undefined , setSectionData(expectSectionData))
        expect(sectionState.sectionData).toEqual(expectSectionData);
    });

});
