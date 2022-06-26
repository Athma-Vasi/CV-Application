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
				'Gave me the opportunity to study computer science. I learned a lot about programming and how to use it to solve problems. I also learned how to work with people and how to communicate with them.',
		},
	],
])

const sampleSkills = new Map([
	['temp', 'hacker, delivery, coding, swordfighting, media agent, stringer'],
])

export { samplePersonal, sampleWorkExp, sampleEducation, sampleSkills }
