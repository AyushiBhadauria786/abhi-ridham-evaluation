import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Education from '../components/Education';
import '@testing-library/jest-dom';
import AddNewItem from '../components/AddNewItem';
import { Provider } from 'react-redux';
import { store } from '../store/store';


describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})


describe('Education',()=>{
    it('Education component render on screen', () =>{
        render(
            <Provider store={store}>
                <Education/>
            </Provider>
        );
        screen.debug();
    })

    it('Heading is render on screen', () =>{
        render(
            <Provider store={store}>
                <Education/>
            </Provider>
        );
        expect(screen.getByText('Education')).toBeInTheDocument();
    })

    it('A AddNewItem component render on screeen',()=>{
        render(
            <Provider store={store}>
                <Education/>
            </Provider>
        );
        screen.debug();
    })
})


describe('Education Selection',() =>{
    it('Render Education component',()=>{
        render(
            <Provider store={store}>
                <Education/>
            </Provider>
        );
        expect(screen.getByText('Education')).toBeInTheDocument();
    })

    it('render opening modal', async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Education/>
            </Provider>
        );

        await user.click(screen.getByRole('button',{name : /Add New Item/i}));
    })

  it('labels is render on screen', async () => {
          const user = userEvent.setup();
          render(
            <Provider store={store}>
                <Education/>
            </Provider>
        );
  
          await user.click(screen.getByRole('button',{name : /Add New Item/i}));
  
          
          expect(await screen.findByLabelText('Institution')).toBeInTheDocument();
          expect(await screen.findByLabelText('Degree / Type Of Study')).toBeInTheDocument();
          expect(await screen.findByLabelText('Date or Date Range')).toBeInTheDocument();
          expect(await screen.findByLabelText('Score / Grade')).toBeInTheDocument();
         
      })

    
      it('allow editing all input',async()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Education/>
            </Provider>
        );
        await user.click(screen.getByRole('button',{name: /Add New Item/i}));

        const institution = await screen.findByLabelText('Institution');
        const degree = await screen.findByLabelText('Degree / Type Of Study');
        const date = await screen.findByLabelText('Date or Date Range');
        const score = await screen.findByLabelText('Score / Grade');
        
        


        await user.type(institution,'Sal Collage');
        await user.type(degree,'BE Computer Engineering');
        await user.type(date,"15,may 2025");
        await user.type(score,'9.8');
       

        expect(institution).toHaveValue('Sal Collage');
        expect(degree).toHaveValue('BE Computer Engineering');
        expect(date).toHaveValue('15,may 2025');
        expect(score).toHaveValue('9.8');
       

    })
    

    it('shows validation errors for empty fields', async()=>{
            const user = userEvent.setup();
            render(
                <Provider store={store}>
                    <Education/>
                </Provider>
            );
    
           await user.click(screen.getByRole('button', { name: /Add New Item/i }));
    
           const submit = screen.getByRole('button', { name: /add item|save changes/i });
           await user.click(submit);
    
           expect(await screen.findByText(/Institute Name is required/i)).toBeInTheDocument();
           expect(await screen.findByText("Degree/Study Type is required")).toBeInTheDocument();
           expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
           expect(await screen.findByText(/CGPA is required/i)).toBeInTheDocument();
          
    
        })
    
        it('show error for invalid Institute',async ()=>{
            const user = userEvent.setup();
            render(
                <Provider store={store}>
                    <Education/>
                </Provider>
            );
    
            await user.click(screen.getByRole('button', {name:/Add New Item/i}))
    
            const institution = await screen.findByLabelText('Institution');
            await user.type(institution,'Sal Collage')
    
            const submit = screen.getByRole('button',{name:/add item|save changes/i})
            await user.click(submit);
    
           
            expect(await screen.findByText("Degree/Study Type is required")).toBeInTheDocument();
            expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
            expect(await screen.findByText(/CGPA is required/i)).toBeInTheDocument();
        })

        it('show error for invalid degree',async ()=>{
            const user = userEvent.setup();
            render(
                <Provider store={store}>
                    <Education/>
                </Provider>
            );
    
            await user.click(screen.getByRole('button', {name:/Add New Item/i}))
    
            const degree = await screen.findByLabelText('Degree / Type Of Study');
            await user.type(degree,'BE Computer Engineering')
    
            const submit = screen.getByRole('button',{name:/add item|save changes/i})
            await user.click(submit);
    
           
            expect(await screen.findByText("Institute Name is required")).toBeInTheDocument();
            expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
            expect(await screen.findByText(/CGPA is required/i)).toBeInTheDocument();
        })

        it('show error for invalid date',async ()=>{
            const user = userEvent.setup();
            render(
                <Provider store={store}>
                    <Education/>
                </Provider>
            );
            await user.click(screen.getByRole('button', {name:/Add New Item/i}))
    
            const date = await screen.findByLabelText('Date or Date Range');
            await user.type(date,'15,may 2025')
    
            const submit = screen.getByRole('button',{name:/add item|save changes/i})
            await user.click(submit);
    
           
            expect(await screen.findByText("Institute Name is required")).toBeInTheDocument();
            expect(await screen.findByText("Degree/Study Type is required")).toBeInTheDocument();
            expect(await screen.findByText(/CGPA is required/i)).toBeInTheDocument();
        })


        it('show error for invalid score',async ()=>{
            const user = userEvent.setup();
            render(
                <Provider store={store}>
                    <Education/>
                </Provider>
            );
    
            await user.click(screen.getByRole('button', {name:/Add New Item/i}))
    
            const score = await screen.findByLabelText('Score / Grade');
            await user.type(score,'9.8')
    
            const submit = screen.getByRole('button',{name:/add item|save changes/i})
            await user.click(submit);
    
           
            expect(await screen.findByText("Institute Name is required")).toBeInTheDocument();
            expect(await screen.findByText("Degree/Study Type is required")).toBeInTheDocument();
            expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
        })
        

})