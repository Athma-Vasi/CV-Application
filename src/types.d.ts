type PersonalMap = Map<string, string>

type WorkExpMap = Map<
	string,
	{
		companyName: string
		locationWork: string
		fromWork: string
		toWork: string
		role: string
		descriptionWork: string
	}
>

type WorkExpKeys =
	| 'companyName'
	| 'locationWork'
	| 'fromWork'
	| 'toWork'
	| 'role'
	| 'descriptionWork'

type EducationMap = Map<
	string,
	{
		uni: string
		locationUni: string
		fromUni: string
		toUni: string
		degree: string
		descriptionUni: string
	}
>

type EducationKeys =
	| 'uni'
	| 'locationUni'
	| 'fromUni'
	| 'toUni'
	| 'degree'
	| 'descriptionUni'

type SkillsMap = Map<string, string>
type SkillsKey = 'skills'

type ThemeState = {
	colour: {
		light: string
		dark: string
	}
	backgroundColour: {
		light: string
		dark: string
	}
}

type AppState = {
	allInfo: {
		personal: PersonalMap
		workExp: WorkExpMap
		education: EducationMap
		skills: SkillsMap
	}
	isDarkMode: boolean
	multipleWorkExpAmounts: number[]
	multipleEducationAmounts: number[]
	themeState: ThemeState
}

type Dispatch = {
	type: string
	payload: {
		allInfo: {
			personal_?: PersonalMap
			workExp_?: WorkExpMap
			education_?: EducationMap
			skills_?: SkillsMap
		}
		isDarkMode?: boolean
		updateMultipleWorkExpAmounts?: number
		updateMultipleEducationAmounts?: number
	}
}

type Action = {
	updatePersonal: 'updatePersonal'
	updateWorkExp: 'updateWorkExp'
	updateEducation: 'updateEducation'
	updateSkills: 'updateSkills'
	toggleDarkMode: 'toggleDarkMode'
	updateMultipleWorkExpAmounts: 'updateMultipleWorkExpAmounts'
	updateMultipleEducationAmounts: 'updateMultipleEducationAmounts'
}

export {
	AppState,
	ThemeState,
	Dispatch,
	Action,
	PersonalMap,
	WorkExpMap,
	WorkExpKeys,
	EducationMap,
	EducationKeys,
	SkillsMap,
	SkillsKey,
}
