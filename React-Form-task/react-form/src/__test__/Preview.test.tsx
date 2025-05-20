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


    it("should fill form, navigate to preview, and render all sections", async () => {
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

        // Fill Basics Section
        await user.type(screen.getByLabelText(/Full Name/i), "John Doe");
        await user.type(screen.getByLabelText(/Email/i), "abhibutani@gmail.com");
        await user.type(screen.getByLabelText(/Phone/i), "1234567890");
        await user.type(screen.getByLabelText(/Location/i), "New York");
        await user.type(screen.getByLabelText(/Headline/i), "Full Stack Developer");
        await user.type(screen.getByLabelText(/Website/i), "www.abhi.com");

        // Navigate to preview
        await user.click(screen.getByRole("button", { name: /Add Details/i }));
        await user.click(screen.getByRole("button", { name: /Preview Profile/i }));

        screen.debug();

        //  Assertions
        await waitFor(() => {
            expect(screen.queryByText(/1234567890/i)).toBeInTheDocument();
          });
          
        expect(screen.getByText("John Doe")).toBeInTheDocument(); // sync
        expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
        expect(screen.getByText(/abhibutani@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/New York/)).toBeInTheDocument();
        expect(screen.getByText(/www.abhi.com/)).toBeInTheDocument();

    });

})