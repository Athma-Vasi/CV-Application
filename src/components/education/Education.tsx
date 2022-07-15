import { useState } from 'react'
import Card from '../styled-generics/Card'
import Input from '../styled-generics/Input'
import Button from '../styled-generics/Button'
import { EducationKeys, EducationMap, Dispatch, Action, AppState } from '../../types'
import Textarea from '../styled-generics/Textarea'

export default function Education({
	dispatch,
	action,
	state,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
	state: AppState
}): JSX.Element {
	const now = new Date()
	const [education, setEducation] = useState<EducationMap>(state.allInfo.education)

	function handleEducationChange(name: EducationKeys | string, value: string): void {
		const clone: EducationMap = structuredClone(education)

		const educationPlusAmount = `education${state.multipleEducationAmounts.at(-1)}`

		if (clone.has('temp')) clone.delete('temp')

		if (!clone.has(educationPlusAmount)) {
			clone.set(educationPlusAmount, {
				uni: '',
				locationUni: '',
				fromUni: '',
				toUni: '',
				degree: '',
				descriptionUni: '',
			})
		}

		const educationObj = clone.get(educationPlusAmount)
		if (educationObj) {
			educationObj[name as EducationKeys] = value
			clone.set(educationPlusAmount, educationObj)
		}

		setEducation(clone)

		dispatch({
			type: action.updateEducation,
			payload: {
				allInfo: {
					education_: education,
				},
			},
		})
	}

	function handleEducationFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()

		const formData = new FormData(ev.currentTarget)

		setEducation(
			structuredClone(education).set('educationPlusAmount', {
				uni: formData.get('uni')?.toString() ?? '',
				locationUni: formData.get('locationUni')?.toString() ?? '',
				fromUni: formData.get('fromUni')?.toString() ?? '',
				toUni: formData.get('toUni')?.toString() ?? '',
				degree: formData.get('degree')?.toString() ?? '',
				descriptionUni: formData.get('descriptionUni')?.toString() ?? '',
			})
		)

		dispatch({
			type: action.updateEducation,
			payload: {
				allInfo: {
					education_: education,
				},
			},
		})
	}

	return (
		<>
			<form action="#" id="form-education" onSubmit={handleEducationFormSubmit}>
				<fieldset>
					<legend>Education </legend>
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
						<label htmlFor="uni">Place of education: </label>
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
							name="uni"
							id="uni"
							minLength={2}
							maxLength={31}
							pattern="[a-zA-Z0-9]+"
							onChange={(ev) =>
								handleEducationChange(ev.currentTarget.name, ev.currentTarget.value)
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
						<label htmlFor="locationUni">Education location: </label>
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
							name="locationUni"
							id="locationUni"
							minLength={2}
							maxLength={31}
							onChange={(ev) =>
								handleEducationChange(ev.currentTarget.name, ev.currentTarget.value)
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
						<label htmlFor="fromUni">Education from: </label>
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
							role="date"
							id="fromUni"
							name="fromUni"
							min={`${now.getFullYear() - 100}-${
								now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
							}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
							max={`${now.getFullYear()}-${
								now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
							}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
							pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"
							onChange={(ev) =>
								handleEducationChange(ev.currentTarget.name, ev.currentTarget.value)
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
						<label htmlFor="toUni">Education to: </label>
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
							role="date"
							name="toUni"
							id="toUni"
							min={`${now.getFullYear() - 100}-${
								now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
							}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
							max={`${now.getFullYear()}-${
								now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
							}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`}
							pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"
							onChange={(ev) =>
								handleEducationChange(ev.currentTarget.name, ev.currentTarget.value)
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
						<label htmlFor="degree">Degree: </label>
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
							name="degree"
							id="degree"
							minLength={2}
							maxLength={31}
							onChange={(ev) =>
								handleEducationChange(ev.currentTarget.name, ev.currentTarget.value)
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
						<label htmlFor="descriptionUni">Education description: </label>
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
							name="descriptionUni"
							id="descriptionUni"
							cols={31}
							rows={11}
							autoComplete="on"
							maxLength={300}
							spellCheck="true"
							wrap="hard"
							onChange={(ev) =>
								handleEducationChange(ev.currentTarget.name, ev.currentTarget.value)
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
