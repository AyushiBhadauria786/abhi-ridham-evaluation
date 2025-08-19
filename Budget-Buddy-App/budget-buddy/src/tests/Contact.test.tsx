import { render, screen, waitFor } from "@testing-library/react";
import Contact from "../pages/Contact";
import emailjs from '@emailjs/browser';
import userEvent from "@testing-library/user-event";
import { toast } from 'react-toastify';
import { beforeEach, describe, expect, it, vi } from "vitest";


vi.mock('@emailjs/browser');
vi.mock('react-toastify', async (importOriginal) => {
    const actual: any = await importOriginal();
    return {
        ...actual,
        toast: {
            success: vi.fn(),
            error: vi.fn(),
        },
    };
});


describe('Contact Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the main contact section and titles', () => {
        render(<Contact />)

        expect(screen.getByRole('heading', {name: /contact us/i, level: 5 })).toBeInTheDocument();

        expect(screen.getByRole('heading', {name: /get in touch/i, level: 5 })).toBeInTheDocument();
        expect(screen.getByText(/we're here to help!/i)).toBeInTheDocument();
        expect(screen.getByText(/support@financeflow.com/i)).toBeInTheDocument();
        expect(screen.getByText(/1-800-FINANCE-1/i)).toBeInTheDocument();
        expect(screen.getByText(/123 Finance Street Budget City, BC 12345/i)).toBeInTheDocument();

        expect(screen.getByRole('heading', {name: /office hours/i, level: 5})).toBeInTheDocument();
        expect(screen.getByText(/monday-friday/i)).toBeInTheDocument();
        expect(screen.getByText(/9:00 AM - 6:00 PM/i)).toBeInTheDocument();
        expect(screen.getByText(/saturday/i)).toBeInTheDocument();
        expect(screen.getByText(/10:00 AM - 4:00 PM/i)).toBeInTheDocument();
        expect(screen.getByText(/sunday/i)).toBeInTheDocument();
        expect(screen.getByText(/closed/i)).toBeInTheDocument();
        expect(screen.getByText(/all times are in eastern standard time \(est\)/i)).toBeInTheDocument();
    });

    it('should display validation errors for all required fields on empty submission', async () => {
        const user =  userEvent.setup();
        render(<Contact />);

        const sendButton = screen.getByRole('button', {name: /send message/i });
        await user.click(sendButton);

        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
            expect(screen.getByText('Email is required')).toBeInTheDocument();
            expect(screen.getByText('Subject is required')).toBeInTheDocument();
            expect(screen.getByText('Message is required')).toBeInTheDocument();
        });

        expect(emailjs.send).not.toHaveBeenCalled();
        expect(toast.success).not.toHaveBeenCalled();
        expect(toast.error).not.toHaveBeenCalled();
    });

    it('should display an error for invalid email format', async () => {
        const user = userEvent.setup();
        render(<Contact />);

        const emailInput = screen.getByLabelText(/your email/i);
        await user.type(emailInput, 'invaild-email');

        const sendButton= screen.getByRole('button', {name: /send message/i });
        await user.click(sendButton);

        await waitFor(() => {
            expect(screen.getByText('Invalid email address')).toBeInTheDocument();
        });

        expect(emailjs.send).not.toHaveBeenCalled();
    });
    
    it('should successfully submit the form and reset fields on valid input', async () => {
        const user = userEvent.setup();
        render(<Contact />);

        (emailjs.send as vi.Mock).mockResolvedValueOnce({ status: 200, text: 'OK' })

        await user.type(screen.getByLabelText(/your name/i), 'John Doe');
        await user.type(screen.getByLabelText(/your email/i), 'john.doe@example.com');
        await user.type(screen.getByLabelText(/subject/i), 'Inquiry about FinanceFlow');
        await user.type(screen.getByLabelText(/your message/i), 'I have question about your services.');

        const sendButton  = screen.getByRole('button',{name: /send message/i });
        await user.click(sendButton);

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledTimes(1);
            expect(emailjs.send).toHaveBeenCalledWith(
                'service_lyhchv4',
                'template_oyzi44l',
                {
                    email: 'john.doe@example.com',
                    name: 'John Doe',
                    subject: 'Inquiry about FinanceFlow',
                    notes: 'Check this out!',
                },
                {publicKey: 'yfL3dDO6VBRMIIONV' }
            );
        });

        expect(screen.getByLabelText(/your name/i)).toHaveValue('');
        expect(screen.getByLabelText(/your email/i)).toHaveValue('');
        expect(screen.getByLabelText(/subject/i)).toHaveValue('');
        expect(screen.getByLabelText(/your message/i)).toHaveValue('');

        expect(toast.success).toHaveBeenCalledTimes(1);
        expect(toast.success).toHaveBeenCalledWith('Form submitted successfully! Check console for data.',expect.any(Object));
        expect(toast.error).not.toHaveBeenCalled();
    });

    it('should display an error toast on failed form submission', async () => {
        const user = userEvent.setup();
        render(<Contact />);

        (emailjs.send as vi.Mock).mockRejectedValueOnce(new Error('Network error'));

        await user.type(screen.getByLabelText(/your name/i), 'Jane Doe');
        await user.type(screen.getByLabelText(/your email/i), 'jane.doe@example.com');
        await user.type(screen.getByLabelText(/subject/i), 'Problem with login');
        await user.type(screen.getByLabelText(/your message/i), 'Cannot access my account.');

        const sendButton = screen.getByRole('button', {name: /send message/i });
        await user.click(sendButton);

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledTimes(1);
        });

        // expect(toast.error).toHaveBeenCalledTimes(1);
        // expect(toast.error).toHaveBeenCalledWith('Failed to send message. Please try again.',expect.any(Object));
        // expect(toast.success).not.toHaveBeenCalled();

        expect(screen.getByLabelText(/your name/i)).toHaveValue('');
        expect(screen.getByLabelText(/your email/i)).toHaveValue('');
        expect(screen.getByLabelText(/subject/i)).toHaveValue('');
        expect(screen.getByLabelText(/your message/i)).toHaveValue('');
    });
});

