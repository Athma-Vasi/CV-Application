import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// test('renders learn react link', () => {
// 	render(<App />)
// 	expect(screen.getByText(/cv application/i)).toBeInTheDocument()
// })
type Input = HTMLInputElement

describe('Personal', () => {
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

describe('Work Experience', () => {
	//company name: Input,
	it('contains `Company name` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/company name:/i)).toBeInTheDocument()
	})

	it('contains company name input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /company name:/i })).toBeInTheDocument()
	})

	it('highlights company name input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /company name:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//location: Input,
	it('contains `Work location` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/work location:/i)).toBeInTheDocument()
	})

	it('contains work location input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /work location:/i })).toBeInTheDocument()
	})

	it('highlights work location input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /work location:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//work from: Input,
	it('contains `Work from` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/work from:/i)).toBeInTheDocument()
	})

	it('contains work from input box', () => {
		render(<App />)
		expect(screen.getByRole('date', { name: /work from:/i })).toBeInTheDocument()
	})

	it('highlights work from input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('date', { name: /work from:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//work to: Input,
	it('contains `Work to` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/work to:/i)).toBeInTheDocument()
	})

	it('contains work to input box', () => {
		render(<App />)
		expect(screen.getByRole('date', { name: /work to:/i })).toBeInTheDocument()
	})

	it('highlights work to input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('date', { name: /work to:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//work role: Input,

	it('contains `Work role` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/work role:/i)).toBeInTheDocument()
	})

	it('contains work role input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /work role:/i })).toBeInTheDocument()
	})

	it('highlights work role input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /work role:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//work description: Input,
	it('contains `Work description` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/work description:/i)).toBeInTheDocument()
	})

	it('contains work description input box', () => {
		render(<App />)
		expect(
			screen.getByRole('textbox', { name: /work description:/i })
		).toBeInTheDocument()
	})

	it('highlights work description input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /work description:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})
})

describe('Education', () => {
	//place of education: Input,
	it('contains `Place of education` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/place of education:/i)).toBeInTheDocument()
	})

	it('contains education input box', () => {
		render(<App />)
		expect(
			screen.getByRole('textbox', { name: /place of education:/i })
		).toBeInTheDocument()
	})

	it('highlights education input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /place of education:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//education location: Input,
	it('contains `Education location` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/education location:/i)).toBeInTheDocument()
	})

	it('contains education location input box', () => {
		render(<App />)
		expect(
			screen.getByRole('textbox', { name: /education location:/i })
		).toBeInTheDocument()
	})

	it('highlights education location input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /education location:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//education from: Input,
	it('contains `Education from` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/education from:/i)).toBeInTheDocument()
	})

	it('contains education from input box', () => {
		render(<App />)
		expect(screen.getByRole('date', { name: /education from:/i })).toBeInTheDocument()
	})

	it('highlights education from input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('date', { name: /education from:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//education to: Input,
	it('contains `Education to` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/education to:/i)).toBeInTheDocument()
	})

	it('contains education to input box', () => {
		render(<App />)
		expect(screen.getByRole('date', { name: /education to:/i })).toBeInTheDocument()
	})

	it('highlights education to input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('date', { name: /education to:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//degree: Input,
	it('contains `Degree` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/degree:/i)).toBeInTheDocument()
	})

	it('contains degree input box', () => {
		render(<App />)
		expect(screen.getByRole('textbox', { name: /degree:/i })).toBeInTheDocument()
	})

	it('highlights degree input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /degree:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})

	//education description: Input,
	it('contains `Education description` label', () => {
		render(<App />)
		expect(screen.getByLabelText(/education description:/i)).toBeInTheDocument()
	})

	it('contains education description input box', () => {
		render(<App />)
		expect(
			screen.getByRole('textbox', { name: /education description:/i })
		).toBeInTheDocument()
	})

	it('highlights education description input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByRole('textbox', { name: /education description:/i })
		userEvent.click(input)
		expect(input).toHaveFocus()
	})
})

describe('Skills', () => {
	it('contains `Skills` label', () => {
		render(<App />)
		expect(screen.getByTestId('skills-label')).toBeInTheDocument()
	})

	it('contains skills input box', () => {
		render(<App />)
		expect(screen.getByTestId('skills-input')).toBeInTheDocument()
	})

	it('highlights skills input box when it is focused', () => {
		render(<App />)
		const input: Input = screen.getByTestId('skills-input')
		userEvent.click(input)
		expect(input).toHaveFocus()
	})
})
