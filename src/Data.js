import me from "./images/me.jpg";
import Employee from "./images/Employee1.png";
import Persona from "./images/Persona2.png";
import Lofi from "./images/lofi_2.gif";
import Bangazon from "./images/BangazonFigma.png";
import Research from "./images/research.jpg";
import Mapping from "./images/journeyMapping.jpg";

export default {
	name: "Sage Klein",
	headerTagline: [
		//Line 1 For Header
		"Sage Klein",
		//Line 2 For Header
		"UX/UI Application Developer",
		//Line 3 For Header
		"Nashville TN"
	],
	//Contact Email
	contactEmail: "sageklein@gmail.com",
	// Add Your About Text Here
	abouttext:
		"As a Front End Web Developer I am passionate about combining my love of coding with my love of continued learning. With UI/UX and strong communication skills I produce beautiful and well thought out design work. With a positive attitude and strong growth mindset, I am self motivated and work well in groups. Empathy, persistence, curiosity and an obsession with details are my motivating factors when designing.",
	aboutImage: me,

	ShowAboutImage: true,
	projects: [
		{
			id: 1,
			title: "Persona: Cheif Training Officer", //Project Title - Add Your Project Title Here
			service: "Built For UI/UX Design and Application Development", // Add Your Service Type Here
			//Project Image - Add Your Project Image Here
			imageSrc: Employee
			//Project URL - Add Your Project Url Here
			// url: "images/Employee1.png"
		},
		{
			id: 2,
			title: "Persona: Collage Student",
			service: "Built For Consumer Web-Application",
			imageSrc: Persona
			// url: "http://sageklein.com/"
		},
		{
			id: 3,
			title: "Journey Mapping",
			service: "Diagraming Views Customers Interacting with on Bangazon",
			imageSrc: Mapping
			// url: "http://sageklein.com/"
		},
		{
			id: 4,
			title: "User Testing",
			service: "Observing User Testing of Lo-Fi Mock-Up",
			imageSrc: Lofi
			// url: "http://sageklein.com/"
		},
		{
			id: 5,
			title: "Banagazon Project",
			service: "Interviewing a User Navigating a Lo-Fi Mock-up",
			imageSrc: Research
			// url: "http://sageklein.com/"
		},
		{
			id: 6,
			title: "Figma Mock-Up for Bangazon Project",
			service: "Hi-Fi Mock-Up for an Online Selling Platform",
			imageSrc: Bangazon
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
