import Card from '../styled-generics/Card'
import Input from '../styled-generics/Input'
import Button from '../styled-generics/Button'

import { WorkExpMap, WorkExpKeys, Dispatch, Action, AppState } from '../../types'
import { useState } from 'react'
import Textarea from '../styled-generics/Textarea'

export default function WorkExp({
	dispatch,
	action,
	state,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
	state: AppState
}): JSX.Element {
	const now = new Date()

	const [workExp, setWorkExp] = useState<WorkExpMap>(state.allInfo.workExp)

	function handleWorkExpChange(name: WorkExpKeys | string, value: string): void {
		const clone: WorkExpMap = structuredClone(workExp)

		const workExpPlusAmount = `workExp${state.multipleWorkExpAmounts.at(-1)}`

		if (clone.has('temp')) clone.delete('temp')

		if (!clone.has(workExpPlusAmount)) {
			clone.set(workExpPlusAmount, {
				companyName: '',
				locationWork: '',
				fromWork: '',
				toWork: '',
				role: '',
				descriptionWork: '',
			})
		}

		const workExpObj = clone.get(workExpPlusAmount)
		if (workExpObj) {
			workExpObj[name as WorkExpKeys] = value
			clone.set(workExpPlusAmount, workExpObj)
		}

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

	function handleWorkExpFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()

		const formData = new FormData(ev.currentTarget)

		setWorkExp(
			structuredClone(workExp).set('workExpPlusAmount', {
				companyName: formData.get('companyName')?.toString() ?? '',
				locationWork: formData.get('locationWork')?.toString() ?? '',
				fromWork: formData.get('fromWork')?.toString() ?? '',
				toWork: formData.get('toWork')?.toString() ?? '',
				role: formData.get('role')?.toString() ?? '',
				descriptionWork: formData.get('descriptionWork')?.toString() ?? '',
			})
		)

		dispatch({
			type: action.updateWorkExp,
			payload: {
				allInfo: {
					workExp_: workExp,
				},
			},
		})
	}

	return (
		<>
			<form action="#" id="form-workExp" onSubmit={handleWorkExpFormSubmit}>
				<fieldset>
					<legend>Work Experience</legend>
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
						<label htmlFor="companyName">Company name: </label>
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
						<label htmlFor="locationWork">Location: </label>
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
						<label htmlFor="fromWork">From: </label>
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
						<label htmlFor="toWork">To: </label>
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
						<label htmlFor="role">Role: </label>
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
						<label htmlFor="descriptionWork">Description: </label>
						<Textarea
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
						></Textarea>
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
								Save
							</Button>
						</Card>
					</Card>
				</fieldset>
			</form>
		</>
	)
}
