import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormProvider, useFormContext } from '../context/FormContext';
import { describe, expect, it } from 'vitest';

const TestComponent = () => {
  const {
    addListItemData,
    deleteListItemData,
    formData,
    resetAllFormData,
  } = useFormContext();

  return (
    <div>
      <button
        onClick={() =>
          addListItemData('Profiles', {
            network: 'GitHub',
            username: 'johndoe',
            url: 'https://github.com/johndoe',
          })
        }
      >
        Add Profile
      </button>

      <button onClick={() => deleteListItemData('Profiles', 0)}>
        Delete Profile
      </button>

      <button onClick={resetAllFormData}>Reset Form</button>

      <div data-testid="profiles-count">{formData.Profiles?.length ?? 0}</div>
    </div>
  );
};

describe('FormContext with TestComponent', () => {
  it('adds and deletes a profile entry', () => {
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );

    const count = screen.getByTestId('profiles-count');
    expect(count.textContent).toBe('0');

    fireEvent.click(screen.getByText('Add Profile'));
    expect(count.textContent).toBe('1');

    fireEvent.click(screen.getByText('Delete Profile'));
    expect(count.textContent).toBe('0');
  });

  it('resets form data', () => {
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );

    fireEvent.click(screen.getByText('Add Profile'));
    expect(screen.getByTestId('profiles-count').textContent).toBe('1');

    fireEvent.click(screen.getByText('Reset Form'));
    expect(screen.getByTestId('profiles-count').textContent).toBe('0');
  });
});
