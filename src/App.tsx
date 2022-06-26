import React, { useReducer } from 'react'
import './App.css'

import Personal from './components/personal/Personal'
import Preview from './components/preview/Preview'
import WorkExp from './components/workExp/WorkExp'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'

import Button from './components/styled-generics/Button'
import Card from './components/styled-generics/Card'
import Wrapper from './components/styled-generics/Wrapper'
import Container from './components/styled-generics/Container'

import { AppState, Dispatch, Action, ThemeState } from './types'

import {
	sampleEducation,
	samplePersonal,
	sampleSkills,
	sampleWorkExp,
} from './sampleData'
import appReducer from './appReducer'

const themeState: ThemeState = {
	colour: {
		light: 'hsl(0, 0%, 25%)',
		dark: 'hsl(0, 0%, 62%)',
	},
	backgroundColour: {
		light: 'hsl(0, 0%, 97%)',
		dark: 'hsl(0, 0%, 15%)',
	},
}

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
	themeState: themeState,
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

function App() {
	const [state, dispatch] = useReducer(appReducer, initialState)
	// console.log(state)

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

	function handleToggleThemeClick(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		ev.currentTarget.textContent = ev.currentTarget.textContent === '🌑' ? '☀️' : '🌑'

		dispatch({
			type: action.toggleDarkMode,
			payload: {
				allInfo: {},
				isDarkMode: ev.currentTarget.textContent === '🌑' ? true : false,
			},
		})
	}

	const renderForms = (function (
		state: AppState,
		dispatch: React.Dispatch<Dispatch>,
		action: Action
	): JSX.Element[] {
		const temp: JSX.Element[] = []

		temp.push(<Personal state={state} dispatch={dispatch} action={action}></Personal>)

		temp.push(
			<Button
				colour={
					state.isDarkMode ? state.themeState.colour.dark : state.themeState.colour.light
				}
				backgroundColour={
					state.isDarkMode
						? state.themeState.backgroundColour.dark
						: state.themeState.backgroundColour.light
				}
				type="button"
				onClick={handleNewWorkExpClick}
			>
				Add new work
			</Button>
		)

		for (let i = 0; i < state.multipleWorkExpAmounts.length; i += 1) {
			temp.push(<WorkExp state={state} dispatch={dispatch} action={action}></WorkExp>)
		}

		temp.push(
			<Button
				colour={
					state.isDarkMode ? state.themeState.colour.dark : state.themeState.colour.light
				}
				backgroundColour={
					state.isDarkMode
						? state.themeState.backgroundColour.dark
						: state.themeState.backgroundColour.light
				}
				type="button"
				onClick={handleNewEducationClick}
			>
				Add new education
			</Button>
		)

		for (let i = 0; i < state.multipleEducationAmounts.length; i += 1) {
			temp.push(<Education state={state} dispatch={dispatch} action={action}></Education>)
		}

		temp.push(<Skills state={state} dispatch={dispatch} action={action}></Skills>)

		return temp
	})(state, dispatch, action)

	return (
		<div className="App">
			<Wrapper
				colour={
					state.isDarkMode ? state.themeState.colour.dark : state.themeState.colour.light
				}
				backgroundColour={
					state.isDarkMode
						? state.themeState.backgroundColour.dark
						: state.themeState.backgroundColour.light
				}
			>
				<Container className="heading-container">
					<h1>CV Application</h1>
					<div className="links">
						<a href="https://github.com/Athma-Vasi">Made by Athma Vasi</a>
						<a href="https://github.com/Athma-Vasi/CV-Application">View Code</a>
					</div>
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
						style={{ clipPath: 'circle()', fontSize: '2rem' }}
						type="button"
						onClick={handleToggleThemeClick}
					>
						☀️
					</Button>
				</Container>

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
					<div className="content-container">
						<div className="form-container">
							{renderForms.map((form: JSX.Element) => (
								<div>{form}</div>
							))}
						</div>
						<div className="preview-container">
							<Preview
								state={state}
								personal={state.allInfo.personal}
								education={state.allInfo.education}
								workExp={state.allInfo.workExp}
								skills={state.allInfo.skills}
							></Preview>
						</div>
					</div>
				</Card>
			</Wrapper>
		</div>
	)
}

export default App
