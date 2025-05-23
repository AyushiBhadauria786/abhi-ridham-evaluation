import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Experience from "../components/Experience"
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import CreateForm from "../pages/CreateForm";
import { MemoryRouter, Route, Routes } from "react-router";
import PreviewForm from "../pages/PreviewForm";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { createSelector } from 'reselect';
import { RootState } from "../store/store";


describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})


describe('CreateForm', () => {
    it('Heading render on screen', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <CreateForm />
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('Build Your Profile')).toBeInTheDocument();
    })

    it('CreateForm Rendering on screen or not ', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <CreateForm />
                </Provider>
            </MemoryRouter>
        );
        screen.debug();
    })


    it('should render form sections', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <CreateForm />
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByTestId('basics-section')).toBeInTheDocument();
        expect(screen.getByTestId('profile-section')).toBeInTheDocument();
        expect(screen.getByTestId('experience-section')).toBeInTheDocument();
        expect(screen.getByTestId('education-section')).toBeInTheDocument();
        expect(screen.getByTestId('skills-section')).toBeInTheDocument();
        expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    });

    it('should navigate to preview page when Preview Profile is clicked', async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={["/create"]}>
                   <Provider store={store}>
                    <Routes>
                        <Route path="/create" element={<CreateForm />} />
                        <Route path="/preview" element={<PreviewForm />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );

        const previewButton = screen.getByRole('button', { name: /preview profile/i });
        await user.click(previewButton);

        expect(await screen.findByText('Profile Preview')).toBeInTheDocument();
    });


});







