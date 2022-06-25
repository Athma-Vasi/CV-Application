import { useReducer } from 'react'
import './App.css'

import Personal from './components/personal/Personal'
import Preview from './components/preview/Preview'
import WorkExp from './components/workExp/WorkExp'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import {
	AppState,
	Dispatch,
	Action,
	PersonalMap,
	WorkExpMap,
	EducationMap,
	SkillsMap,
} from './types'

import {
	sampleEducation,
	samplePersonal,
	sampleSkills,
	sampleWorkExp,
} from './sampleData'

const initialState: AppState = {
	allInfo: {
		personal: samplePersonal,
		workExp: sampleWorkExp,
		education: sampleEducation,
		skills: sampleSkills,
	},
	isDarkMode: false,
	multipleWorkExpAmounts: 0,
	multipleEducationAmounts: 0,
}

const action: Action = {
	updatePersonal: 'updatePersonal',
	updateWorkExp: 'updateWorkExp',
	updateEducation: 'updateEducation',
	updateSkills: 'updateSkills',
	toggleDarkMode: 'toggleDarkMode',
	updateMultipleWorkExpAmounts: 'updateMultipleWorkExpAmounts',
	updateMultipleEducationAmounts: 'updateMultipleEducationAmounts',
}

const reducer = (state: AppState, action: Dispatch) => {
	const clone: AppState = structuredClone(state)

	switch (action.type) {
		case 'updatePersonal': {
			if (action.payload.allInfo.personal_) {
				clone.allInfo.personal = action?.payload?.allInfo?.personal_
			}

			return clone
		}
		case 'updateWorkExp': {
			if (action.payload.allInfo.workExp_) {
				clone.allInfo.workExp = action?.payload?.allInfo?.workExp_
			}

			return clone
		}
		case 'updateEducation': {
			if (action.payload.allInfo.education_) {
				clone.allInfo.education = action?.payload?.allInfo?.education_
			}

			return clone
		}
		case 'updateSkills': {
			if (action.payload.allInfo.skills_) {
				clone.allInfo.skills = action?.payload?.allInfo?.skills_
			}

			return clone
		}
		case 'toggleDarkMode': {
			clone.isDarkMode = !clone.isDarkMode

			return clone
		}
		case 'updateMultipleWorkExpAmounts': {
			clone.multipleWorkExpAmounts += 1
			return clone
		}
		case 'updateMultipleEducationAmounts': {
			clone.multipleEducationAmounts += 1
			return clone
		}

		default:
			return clone
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	console.log(state)

	const displayMultipleWorkExp = (
		workExps: number,
		dispatch: React.Dispatch<Dispatch>,
		action: Action
	) => {
		const temp: JSX.Element[] = []

		for (let i = 0; i < workExps; i++) {
			temp.push(<WorkExp key={i} dispatch={dispatch} action={action}></WorkExp>)
		}

		return temp
	}

	return (
		<div className="App">
			Hi Athma! (´｡• ◡ •｡`) ♡
			<br />
			<Personal dispatch={dispatch} action={action}></Personal>
			<WorkExp dispatch={dispatch} action={action}></WorkExp>
			{displayMultipleWorkExp(state.multipleWorkExpAmounts, dispatch, action)}
			<Education dispatch={dispatch} action={action}></Education>
			<Skills dispatch={dispatch} action={action}></Skills>
			<Preview
				personal={state.allInfo.personal}
				education={state.allInfo.education}
				workExp={state.allInfo.workExp}
				skills={state.allInfo.skills}
			></Preview>
		</div>
	)
}

export default App
