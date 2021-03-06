import {
	AppState,
	EducationMap,
	EducationObj,
	PersonalMap,
	SkillsMap,
	WorkExpMap,
	WorkExpObj,
} from '../../types'
import Card from '../styled-generics/Card'

export default function Preview({
	personal,
	workExp,
	education,
	skills,
	state,
}: {
	personal: PersonalMap
	workExp: WorkExpMap
	education: EducationMap
	skills: SkillsMap
	state: AppState
}) {
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
			<h3 className="preview-heading">Personal</h3>
			{Object.entries(Object.fromEntries(personal)).map(
				([key, value]: [string, string]) => {
					return key === 'firstname' || key === 'lastname' ? (
						<p className="preview-personal preview-subHeading content" key={key}>
							{value}
						</p>
					) : (
						<p className="preview-personal preview-content content" key={key}>
							{value}
						</p>
					)
				}
			)}

			<h3 className="preview-heading">Work Experience</h3>
			{Object.entries(Object.fromEntries(workExp)).map(
				([_, values]: [string, WorkExpObj]) => {
					return Object.entries(values).map(([key, value]: [string, string]) => {
						return key === 'companyName' || key === 'role' ? (
							<p className="preview-workExp preview-subHeading content" key={key}>
								{value}
							</p>
						) : key === 'descriptionWork' ? (
							<p className="preview-workExp preview-content content" key={key}>
								{value.split('. ').map((value: string, index: number) => (
									<li key={index}>{value}</li>
								))}
							</p>
						) : (
							<p className="preview-workExp preview-content content" key={key}>
								{value}
							</p>
						)
					})
				}
			)}

			<h3 className="preview-heading">Education</h3>
			{Object.entries(Object.fromEntries(education)).map(
				([_, values]: [string, EducationObj]) => {
					return Object.entries(values).map(([key, value]: [string, string]) => {
						return key === 'uni' || key === 'degree' ? (
							<p className="preview-education preview-subHeading content" key={key}>
								{value}
							</p>
						) : key === 'descriptionUni' ? (
							<p className="preview-education preview-content content" key={key}>
								{value.split('. ').map((value: string, index: number) => (
									<li key={index}>{value}</li>
								))}
							</p>
						) : (
							<p className="preview-education preview-content content" key={key}>
								{value}
							</p>
						)
					})
				}
			)}

			<h3 className="preview-heading">Skills</h3>

			{Object.entries(Object.fromEntries(skills)).map(
				([key, values]: [string, string]) => (
					<p className="preview-skills preview-content content" key={key}>
						{' '}
						{values.split(', ').map((value: string, index: number) => (
							<li key={index}>{value}</li>
						))}
					</p>
				)
			)}
		</Card>
	)
}
