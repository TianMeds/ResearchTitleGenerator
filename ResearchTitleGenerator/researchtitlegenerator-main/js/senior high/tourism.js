var researchTitles = [
    'Theoretical and Methodological Signs of Progress in Social Media and Their Influence on Tourism.',
    'Entrepreneurship and Its Development in a Sphere of Tourism.',
    'Wildlife Activities in Tourism',
    'The Development of Sustainable Tourism.',
    'Competitive Features in Tourism.',
    'Health Tourism, Its Development, and Current Trends.',
    'Quality of Hotels as the Most Decisive Factor in Attracting Tourists in the Philippines.',
    ' Environmental Factors That Influence Tourist Decisions.',
    'Ecotourism and Its Advantages to the Local Businesses.',
    'Black or Dark Tourism and Its Impact on the Local Economy.',
    'Terrorism and Its Effects on the Tourism Industry.',
    'Brand Awareness as the Decisive Factor in the Hotel Industry.',
    'Travelers Perception on Destinations Adherence to Quarantine Protocols and Its Effect on the Decision of Tourism.',
    'Implications of the internet in the development of ecotourism.',
    'Is it socially good to visit a site of suffering and death by the local communities?.',
    'Factors affecting the customer buying behavior of dark tourism in the Philippines',
    'The effects of globalization on the international hospitality industry',
    'The role of hospitality in the development of a country.',
    'Is South Asia the best tourist destination in winter times?.',
    'Factors Influencing Visitor’s Choices to Visit Urban Destinations.',
    'Government instability. When a place is suffering from political problems, it will drive tourists away..',
    'Examining the implications of the Internet on the growth of ecotourism',
    'Factors affecting customers when choosing dark-tourism sites in foreign countries..',
    'The Impact of Travel Bloggers and vloggers on the Tourism Industry..',
    'Assessing the Impact of Government Rules, Regulations, and Policies on Tourism Development: A Case Study of Developing Countries..',
    'Assessing the Impact of Social Media Platforms on Tourism Destination Selection.',
    'Eco-friendly Practices and Their Effect on Hotel Selection Decision: A Case Study of UK Hospitality Industry.',
    'Impact of Low budget Airline Services on Boosting International Tourism in Europe: A Case Study of Ryanair..',
    'Factors Affecting the Decision of British Students to Join International Student Exchange Programmes.',
    'How Economic Conditions of a Country Impact its Local Tourism: Identifying the Economic Factors Influencing the Tourism Sector.',
    'An Analysis of Factors Affecting Employees’ Motivation in Luxury Hotels of Philippines.',

    'Role of strategic human resource management in developing sustainable competitive advantage in contemporary budget hotel chains.',
]





function newTitle() {
	var randomTitles = Math.floor(Math.random() * (researchTitles.length));
	document.getElementById('answer').innerHTML = researchTitles[randomTitles];
	document.getElementById('answer').style.background = "#a67c56";

}