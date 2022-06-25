import { useState } from 'react'
import Card from '../styled-generics/Card'
import Input from '../styled-generics/Input'
import Wrapper from '../styled-generics/Wrapper'
import Container from '../styled-generics/Container'
import { sampleSkills } from '../../sampleData'
import { Dispatch, Action, SkillsMap, SkillsKeys } from '../../types'

export default function Skills({
	dispatch,
	action,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
}): JSX.Element {
	const [skills, setSkills] = useState(sampleSkills)

	function handleSkillsChange(name: SkillsKeys | string, value: string): void {
		const clone: SkillsMap = structuredClone(skills)

		//removes the starter value from the array
		if (clone.has('temp')) clone.delete('temp')

		setSkills(clone.set(name, value))

		dispatch({
			type: action.updateSkills,
			payload: {
				allInfo: {
					skills_: skills,
				},
			},
		})
	}

	return (
		<>
			<Wrapper>
				<Container>
					<form action="#" id="form-skills">
						<fieldset>
							<legend>Skills</legend>
							<Card>
								<label htmlFor="skills"></label>
								<Input
									type="text"
									name="skills"
									id="skills"
									minLength={2}
									maxLength={31}
									placeholder="i.e., communication, teamwork"
									pattern="[a-zA-Z0-9]+"
									onChange={(ev) =>
										handleSkillsChange(ev.currentTarget.name, ev.currentTarget.value)
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
