import { useState } from 'react'
import Card from '../styled-generics/Card'
import Input from '../styled-generics/Input'
import Button from '../styled-generics/Button'
import { sampleSkills } from '../../sampleData'
import { Dispatch, Action, SkillsMap, SkillsKey, AppState } from '../../types'

export default function Skills({
	dispatch,
	action,
	state,
}: {
	dispatch: React.Dispatch<Dispatch>
	action: Action
	state: AppState
}): JSX.Element {
	const [skills, setSkills] = useState(sampleSkills)

	function handleSkillsChange(name: SkillsKey | string, value: string): void {
		const clone: SkillsMap = structuredClone(skills)

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

	function handleSkillsFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()

		const formData = new FormData(ev.currentTarget)
		const skillsFormData = formData.get('skills')?.toString() ?? ''

		setSkills(structuredClone(skills).set('skills', skillsFormData))

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
			<form action="#" id="form-skills" onSubmit={handleSkillsFormSubmit}>
				<fieldset>
					<legend data-testid="skills-label">Skills</legend>
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
						<label htmlFor="skills"></label>
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
							name="skills"
							data-testid="skills-input"
							id="skills"
							minLength={2}
							maxLength={31}
							placeholder="i.e., communication, teamwork"
							onChange={(ev) =>
								handleSkillsChange(ev.currentTarget.name, ev.currentTarget.value)
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
				</fieldset>
			</form>
		</>
	)
}
