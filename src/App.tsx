import React, { cloneElement, useReducer } from 'react'
import './App.css'

import Personal from './components/personal/Personal'
import Preview from './components/preview/Preview'
import WorkExp from './components/workExp/WorkExp'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import { AppState, Dispatch, Action } from './types'

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
	multipleWorkExpAmounts: [0],
	multipleEducationAmounts: [0],
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
			if (action.payload.updateMultipleWorkExpAmounts) {
				clone.multipleWorkExpAmounts.push(action.payload.updateMultipleWorkExpAmounts)
			}
			return clone
		}
		case 'updateMultipleEducationAmounts': {
			if (action.payload.updateMultipleEducationAmounts) {
				clone.multipleEducationAmounts.push(action.payload.updateMultipleEducationAmounts)
			}
			return clone
		}

		default:
			return clone
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	console.log(state)

	// const displayMultipleWorkExp = ((
	// 	workExpAmounts: number,
	// 	dispatch: React.Dispatch<Dispatch>,
	// 	action: Action
	// ): JSX.Element[] => {
	// 	const temp: JSX.Element[] = []

	// 	for (let i = 0; i <= workExpAmounts; i++) {
	// 		temp.push(<WorkExp state={state} dispatch={dispatch} action={action}></WorkExp>)
	// 	}

	// 	return temp
	// })(state.multipleWorkExpAmounts, dispatch, action)

	function handleNewWorkExpClick(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		dispatch({
			type: action.updateMultipleWorkExpAmounts,
			payload: {
				allInfo: {},
				updateMultipleWorkExpAmounts:
					state.multipleWorkExpAmounts[state.multipleWorkExpAmounts.length - 1] + 1,
			},
		})
	}

	function handleNewEducationClick(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		dispatch({
			type: action.updateMultipleEducationAmounts,
			payload: {
				allInfo: {},
				updateMultipleEducationAmounts:
					state.multipleEducationAmounts[state.multipleEducationAmounts.length - 1] + 1,
			},
		})
	}

	const renderForms = (function (
		state: AppState,
		dispatch: React.Dispatch<Dispatch>,
		action: Action
	): JSX.Element[] {
		const temp: JSX.Element[] = []

		temp.push(<Personal dispatch={dispatch} action={action}></Personal>)

		temp.push(
			<button type="button" onClick={handleNewWorkExpClick}>
				Add new work
			</button>
		)

		for (let i = 0; i < state.multipleWorkExpAmounts.length; i++) {
			temp.push(<WorkExp state={state} dispatch={dispatch} action={action}></WorkExp>)
		}

		temp.push(
			<button type="button" onClick={handleNewEducationClick}>
				Add new education
			</button>
		)

		for (let i = 0; i < state.multipleEducationAmounts.length; i++) {
			temp.push(<Education state={state} dispatch={dispatch} action={action}></Education>)
		}

		return temp
	})(state, dispatch, action)

	return (
		<div className="App">
			Hi Athma! (´｡• ◡ •｡`) ♡
			<br />
			{/* <Personal dispatch={dispatch} action={action}></Personal>
			<WorkExp state={state} dispatch={dispatch} action={action}></WorkExp>
			<Education state={state} dispatch={dispatch} action={action}></Education>
			<Skills dispatch={dispatch} action={action}></Skills> */}
			{renderForms.map((form: JSX.Element) => (
				<div>{form}</div>
			))}
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
