import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider } from '../context/FormContext';
import Profile from '../components/Profile';
import '@testing-library/jest-dom';
import AddNewItem from '../components/AddNewItem';


describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})


describe('Profile', () => {
    it('A Profile component render on screeen', () => {
        render(<FormProvider>
                <Profile />
               </FormProvider>
              )
        screen.debug();
    })

    it('Heading is render on screen', () => {
        render(<FormProvider>
                    <Profile />
               </FormProvider>
            );
        expect(screen.getByText('Profiles')).toBeInTheDocument();
    })

    it('A AddNewItem component render on screeen', () => {
        render(<FormProvider>
                <AddNewItem sectionName='Profiles' />
               </FormProvider>
              )
        screen.debug();
    })
    
    
})


describe('Profile Section', () => {
  it('renders Profile component', () => {
    render(
      <FormProvider>
        <Profile />
      </FormProvider>
    );
    expect(screen.getByText('Profiles')).toBeInTheDocument();
  });

  it('renders form fields after opening modal', async () => {
    const user = userEvent.setup();
    render(
      <FormProvider>
        <Profile />
      </FormProvider>
    );

    // Open the modal first
    await user.click(screen.getByRole('button', { name: /Add New Item/i }));

    expect(await screen.findByLabelText('Network')).toBeInTheDocument();
    expect(await screen.findByLabelText('Username')).toBeInTheDocument();
    expect(await screen.findByLabelText('Website')).toBeInTheDocument();
  });

  it('allows editing all inputs', async () => {
    const user = userEvent.setup();
    render(
      <FormProvider>
        <Profile />
      </FormProvider>
    );

    await user.click(screen.getByRole('button', { name: /Add New Item/i }));

    const network = await screen.findByLabelText('Network');
    const username = screen.getByLabelText('Username');
    const website = screen.getByLabelText('Website');

    await user.type(network, 'LinkedIn');
    await user.type(username, 'abhibutani');
    await user.type(website, 'https://linkedin.com/in/abhibutani');

    expect(network).toHaveValue('LinkedIn');
    expect(username).toHaveValue('abhibutani');
    expect(website).toHaveValue('https://linkedin.com/in/abhibutani');
  });

  it('shows error for invalid website', async () => {
    const user = userEvent.setup();
    render(
      <FormProvider>
        <Profile />
      </FormProvider>
    );

    await user.click(screen.getByRole('button', { name: /Add New Item/i }));

    const website = await screen.findByLabelText('Website');
    await user.type(website, 'not-a-valid-url');
  
    const submit = screen.getByRole('button', { name: /add item|save changes/i });
    await user.click(submit);
 
  expect(await screen.findByText(/Input must be www.example.com/i)).toBeInTheDocument();
});

   it('show error for invalid network', async () =>{
    const user = userEvent.setup();
    render(
        <FormProvider>
            <Profile/>
        </FormProvider>
    );
    await user.click(screen.getByRole('button',{name : /Add New Item/i}));

    const network = await screen.findByLabelText('Network');
    await user.type(network,'12');

    const submit = await screen.findByRole('button', { name: /add item|save changes/i });
    await user.click(submit);

    expect(await screen.findByText(/Username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
   })


   it('show error for invalid username', async () =>{
    const user = userEvent.setup();
    render(
        <FormProvider>
            <Profile/>
        </FormProvider>
    );
    await user.click(screen.getByRole('button',{name : /Add New Item/i}));
    
    const username = await screen.findByLabelText('Username');
    await user.type(username,'12');

    const submit = await screen.findByRole('button', { name: /add item|save changes/i });
    await user.click(submit);

    expect(await screen.findByText(/Network is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
   })



  it('shows validation errors for empty fields', async () => {
    const user = userEvent.setup();
    render(
      <FormProvider>
        <Profile />
      </FormProvider>
    );

    await user.click(screen.getByRole('button', { name: /Add New Item/i }));

    const submit = screen.getByRole('button', { name: /add item|save changes/i });
    await user.click(submit);

    expect(await screen.findByText(/Network is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Website url is required/i)).toBeInTheDocument();
  });





  it('should submit the form when "Add Details" button is clicked with valid input', async () => {
    const user = userEvent.setup();

    render(
      <FormProvider>
        <Profile />
      </FormProvider>
    );

    await user.click(screen.getByRole('button', { name: /Add New Item/i }));

    const network = await screen.findByLabelText('Network');
    const username = screen.getByLabelText('Username');
    const website = screen.getByLabelText('Website');
  
    await user.type(network, 'LinkedIn');
    await user.type(username, 'abhibutani');
    await user.type(website, 'www.abhi.com');

    const submit = screen.getByRole('button', { name: /add item|save changes/i });
    await user.click(submit);



    expect(network).toHaveValue('LinkedIn');
    expect(username).toHaveValue('abhibutani');
    expect(website).toHaveValue('www.abhi.com');

});

});


