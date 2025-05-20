import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { FormProvider } from "../context/FormContext"
import Experience from "../components/Experience"
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import PreviewForm from "../pages/PreviewForm";
import { MemoryRouter, Route, Routes } from "react-router";
import CreateForm from "../pages/CreateForm";




describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})

describe('previewForm', () => {
    it('PreviewForm rendering on the screen', () => {
        render(
            <MemoryRouter>
                <FormProvider>
                    <PreviewForm />
                </FormProvider>
            </MemoryRouter>
        )
        screen.debug();
    })

    it("Heading is render on screeen", () => {
        render(
            <MemoryRouter>
                <FormProvider>
                    <PreviewForm />
                </FormProvider>
            </MemoryRouter>
        )
        expect(screen.getByText('Profile Preview')).toBeInTheDocument();
    })

    it("should show back button", () => {
        render(
            <MemoryRouter>
                <FormProvider>
                    <PreviewForm />
                </FormProvider>
            </MemoryRouter>
        );

        expect(screen.getByRole("button", { name: /back to form/i })).toBeInTheDocument();
    });

    it("should not render any preview section if formData is empty", () => {
        render(
            <MemoryRouter>
                <FormProvider>
                    <PreviewForm />
                </FormProvider>
            </MemoryRouter>
        );


        expect(screen.queryByTestId("preview-page")).not.toBeInTheDocument();
    });

    it("should navigate from CreateForm to PreviewForm", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={["/create"]}>
                <FormProvider>
                    <Routes>
                        <Route path="/create" element={<CreateForm />} />
                        <Route path="/preview" element={<PreviewForm />} />
                    </Routes>
                </FormProvider>
            </MemoryRouter>
        );

        const previewButton = screen.getByRole("button", { name: /preview profile/i });
        await user.click(previewButton);

        expect(await screen.findByText("Profile Preview")).toBeInTheDocument();
    });

    it("renders basics section with full name and headline", () => {
  const mockFormData = {
    Basics: {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      location: "New York",
      website: "https://johndoe.com",
      summary: "Experienced software developer",
      headline: "Frontend Developer"
    },
    Profiles: [],
    Experience: [],
    Education: [],
    Projects: [],
    Skills: []
  };
  

  render(
    <MemoryRouter>
      <FormProvider initialData={mockFormData}>
        <PreviewForm />
      </FormProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  expect(screen.getByText(/Email:/)).toBeInTheDocument();
  expect(screen.getByText(/Phone:/)).toBeInTheDocument();
  expect(screen.getByText(/Location:/)).toBeInTheDocument();
  expect(screen.getByText("https://johndoe.com")).toBeInTheDocument();
  expect(screen.getByText("Summary")).toBeInTheDocument();
  expect(screen.getByText("Experienced software developer")).toBeInTheDocument();
});


it("renders profiles section if profiles exist", () => {
  const mockFormData = {
    Basics: undefined,
    Profiles: [
      { network: "LinkedIn", username: "johndoe", url: "https://linkedin.com/in/johndoe" }
    ],
    Experience: [],
    Education: [],
    Projects: [],
    Skills: []
  };

  render(
    <MemoryRouter>
      <FormProvider initialData={mockFormData}>
        <PreviewForm />
      </FormProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Profiles")).toBeInTheDocument();
  expect(screen.getByText(/LinkedIn/)).toBeInTheDocument();
});


it("renders skills section correctly", () => {
    const mockFormData = {
      Basics: undefined,
      Profiles: [],
      Experience: [],
      Education: [],
      Projects: [],
      Skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" }
      ]
    };
  
    render(
      <MemoryRouter>
        <FormProvider initialData={mockFormData}>
          <PreviewForm />
        </FormProvider>
      </MemoryRouter>
    );
  
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
  });

  it("renders website as a link in basics", () => {
    const mockFormData = {
      Basics: {
        fullName: "Jane Doe",
        email: "jane@example.com",
        phone: "9876543210",
        location: "Los Angeles",
        website: "https://janedoe.dev",
        summary: "",
        headline: "Backend Developer"
      },
      Profiles: [],
      Experience: [],
      Education: [],
      Projects: [],
      Skills: []
    };
  
    render(
      <MemoryRouter>
        <FormProvider initialData={mockFormData}>
          <PreviewForm />
        </FormProvider>
      </MemoryRouter>
    );
  
    const link = screen.getByRole("link", { name: /https:\/\/janedoe.dev/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://janedoe.dev");
  });

  
  it("renders all section titles when each section has data", () => {
    const mockFormData = {
      Basics: {
        fullName: "Alice Smith",
        email: "alice@example.com",
        phone: "1111111111",
        location: "Seattle",
        website: "",
        summary: "",
        headline: "Full Stack Engineer"
      },
      Profiles: [{ network: "GitHub", username: "alice", url: "https://github.com/alice" }],
      Experience: [{ company: "TechCorp", position: "Dev", startDate: "2020", endDate: "2021" }],
      Education: [{ institution: "Uni", degree: "BSc", startDate: "2015", endDate: "2019" }],
      Projects: [{ name: "Project A", description: "Cool stuff" }],
      Skills: [{ name: "Node.js", level: "Advanced" }]
    };
  
    render(
      <MemoryRouter>
        <FormProvider initialData={mockFormData}>
          <PreviewForm />
        </FormProvider>
      </MemoryRouter>
    );
  
    expect(screen.getByText("Profiles")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
  

   

})