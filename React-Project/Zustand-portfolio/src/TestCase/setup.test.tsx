import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App';
import FModal from '../component/Fmodal';
import Form from '../component/Form';
import { MemoryRouter } from 'react-router-dom';
import Home from '../component/Home';
import PageNotFound from '../component/PageNotFound';
import Preview from '../component/Preview';
import Navbar from '../Navbar/Navbar';

describe('Math check', () => {
  it('1 + 1 should equal 2', () => {
    expect(1 + 1).toBe(2)
  })
});



describe('App', () => {
  it('renders the App component', () => {
    render(<App/>)
    
    screen.debug(); 
  })
})

describe('FModal', () => {
  it('renders the FModal component', () => {
    render(<FModal open={false} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } onCreate={function (data: any): void {
      throw new Error('Function not implemented.');
    } } title={''} fields={[]}/>)
    
    screen.debug(); 
  })
})


describe('Form', () => {
  it('renders the Form component', () => {
    <MemoryRouter>
    render(<Form/>)
    </MemoryRouter>
    screen.debug(); 
  })
})


describe('Home', () => {
  it('renders the Home component', () => {
    <MemoryRouter>
    render(<Home/>)
    </MemoryRouter>
    screen.debug(); 
  })
})


describe('PageNotFound', () => {
  it('renders the PageNotFound component', () => {
    <MemoryRouter>
    render(<PageNotFound/>)
    </MemoryRouter>
    screen.debug(); 
  })
})


describe('Navbar', () => {
  it('renders the Navbar component', () => {
    <MemoryRouter>
    render(<Navbar/>)
    </MemoryRouter>
    screen.debug(); 
  })
})




