const samplePersonal = new Map([
	['firstname', 'Hiro'],
	['lastname', 'Protagonist'],
	['email', 'd3liv3rat0r@cosa-nostra-pizzas.com'],
	['portfolio-url', 'https://d3liv3rat0r.github.io/'],
	['linkedin-url', 'https://www.linkedin.com/in/d3liv3rat0r/'],
])

// const sampleWorkExp = new Map([
// 	['company-name', ['Cosa Nostra Pizzas', 'Black Sun Systems Inc.']],
// 	['location-work', ['San Francisco, CA', 'Metaverse']],
// 	['from-work', ['2013-05-21', '2011-07-23']],
// 	['to-work', ['2016-06-24', '2013-05-19']],
// 	['role', ['Deliverator (of pizzas)', 'Software Engineer']],
// 	[
// 		'description-work',
// 		[
// 			'Delivered pizzas to customers in various burbclaves, CA. Has never had a late delivery. Able and skilled driver of corporate delivery vehicles.',
// 			'Worked on a team of software engineers to build a web application that allows users to create and share their own avatars in the metaverse. Lead 3D model avatar designer and animator.',
// 		],
// 	],
// ])

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

// const sampleEducation = new Map([
// 	['uni', ['University of Berkeley']],
// 	['location-uni', ['Berkeley, CA']],
// 	['from-uni', ['2009-09-01']],
// 	['to-uni', ['2013-04-30']],
// 	['degree', ['Bachelor of Computer Science']],
// 	[
// 		'description-uni',
// 		[
// 			'Gave me the opportunity to study computer science. I learned a lot about programming and how to use it to solve problems. I also learned how to work with people and how to communicate with them.',
// 		],
// 	],
// ])
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

type SamplePersonal = Map<string, string>
type SampleWorkExp = Map<string, string[]>

export { samplePersonal, sampleWorkExp, sampleEducation, sampleSkills }
