var researchTitles = [
    'The effects of malnutrition in todays youth.',
    'How can agricultural scientists best prepare for natural disasters? Or help best in natural disaster recovery?.',
    'Why is the diversity of the crop sorghum been decreasing, and what should be done about this?.',
    'What are the potential benefits and risks of stem cell research?.',
    'How will self-driving cars change the way people live?.',
    'Can we develop an anti-cancer vaccine?.',
    'What health properties does virgin coconut oil have? Can it be used as a therapy for COVID and other diseases?.',
    'How can Microhydropower be helpful for villages in the Philippines?.',
    'How can solar power be used effectively to help agriculture in the Philippines?.',
    'What is the role of educational technologies and apps in increasing the number of Philippine students who choose a STEM (Science, Technology, Engineering, and Math) career pathway?.',
    'Digital Age: The influence of ICT in Millennials Today.',
    'Working With Technology: The Pros & Cons of Having Technology in The Workplace.',
    'Humble abode: The Importance of Innovative Aspects in Home-Building.',
    'Futuristic: The World Ruled by Robots.',
    'Future Demand for Artificial Intelligence?',
    'Current Position for Artificial Intelligence?',
    'Virtual Reality?',
    'How important is it to explore our solar system? Is space exploration really necessary?.',
    'What is the likelihood that the Earth would be struck by a large asteroid or comet like the one believed to have killed off the dinosaurs? What can we do about it?.',
    'Should humans really make the effort to find a way to live in space or on other planets?.',
    'What are the chemicals that trigger allergies? How can chemists help prevent allergies?.',
    'Human Health: What Are The Main Factors to Effect Human Health? & How to Reduce Them? How Technology has Improved Medicine?',
    'Life Changes.',
    'How important is biocomputing and big data to the future of chemical research?.',
    'Can endangered areas and animals be saved by helping local people develop alternative economies like raising tropical fish or ecotourism?.',
    'Stent Use in Heart Operations: How they Improved Longevity & Daily Functioning.',
    'Added Features of Computerized Conveniences in Passenger Vehicles: How The Improvement of Human Lives Are Affected?',
    'DNA Fingerprinting.',
    'Ethics & Genetics.',
    'Humans & Wildlife.',
    'Malnutrition.',
    'Psychology of Plastic Surgery.',
    'Vaccines.',
    'Can microbial factories be an answer to the shortage of raw metals?.',
    'Can molecular biological research of rare genetic disorders help provide keys to understanding cancer and other illnesses?.',
    'Lying with Numbers.'
]

function newTitle() {
	var randomTitles = Math.floor(Math.random() * (researchTitles.length));
	document.getElementById('answer').innerHTML = researchTitles[randomTitles];
	document.getElementById('answer').style.background = "#a67c56";
}
