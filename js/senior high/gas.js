var researchTitles = [
    'Survey of paragraphing styles of newspapers in your locality',
    'An analysis of scores of students from the schools in your state on standard/state-wide exams.',
    'Research on causes and effects of truancy on students.',
    'Investigation of home factors contributing to academic performance.',
    'Mathematical modelling of any interesting activity or behavior of humans or other matter e.g. social media time vs study time.',
    'Study of linguistic registers used by some professionals or groups in your area.',
    'The Effect of Online Schooling to the Academic Grades of General Academic Strand Students of Example School.',
    'A Study on the Online Truancy of Students under the New Mode of Learning',
    'Home Factors: Its Effect on the Academic Performance of Students',
    'English Analysis of G11 students of Felix Amante SHS',
    'Population of the students experience scarcity',
    'Science and Health Analysis of G11 students choosing Science as a major subj. In grd 12',
    'factors affecting the mathematical competence of grade 11 students',
    'Relationship Status and Academic performance of SHS students',
    'Social media vs. Academic: The negative impact to the academic status among Colegio De Los Banos',
    'Factors Affecting the Academic Performance in Practical Research 2 through Self-learning Modules..',
    'The development of cryptography in the USSR.',
    'How are the problems of racism described in media of the country, including TV shows, animation, and movies?',
    'Violence in sports, domestic violence and other violence methods and how to reduce them , how they are effecting , how to rescue from violence and so on',
    'Greenhouse effect boosts global warming: myth or truth? Like that you can talk about an environmental protection'
]

function newTitle() {
	var randomTitles = Math.floor(Math.random() * (researchTitles.length));
	document.getElementById('answer').innerHTML = researchTitles[randomTitles];
	document.getElementById('answer').style.background = "#a67c56";
}