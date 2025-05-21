import { describe, it, vi, expect, beforeEach } from "vitest";
import Preview from "../component/Preview";
import { render, screen, fireEvent } from "@testing-library/react";
import { usePortfolio } from "../Context/PortfolioContext";
import { Route, Routes, useNavigate, MemoryRouter } from "react-router";



vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return {
        ...actual,
        useNavigate: vi.fn(),
    };
});

vi.mock('../Context/PortfolioContext', () => ({
    usePortfolio: vi.fn(),
}));


describe('Preview Component', () => {
    const mockNavigate = vi.fn();

    const mockSetBasicData = vi.fn();
    const mockSetSectionData = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    
        (usePortfolio as unknown as vi.Mock).mockReturnValue({
            basicData: {
                FullName: 'John Doe',
                Email: 'john@exaple.com',
            },
            sectionData: {
                Experience: [
                    { Company: 'XYZ', Role: 'Developer' },
                ]
            },
            setBasicData: mockSetBasicData, 
            setSectionData: mockSetSectionData,
        });
    
        (useNavigate as vi.Mock).mockReturnValue(mockNavigate);
    });


    it('renders basic information and section data', () => {
        render(
            <MemoryRouter>
                <Preview />
            </MemoryRouter>
        );

        expect(screen.getByText('Basic Information')).toBeInTheDocument();
        expect(screen.getByText('FullName:')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();

        expect(screen.getByText('Experience')).toBeInTheDocument();
        expect(screen.getByText('Company:')).toBeInTheDocument();
        expect(screen.getByText('XYZ')).toBeInTheDocument();
    });

    it('navigates back on "Back" button click', () => {
        render(
            <MemoryRouter>
                <Preview />
            </MemoryRouter>
        )

        const backButton = screen.getByRole('button', { name: /back/i });
        fireEvent.click(backButton);

        expect(mockNavigate).toHaveBeenCalledWith('/form');
    })


    it('reset data on "Done" button click and navigate to home', () => {
        render(
            <MemoryRouter>
                <Preview />
            </MemoryRouter>
        )

        const doneButton = screen.getByRole('button', { name: /Done/i });
        fireEvent.click(doneButton)

        expect(mockSetBasicData).toHaveBeenCalledWith({
            FullName: '',
            Headline: '',
            Email: '',
            Website: '',
            Phone: '',
            Location: '',
            Summary: '',
        });

        expect(mockSetSectionData).toHaveBeenCalledWith({ });
        expect(mockNavigate).toHaveBeenCalledWith('/');

    })
});
