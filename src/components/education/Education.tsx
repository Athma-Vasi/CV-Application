import { useState } from 'react'
import Card from '../styled-generics/Card'
import Input from '../styled-generics/Input'
import Wrapper from '../styled-generics/Wrapper'
import Container from '../styled-generics/Container'
import { sampleEducation } from '../../sampleData'
import { EducationKeys, EducationMap, Dispatch, Action } from '../../types'

export default function Education({
	dispatch,
	action,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
}): JSX.Element {
	const now = new Date()
	const [education, setEducation] = useState(sampleEducation)
	const [educationAmounts, setEducationAmounts] = useState(0)

	function handleEducationChange(name: EducationKeys | string, value: string): void {
		const clone: EducationMap = structuredClone(education)

		const educationObj = clone.get(`education${educationAmounts}`)
		if (educationObj) educationObj[name as EducationKeys] = value

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

	function handleMultipleEducationAmounts(
		ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		ev.preventDefault()
		setEducationAmounts(educationAmounts + 1)

		dispatch({
			type: action.updateMultipleEducationAmounts,
			payload: {
				allInfo: {},
				updateMultipleEducationAmounts: educationAmounts,
			},
		})
	}

	return (
		<>
			<Wrapper>
				<Container>
					<form action="#" id="form-education">
						<fieldset>
							<legend>
								Education{' '}
								<button type="button" onClick={handleMultipleEducationAmounts}>
									➕
								</button>
							</legend>
							<Card>
								<label htmlFor="uni">Place of education: </label>
								<Input
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
							<Card>
								<label htmlFor="locationUni">Location: </label>
								<Input
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
							<Card>
								<label htmlFor="fromUni">From: </label>
								<Input
									type="date"
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
							<Card>
								<label htmlFor="toUni">To: </label>
								<Input
									type="date"
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
							<Card>
								<label htmlFor="degree">Degree: </label>
								<Input
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
							<Card>
								<label htmlFor="descriptionUni">Description: </label>
								<textarea
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
								></textarea>
							</Card>
						</fieldset>
					</form>
				</Container>
			</Wrapper>
		</>
	)
}
