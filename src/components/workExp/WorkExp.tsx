import Card from '../styled-generics/Card'
import Input from '../styled-generics/Input'
import Wrapper from '../styled-generics/Wrapper'
import Container from '../styled-generics/Container'

import { WorkExpMap, WorkExpKeys, Dispatch, Action } from '../../types'
import { sampleWorkExp } from '../../sampleData'
import { useState } from 'react'
import Button from '../styled-generics/Button'

export default function WorkExp({
	dispatch,
	action,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
}): JSX.Element {
	const now = new Date()

	const [workExp, setWorkExp] = useState(sampleWorkExp)
	const [workExpAmounts, setWorkExpAmounts] = useState(0)

	function handleWorkExpChange(name: WorkExpKeys | string, value: string): void {
		const clone: WorkExpMap = structuredClone(workExp)

		const workExpObj = clone.get(`workExp${workExpAmounts}`)
		if (workExpObj) workExpObj[name as WorkExpKeys] = value

		setWorkExp(clone)

		dispatch({
			type: action.updateWorkExp,
			payload: {
				allInfo: {
					workExp_: workExp,
				},
			},
		})
	}

	function handleWorkExpAmountsChange(
		ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		ev.preventDefault()
		setWorkExpAmounts(workExpAmounts + 1)

		dispatch({
			type: action.updateMultipleWorkExpAmounts,
			payload: {
				allInfo: {},
				updateMultipleWorkExpAmounts: workExpAmounts,
			},
		})
	}

	return (
		<>
			<Wrapper>
				<Container>
					<form action="#" id="form-workExp">
						<fieldset>
							<legend>
								Work Experience{' '}
								<button type="button" onClick={handleWorkExpAmountsChange}>
									➕
								</button>
							</legend>
							<Card>
								<label htmlFor="companyName">Company name: </label>
								<Input
									type="text"
									id="companyName"
									name="companyName"
									minLength={2}
									maxLength={31}
									pattern="[a-zA-Z0-9]+"
									onChange={(ev) =>
										handleWorkExpChange(ev.currentTarget.name, ev.currentTarget.value)
									}
									required
								/>
							</Card>
							<Card>
								<label htmlFor="locationWork">Location: </label>
								<Input
									type="text"
									id="locationWork"
									name="locationWork"
									minLength={2}
									maxLength={31}
									pattern="[a-zA-Z0-9]+"
									onChange={(ev) =>
										handleWorkExpChange(ev.currentTarget.name, ev.currentTarget.value)
									}
									required
								/>
							</Card>
							<Card>
								<label htmlFor="fromWork">From: </label>
								<Input
									type="date"
									id="fromWork"
									name="fromWork"
									min={`${now.getFullYear() - 100}-${
										now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
									}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
									max={`${now.getFullYear()}-${
										now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
									}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
									pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"
									onChange={(ev) =>
										handleWorkExpChange(ev.currentTarget.name, ev.currentTarget.value)
									}
								/>
							</Card>
							<Card>
								<label htmlFor="toWork">To: </label>
								<Input
									type="date"
									name="toWork"
									id="toWork"
									min={`${now.getFullYear() - 100}-${
										now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
									}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
									max={`${now.getFullYear()}-${
										now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
									}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
									pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"
									onChange={(ev) =>
										handleWorkExpChange(ev.currentTarget.name, ev.currentTarget.value)
									}
								/>
							</Card>
							<Card>
								<label htmlFor="role">Role: </label>
								<Input
									type="text"
									name="role"
									id="role"
									minLength={2}
									maxLength={31}
									pattern="[a-zA-Z0-9]+"
									onChange={(ev) =>
										handleWorkExpChange(ev.currentTarget.name, ev.currentTarget.value)
									}
									required
								/>
							</Card>
							<Card>
								<label htmlFor="descriptionWork">Description: </label>
								<textarea
									name="descriptionWork"
									id="descriptionWork"
									cols={31}
									rows={11}
									autoComplete="on"
									maxLength={300}
									spellCheck="true"
									wrap="hard"
									onChange={(ev) =>
										handleWorkExpChange(ev.currentTarget.name, ev.currentTarget.value)
									}
								></textarea>
							</Card>
						</fieldset>
					</form>
				</Container>
			</Wrapper>
		</>
	)
}
