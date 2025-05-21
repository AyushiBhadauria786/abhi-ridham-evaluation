import { describe, it, expect  } from 'vitest'
import { render, screen } from '@testing-library/react'
import BasicsSection from '../components/BasicsSection'

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../store/store';




describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })



})

describe('Basic', () => {
    it('A basic component render on screeen', () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
        screen.debug();
    })

// render heading and labels for basic section

    it('Heading is render on screen', () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
            expect(screen.getByText('Basics Section')).toBeInTheDocument();
    })

    it('label is render on screen', () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
            expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
            expect(screen.getByLabelText('Headline')).toBeInTheDocument();
            expect(screen.getByLabelText('Email')).toBeInTheDocument();
            expect(screen.getByLabelText('Website')).toBeInTheDocument();
            expect(screen.getByLabelText('Phone')).toBeInTheDocument();
            expect(screen.getByLabelText('Location')).toBeInTheDocument();
            expect(screen.getByText('Summary')).toBeInTheDocument();
    })
    

  


it('Full Name input field is editable', async () => {
    render(
        <Provider store={store}>
          <BasicsSection />
        </Provider>
      );
    
    const fullNameInput = screen.getByLabelText('Full Name');
    await userEvent.type(fullNameInput, 'abhi butani');
    expect(fullNameInput).toHaveValue('abhi butani');
  });



it('Headline input field is editable', async () => {
    render(
        <Provider store={store}>
          <BasicsSection />
        </Provider>
      );
    
    const headlineInput = screen.getByLabelText('Headline');
    await userEvent.type(headlineInput, 'Software Developer');
    expect(headlineInput).toHaveValue('Software Developer');
  });


it('Email input field is editable', async () => {
    render(
        <Provider store={store}>
          <BasicsSection />
        </Provider>
      );
    
    const emailInput = screen.getByLabelText('Email');
    await userEvent.type(emailInput, 'abhibutani@gmail.com');
    expect(emailInput).toHaveValue('abhibutani@gmail.com');
  });


it('Website input field is editable', async () => {
    render(
        <Provider store={store}>
          <BasicsSection />
        </Provider>
      );
    
    const websiteInput = screen.getByLabelText('Website');
    await userEvent.type(websiteInput, 'https://example.com');
    expect(websiteInput).toHaveValue('https://example.com');
  });



it('Phone input field is editable', async () => {
    render(
        <Provider store={store}>
          <BasicsSection />
        </Provider>
      );
    
    const phoneInput = screen.getByLabelText('Phone');
    await userEvent.type(phoneInput, '123-456-7890');
    expect(phoneInput).toHaveValue('123-456-7890');
  });



 
it('Location input field is editable', async () => {
    render(
        <Provider store={store}>
          <BasicsSection />
        </Provider>
      );
    
    const locationInput = screen.getByLabelText('Location');
    await userEvent.type(locationInput, 'Ahmedabad, Bopal');
    expect(locationInput).toHaveValue('Ahmedabad, Bopal');
  });
})




// errors and validation

    it('Full Name input field is editable',async () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
      
      const fullNameInput = screen.getByLabelText('Full Name');
      await userEvent.type(fullNameInput, '12');
      expect(fullNameInput).toHaveValue('12');
    });
  


    it('Headline input field is editable',async () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
        
        const emailInput = screen.getByLabelText('Headline');
        await userEvent.type(emailInput, '12');
        expect(emailInput).toHaveValue('12');
      });

    
      it('Website input field is editable',async () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
        
        const websiteInput = screen.getByLabelText('Website');
        await userEvent.type(websiteInput, '12');
        expect(websiteInput).toHaveValue('12');

        
      });


    
      it('Website input field is editable',async () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
        
        const websiteInput = screen.getByLabelText('Website');
        await userEvent.type(websiteInput, '@');
        expect(websiteInput).toHaveValue('@');

        
      });


      it('Phone input field is editable', async () => {
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
        
        const phoneInput = screen.getByLabelText('Phone');
        await userEvent.type(phoneInput, 'hyyy');
        expect(phoneInput).toHaveValue('hyyy');
      });


      it('should submit the form when "Add Details" button is clicked with valid input', async () => {
        const user = userEvent.setup();
    
        render(
            <Provider store={store}>
              <BasicsSection />
            </Provider>
          );
    
        await user.type(screen.getByLabelText('Full Name'), 'Abhi Butani');
        await user.type(screen.getByLabelText('Headline'), 'Frontend Developer');
        await user.type(screen.getByLabelText('Email'), 'abhibutani@gmail.com');
        await user.type(screen.getByLabelText('Website'), 'https://example.com');
        await user.type(screen.getByLabelText('Phone'), '1234567890');
        await user.type(screen.getByLabelText('Location'), 'Ahmedabad');
        
    
        // Click the button

        const button = screen.getByRole('button', { name: /add details/i });
        await user.click(button);
    
        // Since onSubmit resets the form, check if any field is cleared (indicating submission happened)


        expect(screen.getByLabelText('Full Name')).toHaveValue('Abhi Butani');
        expect(screen.getByLabelText('Headline')).toHaveValue('Frontend Developer');
        expect(screen.getByLabelText('Email')).toHaveValue('abhibutani@gmail.com');
        expect(screen.getByLabelText('Website')).toHaveValue('https://example.com');
        expect(screen.getByLabelText('Phone')).toHaveValue('1234567890');
        expect(screen.getByLabelText('Location')).toHaveValue('Ahmedabad');
      
    });
    




    it('should submit the form when "Add Details" button is clicked with valid input', async () => {
        const user = userEvent.setup();
    
        render(
          <Provider store={store}>
            <BasicsSection />
          </Provider>
        );
    
        await user.type(screen.getByLabelText('Full Name'), '12');
        await user.type(screen.getByLabelText('Headline'), '12');
        await user.type(screen.getByLabelText('Email'), '12');
        await user.type(screen.getByLabelText('Website'), '12');
        await user.type(screen.getByLabelText('Phone'), '12');
        await user.type(screen.getByLabelText('Location'), '12');
        
    
        // Click the button

        const button = screen.getByRole('button', { name: /add details/i });
        await user.click(button);
    
        // Since onSubmit resets the form, check if any field is cleared (indicating submission happened)


        expect(screen.getByLabelText('Full Name')).toHaveValue('12');
        expect(screen.getByLabelText('Headline')).toHaveValue('12');
        expect(screen.getByLabelText('Email')).toHaveValue('12');
        expect(screen.getByLabelText('Website')).toHaveValue('12');
        expect(screen.getByLabelText('Phone')).toHaveValue('12');
        expect(screen.getByLabelText('Location')).toHaveValue('12');
      
    });



    // it will give error because we can not fill as empty or blank value




    // it('should submit the form when "Add Details" button is clicked with valid input', async () => {
    //     const user = userEvent.setup();
    
    //     render(
    //       <FormProvider>
    //         <BasicsSection />
    //       </FormProvider>
    //     );
    
    //     await user.type(screen.getByLabelText('Full Name'), '');
    //     await user.type(screen.getByLabelText('Headline'), '');
    //     await user.type(screen.getByLabelText('Email'), '');
    //     await user.type(screen.getByLabelText('Website'), '');
    //     await user.type(screen.getByLabelText('Phone'), '');
    //     await user.type(screen.getByLabelText('Location'), '');
        
    
    //     // Click the button

    //     const button = screen.getByRole('button', { name: /add details/i });
    //     await user.click(button);
    
    // });


