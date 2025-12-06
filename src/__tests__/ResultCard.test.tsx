import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResultCard } from '@/components/dashboard/ResultCard'

describe('ResultCard', () => {
    it('renders calorie information correctly', () => {
        const mockResult = {
            dish_name: "Chicken Biryani",
            servings: 2,
            calories_per_serving: 280,
            total_calories: 560,
            source: "USDA"
        }

        render(<ResultCard result={mockResult} />)

        expect(screen.getByText('Chicken Biryani')).toBeDefined()
        expect(screen.getByText('560')).toBeDefined()
        expect(screen.getByText('280 per serving')).toBeDefined()
    })
})
