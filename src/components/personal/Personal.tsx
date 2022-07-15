import React, { useState } from 'react'
import Card from '../styled-generics/Card'
import Input from '../styled-generics/Input'
import { samplePersonal } from '../../sampleData'
import { Action, Dispatch, AppState } from '../../types'
import Button from '../styled-generics/Button'

export default function Personal({
	dispatch,
	action,
	state,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
	state: AppState
}): JSX.Element {
	const [personal, setPersonal] = useState(samplePersonal)

	function handlePersonalChange(name: string, value: string): void {
		setPersonal(structuredClone(personal).set(name, value))

		dispatch({
			type: action.updatePersonal,
			payload: {
				allInfo: {
					personal_: personal,
				},
			},
		})
	}

	function handlePersonalFormSubmit(ev: React.FormEvent<HTMLFormElement>): void {
		ev.preventDefault()

		const formData = new FormData(ev.currentTarget)
		const firstName = formData.get('firstname')?.toString() ?? ''
		const lastName = formData.get('lastname')?.toString() ?? ''
		const email = formData.get('email')?.toString() ?? ''
		const portfolioUrl = formData.get('portfolioUrl')?.toString() ?? ''
		const linkedinUrl = formData.get('linkedinUrl')?.toString() ?? ''

		setPersonal(structuredClone(personal).set('firstname', firstName))
		setPersonal(structuredClone(personal).set('lastname', lastName))
		setPersonal(structuredClone(personal).set('email', email))
		setPersonal(structuredClone(personal).set('portfolioUrl', portfolioUrl))
		setPersonal(structuredClone(personal).set('linkedinUrl', linkedinUrl))

		dispatch({
			type: action.updatePersonal,
			payload: {
				allInfo: {
					personal_: personal,
				},
			},
		})
	}

	return (
		<Card
			colour={
				state.isDarkMode ? state.themeState.colour.dark : state.themeState.colour.light
			}
			backgroundColour={
				state.isDarkMode
					? state.themeState.backgroundColour.dark
					: state.themeState.backgroundColour.light
			}
		>
			<form action="#" id="form-personal" onSubmit={handlePersonalFormSubmit}>
				<fieldset>
					<legend>Personal</legend>
					<Card
						colour={
							state.isDarkMode
								? state.themeState.colour.dark
								: state.themeState.colour.light
						}
						backgroundColour={
							state.isDarkMode
								? state.themeState.backgroundColour.dark
								: state.themeState.backgroundColour.light
						}
					>
						<label htmlFor="firstname">First name: </label>
						<Input
							colour={
								state.isDarkMode
									? state.themeState.colour.dark
									: state.themeState.colour.light
							}
							backgroundColour={
								state.isDarkMode
									? state.themeState.backgroundColour.dark
									: state.themeState.backgroundColour.light
							}
							type="text"
							id="firstname"
							name="firstname"
							minLength={2}
							maxLength={31}
							pattern="[a-zA-Z]+"
							required
							onChange={(ev) =>
								handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
							}
						/>
					</Card>
					<Card
						colour={
							state.isDarkMode
								? state.themeState.colour.dark
								: state.themeState.colour.light
						}
						backgroundColour={
							state.isDarkMode
								? state.themeState.backgroundColour.dark
								: state.themeState.backgroundColour.light
						}
					>
						<label htmlFor="lastname">Last name: </label>
						<Input
							colour={
								state.isDarkMode
									? state.themeState.colour.dark
									: state.themeState.colour.light
							}
							backgroundColour={
								state.isDarkMode
									? state.themeState.backgroundColour.dark
									: state.themeState.backgroundColour.light
							}
							type="text"
							id="lastname"
							name="lastname"
							minLength={2}
							maxLength={31}
							pattern="[a-zA-Z]+"
							required
							onChange={(ev) =>
								handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
							}
						/>
					</Card>
					<Card
						colour={
							state.isDarkMode
								? state.themeState.colour.dark
								: state.themeState.colour.light
						}
						backgroundColour={
							state.isDarkMode
								? state.themeState.backgroundColour.dark
								: state.themeState.backgroundColour.light
						}
					>
						<label htmlFor="email">E-mail: </label>
						<Input
							colour={
								state.isDarkMode
									? state.themeState.colour.dark
									: state.themeState.colour.light
							}
							backgroundColour={
								state.isDarkMode
									? state.themeState.backgroundColour.dark
									: state.themeState.backgroundColour.light
							}
							type="email"
							id="email"
							name="email"
							required
							onChange={(ev) =>
								handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
							}
						/>
					</Card>
					<Card
						colour={
							state.isDarkMode
								? state.themeState.colour.dark
								: state.themeState.colour.light
						}
						backgroundColour={
							state.isDarkMode
								? state.themeState.backgroundColour.dark
								: state.themeState.backgroundColour.light
						}
					>
						<label htmlFor="portfolioUrl">Portfolio URL:</label>
						<Input
							colour={
								state.isDarkMode
									? state.themeState.colour.dark
									: state.themeState.colour.light
							}
							backgroundColour={
								state.isDarkMode
									? state.themeState.backgroundColour.dark
									: state.themeState.backgroundColour.light
							}
							type="text"
							id="portfolioUrl"
							name="portfolioUrl"
							onChange={(ev) =>
								handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
							}
						/>
					</Card>
					<Card
						colour={
							state.isDarkMode
								? state.themeState.colour.dark
								: state.themeState.colour.light
						}
						backgroundColour={
							state.isDarkMode
								? state.themeState.backgroundColour.dark
								: state.themeState.backgroundColour.light
						}
					>
						<label htmlFor="linkedinUrl">LinkedIn URL: </label>
						<Input
							colour={
								state.isDarkMode
									? state.themeState.colour.dark
									: state.themeState.colour.light
							}
							backgroundColour={
								state.isDarkMode
									? state.themeState.backgroundColour.dark
									: state.themeState.backgroundColour.light
							}
							type="text"
							id="linkedinUrl"
							name="linkedinUrl"
							onChange={(ev) =>
								handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
							}
						/>
						<Card
							colour={
								state.isDarkMode
									? state.themeState.colour.dark
									: state.themeState.colour.light
							}
							backgroundColour={
								state.isDarkMode
									? state.themeState.backgroundColour.dark
									: state.themeState.backgroundColour.light
							}
						>
							<Button
								colour={
									state.isDarkMode
										? state.themeState.colour.dark
										: state.themeState.colour.light
								}
								backgroundColour={
									state.isDarkMode
										? state.themeState.backgroundColour.dark
										: state.themeState.backgroundColour.light
								}
								type="submit"
							>
								Save personal
							</Button>
						</Card>
					</Card>
				</fieldset>
			</form>
		</Card>
	)
}
