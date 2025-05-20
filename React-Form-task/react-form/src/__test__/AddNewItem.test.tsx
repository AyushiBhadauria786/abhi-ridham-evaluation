// import { render, screen, fireEvent } from "@testing-library/react";
// import AddNewItem from "../components/AddNewItem";
// import { beforeEach, describe, expect, it, vi } from "vitest";
// import { ListSectionName, SectionData } from "../types/type";


// vi.mock("../Modal/CommonModal", () => ({
//   default: ({ open, onClose }: any) =>
//     open ? (
//       <div data-testid="common-modal">
//         Mock Modal
//         <button onClick={onClose}>Close</button>
//       </div>
//     ) : null,
// }));

// const mockUseFormContext = vi.fn();

// vi.mock("../context/FormContext", async () => {
//   const actual = await import("../context/FormContext");
//   return {
//     ...actual,
//     useFormContext: mockUseFormContext,
//   };
// });

// const mockDelete = vi.fn();
// const mockGetItem = vi.fn();

// const mockData: Record<ListSectionName, SectionData[]> = {
//   Education: [{ degree: "B.Sc", institution: "ABC University", year: "2022" }],
//   Experience: [],
//   Skills: [],
//   Projects: [],
//   Profiles: [],
// };

// describe("AddNewItem", () => {
//   beforeEach(() => {
//     mockUseFormContext.mockReturnValue({
//       formData: mockData,
//       deleteListItemData: mockDelete,
//       getListItem: mockGetItem.mockImplementation((section, index) => {
//         return mockData[section as ListSectionName]?.[index] || null;
//       }),
//     });

//     vi.clearAllMocks();
//   });

//   it("renders list items correctly", () => {
//     render(<AddNewItem sectionName="Education" />);
//     expect(screen.getByText(/degree/i)).toBeInTheDocument();
//     expect(screen.getByText(/B\.Sc/i)).toBeInTheDocument();
//     expect(screen.getByText(/institution/i)).toBeInTheDocument();
//     expect(screen.getByText(/ABC University/i)).toBeInTheDocument();
//   });

//   it("opens modal when 'Add New Item' is clicked", () => {
//     render(<AddNewItem sectionName="Education" />);
//     const addButton = screen.getByRole("button", { name: /add new item/i });
//     fireEvent.click(addButton);
//     expect(screen.getByTestId("common-modal")).toBeInTheDocument();
//   });

//   it("calls getListItem and opens modal when edit button is clicked", () => {
//     render(<AddNewItem sectionName="Education" />);
//     const editButton = screen.getByLabelText("Edit education item 1");
//     fireEvent.click(editButton);
//     expect(mockGetItem).toHaveBeenCalledWith("Education", 0);
//     expect(screen.getByTestId("common-modal")).toBeInTheDocument();
//   });

//   it("calls delete function when delete button is clicked", () => {
//     render(<AddNewItem sectionName="Education" />);
//     const deleteButton = screen.getByLabelText("Delete education item 1");
//     fireEvent.click(deleteButton);
//     expect(mockDelete).toHaveBeenCalledWith("Education", 0); 
//   });

//   it("closes modal when modal close is triggered", () => {
//     render(<AddNewItem sectionName="Education" />);
//     fireEvent.click(screen.getByRole("button", { name: /add new item/i }));
//     expect(screen.getByTestId("common-modal")).toBeInTheDocument();

//     fireEvent.click(screen.getByText(/close/i));
//     expect(screen.queryByTestId("common-modal")).not.toBeInTheDocument();
//   });
// });
