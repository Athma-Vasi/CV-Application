import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// test('renders learn react link', () => {
// 	render(<App />)
// 	expect(screen.getByText(/cv application/i)).toBeInTheDocument()
// })

describe('Personal', () => {
	type Input = HTMLInputElement
	//firstName: Input,
	it('contains `First name` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/first name:/i)).toBeInTheDocument()
	})

	it('contains first name input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /first name:/i })).toBeInTheDocument()
	})

	it('highlights first name input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /first name:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//lastName: Input,
	it('contains `Last name` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/last name:/i)).toBeInTheDocument()
	})

	it('contains last name input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /last name:/i })).toBeInTheDocument()
	})

	it('highlights last name input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /last name:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//email: Input,
	it('contains `Email` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/e-mail:/i)).toBeInTheDocument()
	})

	it('contains email input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /e-mail:/i })).toBeInTheDocument()
	})

	it('highlights email input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /e-mail:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//portfolio url: Input,
	it('contains `Portfolio url` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/portfolio url:/i)).toBeInTheDocument()
	})

	it('contains portfolio url input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /portfolio url:/i })).toBeInTheDocument()
	})

	it('highlights portfolio url input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /portfolio url:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//linkedin url: Input,
	it('contains `Linkedin url` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/linkedin url:/i)).toBeInTheDocument()
	})

	it('contains linkedin url input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /linkedin url:/i })).toBeInTheDocument()
	})

	it('highlights linkedin url input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /linkedin url:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})
})
