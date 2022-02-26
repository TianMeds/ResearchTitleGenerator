var researchTitles = [
    'Cooking schools on the job market. ',
    'Protein foods preservation: statistical analysis.',
    'Quantitative analysis of the most popular food preservation techniques. ',
    'Vegan vs. non-vegan customers: statistical analysis.',
    'Caffeine in different drinks: quantitative analysis.',
    'The impact of using plastic for preserving on the food quality.',
    'Eating disorders and beauty standards',
    'A correlation between the climate and diet.',
    'Nutrition and bone density',
    'The impact of the quick-service restaurants on the speed of life.',
    'Salmonella cases in port cities',
    'The amount of fats children and adults need',
    'A correlation between organic food and health.',
    'The impact of a visual representation of a dish on a customer’s review.',
    'Health properties of turmeric in Indian cuisine',
    'Food safety regulations in Philippines',
    'Canning and preserving meat'
]

function newTitle() {
	var randomTitles = Math.floor(Math.random() * (researchTitles.length));
	document.getElementById('answer').innerHTML = researchTitles[randomTitles];
	document.getElementById('answer').style.background = "#a67c56";
}