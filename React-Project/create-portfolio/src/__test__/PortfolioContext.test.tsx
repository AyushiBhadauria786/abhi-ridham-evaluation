import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import React from 'react'
import { PortfolioProvider, usePortfolio, BasicData } from '../Context/PortfolioContext'


const TestComponent = () => {
  const { basicData, setBasicData, sectionData, setSectionData } = usePortfolio()


  const sampleData: BasicData = {
    FullName: 'John Doe',
    Headline: 'MERN Developer',
    Email: 'john@example.com',
    Website: 'https://example.com',
    Phone: '1234567890',
    Location: 'ABD',
    Summary: 'I am a developer.',
  }

  const handleClick = () => {
    setBasicData(sampleData)
    setSectionData({
      Education: [{ degree: 'BE CE', year: 2022 }],
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Update Context</button>
      <div>FullName: {basicData?.FullName || 'No Name'}</div>
      <div>Education: {sectionData?.Education?.[0]?.degree || 'No Education'}</div>
    </div>
  )
}

describe('PortfolioContext', () => {
  it('should provide default values and allow updates', async () => {
    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    )
    expect(screen.getByText(/No Name/i)).toBeInTheDocument()
    expect(screen.getByText(/No Education/i)).toBeInTheDocument()

    screen.getByText('Update Context').click()

    expect(await screen.findByText(/John Doe/i)).toBeInTheDocument()
    expect(await screen.findByText(/BE CE/i)).toBeInTheDocument()
  })
})
