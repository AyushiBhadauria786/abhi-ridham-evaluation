import { render,screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Experience from "../components/Experience"
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import AddNewItem from "../components/AddNewItem";
import { Provider } from "react-redux";
import { store } from "../store/store";







describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})


describe('Experience',()=>{
    it('Experience component render on screen', () => {
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )
        screen.debug();
    })

    it('Heading is render on screen', () =>{
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )
        expect(screen.getByText('Experience')).toBeInTheDocument();
    })

    it('A AddNewItem component render on screeen',()=>{
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )
        screen.debug();
    })
})

describe('Experience Section', () => {
    it('render Experience component',()=>{
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )
        expect(screen.getByText('Experience')).toBeInTheDocument();
    })

    it('render opening modal', async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button',{name : /Add New Item/i}));

    })

    it('labels is render on screen', async () => {
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button',{name : /Add New Item/i}));

        expect(screen.getByLabelText('Company')).toBeInTheDocument();
        expect(await screen.findByLabelText('Position')).toBeInTheDocument();
        expect(await screen.findByLabelText('Date or Date Range')).toBeInTheDocument();
        expect(await screen.findByLabelText('Location')).toBeInTheDocument();
        expect(await screen.findByLabelText('Website')).toBeInTheDocument();
        expect(await screen.findByLabelText('Summary')).toBeInTheDocument();
    })

  

    it('shows validation errors for empty fields', async()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

       await user.click(screen.getByRole('button', { name: /Add New Item/i }));

       const submit = screen.getByRole('button', { name: /add item|save changes/i });
       await user.click(submit);

       expect(await screen.findByText(/Company is required/i)).toBeInTheDocument();
       expect(await screen.findByText(/Position is required/i)).toBeInTheDocument();
       expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
       expect(await screen.findByText(/Location is required/i)).toBeInTheDocument();
       expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
       expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();

    })






    it('show error for invalid company',async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const position = await screen.findByLabelText('Position');
        await user.type(position,'software developer')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);

       
        expect(await screen.findByText(/Company is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Location is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();
    })


    it('show error for invalid position',async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const company = await screen.findByLabelText('Company');
        await user.type(company,'123')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);

       
        expect(await screen.findByText(/Position is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Location is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();
    })


    it('show error for invalid location',async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const location = await screen.findByLabelText('Location');
        await user.type(location,'123')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);

       
        expect(await screen.findByText(/Position is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Company is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();
    })

    it('show error for invalid date',async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const date = await screen.findByLabelText('Date or Date Range');
        await user.type(date,'Ahmedabad')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);

       
        expect(await screen.findByText(/Position is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Location is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Company is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();
    })


    it('show error for invalid website',async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const website = await screen.findByLabelText('Website');
        await user.type(website,'www.example.com')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);

       
        expect(await screen.findByText(/Position is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Location is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Company is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Blank spaces are not allowed/i)).toBeInTheDocument();
    })

    it('show error for invalid Summary',async ()=>{
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Experience/>
            </Provider>
        )

        await user.click(screen.getByRole('button', {name:/Add New Item/i}))

        const Summary = await screen.findByLabelText('Summary');
        await user.type(Summary,'Ahmedabad')

        const submit = screen.getByRole('button',{name:/add item|save changes/i})
        await user.click(submit);

       
        expect(await screen.findByText(/Position is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Location is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Company is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Date Range is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
    })

    
})
