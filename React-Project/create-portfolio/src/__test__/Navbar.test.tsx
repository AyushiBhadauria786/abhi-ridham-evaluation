import {render, screen} from '@testing-library/react'
import { describe, it, expect } from  'vitest'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


describe('Navbar Component' , () => {
    it('should render the navbar title' , () => {
        render (
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        const title = screen.getByText(/welcome to portfolio builder/i)
        expect(title).toBeInTheDocument()
    })
})

