import { AppState, Dispatch } from './types'

const appReducer = (state: AppState, action: Dispatch) => {
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
			if (action.payload.isDarkMode !== undefined) {
				clone.isDarkMode = action.payload.isDarkMode
			}

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

export default appReducer
