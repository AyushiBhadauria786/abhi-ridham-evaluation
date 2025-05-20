import React from "react";
import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import { MemoryRouter, useNavigate } from "react-router-dom";
import Form from "../component/Form";
import { PortfolioProvider } from "../Context/PortfolioContext";


vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    };
});

const setup = () => {
    return render(
        <MemoryRouter>
            <PortfolioProvider>
                <Form />
            </PortfolioProvider>
        </MemoryRouter>
    )
}

describe('Form Component', () => {
    it('renders all basic form fields', () => {
        setup();

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();    
    expect(screen.getByLabelText(/Headline/i)).toBeInTheDocument();    
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();    
    expect(screen.getByLabelText(/Website/i)).toBeInTheDocument();    
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();    
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();    
    expect(screen.getByLabelText(/Summary/i)).toBeInTheDocument();    
    });

    it('fills out form and navigate to Preview', async () => {
        setup();

    fireEvent.change(screen.getByLabelText(/Full Name/i), {target: {value: 'John Doe'}});
    fireEvent.change(screen.getByLabelText(/Headline/i), {target: {value: 'Mern Developer'}});
    fireEvent.change(screen.getByLabelText(/Email/i), {target: {value: 'john@example.com'}});
    fireEvent.change(screen.getByLabelText(/Website/i), {target: {value: 'https://example.com'}});
    fireEvent.change(screen.getByLabelText(/Phone/i), {target: {value: '1234567890'}});
    fireEvent.change(screen.getByLabelText(/Location/i), {target: {value: 'ABD'}});
    fireEvent.change(screen.getByLabelText(/Summary/i), {target: {value: 'I am a developer'}});
    
    const previewButton = screen.getByRole('button', {name: /Preview/i});
    fireEvent.click(previewButton);
    
    await waitFor(() => {
        expect(screen.queryByText(/FullName is required/i)).not.toBeInTheDocument();
    })      
});
})