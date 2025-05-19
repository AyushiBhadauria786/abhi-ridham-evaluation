import {render, screen} from '@testing-library/react'
import { describe, it, expect } from  'vitest'
import PageNotFound from '../component/PageNotFound'
import { MemoryRouter } from 'react-router-dom'

describe('PageNotFound Component', () => {
    it('should display 404 error message', () => {
        render (
            <MemoryRouter>
               <PageNotFound /> 
            </MemoryRouter>
        )

        const message = screen.getByText(/oops 404 page not found/i)
        expect(message).toBeInTheDocument()
    })
})