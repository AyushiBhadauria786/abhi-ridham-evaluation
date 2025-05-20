import React, { act } from 'react';

import { FormProvider, useFormContext } from '../context/FormContext';
import { GlobalFormData } from '../types/type';
import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';

describe('FormContext', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FormProvider>{children}</FormProvider>
  );

  it('adds and deletes profile entry', () => {
    const { result } = renderHook(() => useFormContext(), { wrapper });


    act(() => {
      result.current.addListItemData('Profiles', {
        network: 'Twitter',
        username: 'john_doe',
        url: 'https://twitter.com/john_doe',
      });
    });

    expect(result.current.formData.Profiles?.length).toBe(1);
    expect(result.current.formData.Profiles?.[0].network).toBe('Twitter');

    // Delete profile
    act(() => {
      result.current.deleteListItemData('Profiles', 0);
    });

    expect(result.current.formData.Profiles?.length).toBe(0);
  });

  it('can update and retrieve list item data', () => {
    const { result } = renderHook(() => useFormContext(), { wrapper });

    act(() => {
      result.current.addListItemData('Projects', {
        name: 'Portfolio Site',
        description: 'My dev portfolio',
        url: 'https://portfolio.com',
      });
    });

    act(() => {
      result.current.updateListItemData('Projects', 0, {
        name: 'Updated Portfolio',
        description: 'Updated desc',
        url: 'https://updated.com',
      });
    });

    const item = result.current.getListItem('Projects', 0);
    expect(item?.name).toBe('Updated Portfolio');
  });

  it('resets all form data', () => {
    const initialData: GlobalFormData = {
      Basics: {
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        phone: '0000000000',
        location: '',
        website: '',
        summary: '',
        headline: '',
      },
      Profiles: [],
      Experience: [],
      Education: [],
      Projects: [],
      Skills: [],
    };

    const wrapperWithInitial = ({ children }: { children: React.ReactNode }) => (
      <FormProvider initialData={initialData}>{children}</FormProvider>
    );

    const { result } = renderHook(() => useFormContext(), { wrapper: wrapperWithInitial });

    expect(result.current.formData.Basics?.fullName).toBe('Jane Doe');

    act(() => {
      result.current.resetAllFormData();
    });

    expect(result.current.formData.Basics).toBeUndefined();
  });
});