import me from "./images/me.jpg";
import me2 from "./images/me2.jpg";
import Employee from "./images/Employee1.png";
import Persona from "./images/Persona2.png";
import Website35 from "./images/website35.png";
import Bangazon from "./images/BangazonFigma.png";
import Research from "./images/research.jpg";

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
		"As a Front End Web Developer I am passionate about combining my love of coding with my love of continued learning. With UI/UX and strong communication skills I produce beautiful and well thought out design work. With a positive attitude and strong growth mindset, I am self motivated and work well in groups!",
	aboutImage: me,
	me2,

	ShowAboutImage: true,

	personas: [
		{
			words: "Personas",
			id: 1,
			title: "Cheif Training Officer at Bangazon", //Project Title - Add Your Project Title Here
			service: "UI/UX Design and Application Development", // Add Your Service Type Here
			//Project Image - Add Your Project Image Here
			imageSrc: Employee,
			//Project URL - Add Your Project Url Here
			url: "https://nss-day-cohort-35.github.io/website/"
		},
		{
			id: 2,
			title: "Collage Student",
			service: "Persona For Base of Web-Application",
			imageSrc: Persona,
			url: "http://sageklein.com/"
		}
	],

	websites: [
		{
			words: "Websites",
			id: 3,
			title: "Cohort 35 Website",
			service: "Website for NSS Cohort 35",
			imageSrc: Website35,
			url: "http://sageklein.com/"
		},
		{
			id: 4,
			title: "Figma Mock-Up for Bangazon Project",
			service: "Hi-Fi Mock-Up for an Online Selling Platform",
			imageSrc: Bangazon
		}
	],

	research: [
		{
			words: "User Research",
			id: 5,
			title: "Banagazon Project",
			service: "Interviewing a User Navigating a Lo-Fi Mock-up",
			imageSrc: Research
		},
		{
			id: 6,
			title: "Bangazon Project",
			service: "Hi-Fi Mock-Up for Bangazon Project",
			imageSrc: Bangazon
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
