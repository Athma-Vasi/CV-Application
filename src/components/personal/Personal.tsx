import React, { useState } from 'react'
import Card from '../styled-generics/Card'
import Container from '../styled-generics/Container'
import Input from '../styled-generics/Input'
import Wrapper from '../styled-generics/Wrapper'
import { samplePersonal } from '../../sampleData'
import { Action, Dispatch } from '../../types'
import Button from '../styled-generics/Button'

export default function Personal({
	dispatch,
	action,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
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
	}

	return (
		<>
			<Wrapper>
				<Container>
					<form action="#" id="form-personal" onSubmit={handlePersonalFormSubmit}>
						<fieldset>
							<legend>Personal</legend>
							<Card>
								<label htmlFor="firstname">First name: </label>
								<Input
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
							<Card>
								<label htmlFor="lastname">Last name: </label>
								<Input
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
							<Card>
								<label htmlFor="email">E-mail: </label>
								<Input
									type="email"
									id="email"
									name="email"
									required
									onChange={(ev) =>
										handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
									}
								/>
							</Card>
							<Card>
								<label htmlFor="portfolioUrl">Portfolio URL:</label>
								<Input
									type="text"
									id="portfolioUrl"
									name="portfolioUrl"
									onChange={(ev) =>
										handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
									}
								/>
							</Card>
							<Card>
								<label htmlFor="linkedinUrl">LinkedIn URL: </label>
								<Input
									type="text"
									id="linkedinUrl"
									name="linkedinUrl"
									onChange={(ev) =>
										handlePersonalChange(ev.currentTarget.name, ev.currentTarget.value)
									}
								/>
							</Card>
						</fieldset>
					</form>
				</Container>
			</Wrapper>
		</>
	)
}
