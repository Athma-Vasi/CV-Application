const samplePersonal = new Map([
	['firstname', 'Hiro'],
	['lastname', 'Protagonist'],
	['email', 'd3liv3rat0r@cosa-nostra-pizzas.com'],
	['portfolioUrl', 'https://d3liv3rat0r.github.io/'],
	['linkedinUrl', 'https://www.linkedin.com/in/d3liv3rat0r/'],
])

const sampleWorkExp = new Map([
	[
		'temp',
		{
			companyName: 'Cosa Nostra Pizzas',
			locationWork: 'San Francisco, CA',
			fromWork: '2013-05-21',
			toWork: '2016-06-24',
			role: 'Deliverator (of pizzas)',
			descriptionWork:
				'Delivered pizzas to customers in various burbclaves, CA. Has never had a late delivery. Able and skilled driver of corporate delivery vehicles.',
		},
	],
])

const sampleEducation = new Map([
	[
		'temp',
		{
			uni: 'University of Berkeley',
			locationUni: 'Berkeley, CA',
			fromUni: '2009-09-01',
			toUni: '2013-04-30',
			degree: 'Bachelor of Computer Science',
			descriptionUni:
				'Created a Java mobile app for finding chipped, lost pets. Developed a python based online calculator that placed second in the 2011 university coding competition. Partnered with journalism majors to attract 35 active members to the club in the first year using social media campaigns.',
		},
	],
])

const sampleSkills = new Map([
	['temp', 'hacker, delivery, coding, swordfighting, media agent, stringer'],
])

export { samplePersonal, sampleWorkExp, sampleEducation, sampleSkills }
