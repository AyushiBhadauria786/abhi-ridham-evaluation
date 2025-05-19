import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider } from '../context/FormContext';
import Skills from '../components/Skills';
import '@testing-library/jest-dom';
import AddNewItem from '../components/AddNewItem';


describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})


describe('Skills',()=>{
    it('Skill Component render on screen', ()=> {
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        )
        screen.debug();
    })

    it('Heading is render on screen',()=>{
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        )
        expect(screen.getByText('Skills')).toBeInTheDocument();
    })

    it('A AddNewItem component render on screeen',()=>{
        render(
            <FormProvider>
                <AddNewItem sectionName={'Skills'}/>
            </FormProvider>
        )
        screen.debug();
    })
})


describe('Skill Section',()=>{
    it('renders Skill component',()=>{
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        );
        expect(screen.getByText('Skills')).toBeInTheDocument();
    })


    it('renders form fields after opening modal', async()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        )
        await user.click(screen.getByRole('button',{name: /Add New Item/i}))
    })


    it('labels is render on screen',async ()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        )
        await user.click(screen.getByRole('button',{name: /Add New Item/i}))


        expect(await screen.findByLabelText('Skill Name')).toBeInTheDocument();
        expect(await screen.findByLabelText('Level')).toBeInTheDocument
    })

    it('allow editing all input',async()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        );

        await user.click(screen.getByRole('button',{name: /Add New Item/i}));

        const Skillname = await screen.findByLabelText('Skill Name');
        const Level = await screen.findByLabelText('Level');
       
        
        


        await user.type(Skillname,'java script');
        await user.type(Level,'Advance');
       
       

        expect(Skillname).toHaveValue('java script');
        expect(Level).toHaveValue('Advance');
       
    
    })


    it('shows validation errors for empty fields', async()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        )

       await user.click(screen.getByRole('button', { name: /Add New Item/i }));

       const submit = screen.getByRole('button', { name: /add item|save changes/i });
       await user.click(submit);

       expect(await screen.findByText(/Skills are required/i)).toBeInTheDocument();
       expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();
      
      
    })


    it('show error for invalid Skillname',async ()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        );

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const Skillname = await screen.findByLabelText('Skill Name');
        await user.type(Skillname,'java script')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);


        expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();
    })




    it('show error for invalid Level',async ()=>{
        const user = userEvent.setup();
        render(
            <FormProvider>
                <Skills/>
            </FormProvider>
        );

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const Level = await screen.findByLabelText('Level');
        await user.type(Level,'Advance')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);


        expect(await screen.findByText(/Skills are required/i)).toBeInTheDocument();
    })
})