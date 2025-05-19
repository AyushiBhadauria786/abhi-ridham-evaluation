import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider } from '../context/FormContext';
import Projects from '../components/Projects';
import '@testing-library/jest-dom';
import AddNewItem from '../components/AddNewItem';


describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})


describe('Project', () => {
    it('Project Component render on the screen', () => {
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        )
        screen.debug();
    })

    it('Heading is render on the screen', () => {
        render(
            <FormProvider>
                <Projects />-
            </FormProvider>
        )
        expect(screen.getByText('Projects')).toBeInTheDocument();
    })

    it('A AddNewItem Render on screen', () => {
        render(
            <FormProvider>
                <AddNewItem sectionName={'Projects'} />
            </FormProvider>
        )
        screen.debug();
    })
})



describe("Projects Section", () => {
    it("Render Projects Component", () => {
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        )
        expect(screen.getByText('Projects')).toBeInTheDocument();
    })

    it('renders opening modal', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        )
        await user.click(screen.getByRole('button', { name: /Add New Item/i }))
    })


    it('labels is render on screen', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        )
        await user.click(screen.getByRole('button', { name: /Add New Item/i }))


        expect(await screen.findByLabelText('Project Name')).toBeInTheDocument();
        expect(await screen.findByLabelText('Description')).toBeInTheDocument();
        expect(await screen.findByLabelText('Date or Date Range')).toBeInTheDocument();
        expect(await screen.findByLabelText('Project Link')).toBeInTheDocument();
    })



    it('allow editing all input', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        );

        await user.click(screen.getByRole('button', { name: /Add New Item/i }));

        const Projectname = await screen.findByLabelText('Project Name');
        const description = await screen.findByLabelText('Description');
        const date = await screen.findByLabelText('Date or Date Range');
        const Projectlink = await screen.findByLabelText('Project Link');





        await user.type(Projectname, 'Task-Management');
        await user.type(description, 'We Can Add,Delete and Edit Task');
        await user.type(date, '15,may 2025');
        await user.type(Projectlink, 'www.project.com');



        expect(Projectname).toHaveValue('Task-Management');
        expect(description).toHaveValue('We Can Add,Delete and Edit Task');
        expect(date).toHaveValue('15,may 2025');
        expect(Projectlink).toHaveValue('www.project.com');

    })




    it('shows validation errors for empty fields', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        )

        await user.click(screen.getByRole('button', { name: /Add New Item/i }));

        const submit = screen.getByRole('button', { name: /add item|save changes/i });
        await user.click(submit);

        expect(await screen.findByText(/Project name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Description is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Project url is required/i)).toBeInTheDocument();


    })


    it('show error for invalid Projectname', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        );

        await user.click(screen.getByRole('button', { name: /Add New Item/i }))

        const Projectname = await screen.findByLabelText('Project Name');
        await user.type(Projectname, 'Task-Management')

        const submit = screen.getByRole('button', { name: /add item|save changes/i })
        await user.click(submit);


        expect(await screen.findByText(/Description is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Project url is required/i)).toBeInTheDocument();
    })


    it('show error for invalid description', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        );

        await user.click(screen.getByRole('button', { name: /Add New Item/i }))

        const description = await screen.findByLabelText('Description');
        await user.type(description, 'We Can Add,Delete and Edit Task')

        const submit = screen.getByRole('button', { name: /add item|save changes/i })
        await user.click(submit);


        expect(await screen.findByText(/Project name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Project url is required/i)).toBeInTheDocument();
    })




    it('show error for invalid date', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        );

        await user.click(screen.getByRole('button', { name: /Add New Item/i }))

        const date = await screen.findByLabelText('Date or Date Range');
        await user.type(date, '15,may 2025')

        const submit = screen.getByRole('button', { name: /add item|save changes/i })
        await user.click(submit);


        expect(await screen.findByText(/Project name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Description is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Project url is required/i)).toBeInTheDocument();
    })


    it('show error for invalid Projectlink', async () => {
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects />
            </FormProvider>
        );

        await user.click(screen.getByRole('button', { name: /Add New Item/i }))

        const Projectlink = await screen.findByLabelText('Project Link');
        await user.type(Projectlink, 'www.project.com')

        const submit = screen.getByRole('button', { name: /add item|save changes/i })
        await user.click(submit);


        expect(await screen.findByText(/Project name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Description is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
    })


    it('Enter wrong url and error render on screen',async()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects/>
            </FormProvider>
        );

        await user.click(screen.getByRole('button',{name: /Add New Item/i}));

        const Projectlink = await screen.findByLabelText('Project Link');
        await user.type(Projectlink,"anything");

        const submit = screen.getByRole('button', { name: /add item|save changes/i });
        await user.click(submit)

        expect(await screen.findByText(/Input must be www.example.com/i)).toBeInTheDocument();
        expect(await screen.findByText(/Project name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Description is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
    })


    
    it('Enter other all values and wrong url and see error render on screen',async()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Projects/>
            </FormProvider>
        );

        await user.click(screen.getByRole('button',{name: /Add New Item/i}));



        const Projectname = await screen.findByLabelText('Project Name');
        const description = await screen.findByLabelText('Description');
        const date = await screen.findByLabelText('Date or Date Range');
        const Projectlink = await screen.findByLabelText('Project Link');


        await user.type(Projectname, 'Task-Management');
        await user.type(description, 'We Can Add,Delete and Edit Task');
        await user.type(date, '15,may 2025');
        await user.type(Projectlink, 'anything');

        const submit = screen.getByRole('button', { name: /add item|save changes/i });
        await user.click(submit)


        

        expect(await screen.findByText(/Input must be www.example.com/i)).toBeInTheDocument();
      
       
    })


})
