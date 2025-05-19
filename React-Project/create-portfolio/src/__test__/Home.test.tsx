import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '../component/Home'
import { MemoryRouter } from 'react-router-dom'
import * as router from 'react-router'


const mockedNavigate = vi.fn()

vi.mock('react-router', async () => {
  const actual: typeof router = await vi.importActual('react-router')
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  }
})

describe('Home Component', () => {
  it('should render the Create Portfolio button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const button = screen.getByRole('button', { name: /create protfolio/i })
    expect(button).toBeInTheDocument()
  })

  it('should navigate to /form on button click', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const button = screen.getByRole('button', { name: /create protfolio/i })
    fireEvent.click(button)
    expect(mockedNavigate).toHaveBeenCalledWith('/form')
  })
})
