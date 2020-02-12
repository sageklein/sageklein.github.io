import me from "./images/me.jpg";
import Employee from "./images/Employee1.png";
import Lofi from "./images/lofi_2.gif";
import Bangazon from "./images/BangazonFigma.png";
import Research from "./images/research.jpg";
import Mapping from "./images/journeyMapping.jpg";
import empathy from "./images/mapping.jpg";
import BangazonDashBoard from "./images/BangazonDashboard.png";
import resume from "./images/Sage's Resume.pdf"
import addComputer from "./images/addComputer.png"

export default {
	name: "Sage Klein",
	Showname: true,

	headerTagline: [
		//Line 1 For Header
		"Sage Klein",
		//Line 2 For Header
		"UX/UI Application Designer",
		//Line 3 For Header
		"Nashville TN"
	],
	resume: resume,
	//Contact Email
	contactEmail: "sageklein@gmail.com",
	// Add Your About Text Here
	abouttext:
		"As a Front End Web Developer I am passionate about combining my love of coding with my love of continued learning. With my UI/UX trailing and strong communication skills I produce beautiful and well thought out design work. With a positive attitude and strong growth mindset, I am self motivated and work well in groups. Empathy, persistence, curiosity and an obsession with details are my motivating factors when designing.",
	aboutImage: me,
	ShowAboutImage: true,

	intro:
		"With most UI/UX and coding project I rely heavily on user interviews to begin. Knowing the users story, creating their empathy maps, documenting their pain points and overall needs helps me start with an idea of who the user is.",
		
	intro2:	
		"From there I can create Personas that the project may refer to while moving forward. Contextual inquiry and journey mapping help me develop diagrams that will depict stages the user will interact with while navigating my project. Having this information helps guid my preliminary wireframes, or Lo-Fi Mockups, which are essential for user testing. Through user testing I can evaluate a project or product feature in a easily updated prototype to evaluate real user interaction.",
	
	intro3: 
		"Any number of these steps may be revisited to inform th stages leading up to coding a project. Finally High fidelity mockups help me to visualize the finally stages of the project before coding begins.",
	projects: [
		{
			id: 1,
			title: "Persona: Cheif Training Officer", //Project Title - Add Your Project Title Here
			service: "Built For Consumer Web-Applications", // Add Your Service Type Here
			//Project Image - Add Your Project Image Here
			imageSrc: Employee
			//Project URL - Add Your Project Url Here
			// url: "images/Employee1.png"
		},
		{
			id: 2,
			title: "Journey/Empathy Mapping",
			service: "Gaining a Deeper Understanding of Users",
			imageSrc: empathy
			// url: "http://sageklein.com/"
		},
		{
			id: 3,
			title: "Site Mapping",
			service: "Diagraming Views of Customer Interactions",
			imageSrc: Mapping
			// url: "http://sageklein.com/"
		},
		{
			id: 4,
			title: "User Testing",
			service: "Observing User Testing of Lo-Fi Mockup",
			imageSrc: Lofi
			// url: "http://sageklein.com/"
		},
		{
			id: 5,
			title: "User Testing",
			service: "Interviewing a User Navigating a Lo-Fi Mockup",
			imageSrc: Research
			// url: "http://sageklein.com/"
		},
		{
			id: 6,
			title: "Figma Mock-Up Of Bangazon Project",
			service: "Hi-Fi Mock-Up for Bangazon",
			imageSrc: Bangazon
			// url: "http://sageklein.com/"
		},
		{
			id: 7,
			title: "Figma View Of Dashboard",
			service: "Hi-Fi MockUp for Bangazon",
			imageSrc: BangazonDashBoard
			// url: "http://sageklein.com/"
		},
		{
			id: 8,
			title: "Figma View to Add Computer Drawer",
			service: "Hi-Fi MockUp for Bangazon",
			imageSrc: addComputer
			// url: "http://sageklein.com/"
		}
	],

	social: [
		// Add Or Remove The Link Accordingly
		{ name: "Github", url: "https://github.com/sageklein" },
		{
			name: "Behance",
			url: "https://www.behance.net/sageklein"
		},
		{
			name: "Dribbble",
			url: "https://dribbble.com/sageklein"
		}
	]
};
