import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router'
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