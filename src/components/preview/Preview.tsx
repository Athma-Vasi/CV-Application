import React from 'react'
import { EducationMap, PersonalMap, SkillsMap, WorkExpMap } from '../../types'

// type PersonalProps = Map<string, string>
// type WorkExpProps = Map<
// 	string,
// 	{
// 		companyName: string
// 		locationWork: string
// 		fromWork: string
// 		toWork: string
// 		role: string
// 		descriptionWork: string
// 	}
// >

export default function Preview({
	personal,
	workExp,
	education,
	skills,
}: {
	personal: PersonalMap
	workExp: WorkExpMap
	education: EducationMap
	skills: SkillsMap
}) {
	return (
		<>
			<h3>Personal</h3>
			{Object.entries(Object.fromEntries(personal)).map(([key, value]) => (
				<p key={key}>{value}</p>
			))}

			<h3>Work Experience</h3>
			{Object.entries(Object.fromEntries(workExp)).map(([_, values]) => {
				return Object.entries(values).map(([key, value]) => <p key={key}>{value}</p>)
			})}

			<h3>Education</h3>
			{Object.entries(Object.fromEntries(education)).map(([_, values]) => {
				return Object.entries(values).map(([key, value]) => <p key={key}>{value}</p>)
			})}

			<h3>Skills</h3>
			{/* {Object.entries(Object.fromEntries(skills)).map(([_, values]) =>
				values.map((value) => (
					<ul key={crypto.randomUUID()}>
						<li key={crypto.randomUUID()}>{value}</li>
					</ul>
				))
			)} */}
			{Object.entries(Object.fromEntries(skills)).map(([_, values]) => (
				<p key={crypto.randomUUID()}> {values}</p>
			))}
		</>
	)
}
