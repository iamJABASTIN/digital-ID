import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  git,
  github,
  mongodb,
  java,
  javascript,
  postman,
  react,
  sql,
  gmail,
  linkedin,
  githubfoot,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Highlights",
    url: "#features",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Projects",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Budget Tracking App",
    text: "The Budget Tracking System is a user-friendly mobile application designed to help individuals manage their finances efficiently. Developed as a mini-project, this app integrates modern technologies to provide an intuitive and seamless experience for budget tracking, expense management, and financial goal setting.",
    date: "Nov 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    projectUrl: "https://github.com/iamJABASTIN/Budget-Tracking-System",
  },
  {
    id: "1",
    title: "ZYRA - E-commerce Application",
    text: "I successfully developed ZYRA, a comprehensive full-stack e-commerce platform tailored specifically for the fashion retail industry. Utilizing the robust MERN stack—consisting of MongoDB, Express.js, React.js, with Tailwind CSS, and Node.js.I crafted an intuitive and dynamic online shopping experience. This platform not only showcases the latest fashion trends but also streamlines the purchasing process, ensuring a seamless interaction for users from browsing to checkout.",
    date: "Jan 2025",
    status: "done",
    imageUrl: roadmap2,
    projectUrl: "https://zyra-client.vercel.app/",
  },
  {
    id: "2",
    title: "Academic Hub",
    text: "We have developed a comprehensive platform designed to consolidate and showcase students' achievements in one accessible location. By leveraging the power of artificial intelligence like ChatGPT, we analyze these accomplishments to offer tailored, personalized suggestions that cater to each student's unique strengths and aspirations. This innovative approach not only highlights individual milestones but also guides students toward future opportunities and growth.",
    date: "March 2025",
    status: "progress",
    imageUrl: roadmap3,
    projectUrl: "https://github.com/iamJABASTIN/level-up",
  },
  {
    id: "3",
    title: "Mentor Match",
    text: "I created Mentor Match to help build interesting and meaningful connections between mentors and mentees. My app makes it easy to organize, input, and match details for both students and staff, ensuring everyone finds the right guidance or mentorship. Mentor Match leverages HTML5, CSS3, JavaScript, Electron.js, and Node.js to deliver a user-friendly desktop experience for managing these relationships.",
    date: "Jan 2024",
    status: "done",
    imageUrl: roadmap4,
    colorful: true,
    projectUrl: "https://github.com/iamJABASTIN/Mentor-Match",
  },
];

export const collabText =
  "Tools I spend time with — for building, collaborating, and getting things done smarter and faster.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "react",
    icon: react,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "github",
    icon: github,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "java",
    icon: java,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "javascript",
    icon: javascript,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "git",
    icon: git,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "sql",
    icon: sql,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "postman",
    icon: postman,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Development",
    text: "Building full-stack projects using modern tech stacks. Check out my GitHub for clean code, real-world apps, and open-source contributions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: "https://github.com/iamJABASTIN",
  },
  {
    id: "1",
    title: "Problem Solving",
    text: "Sharpening my logic through daily LeetCode practice. Solving algorithmic challenges helps me write efficient, optimized, and scalable code.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    light: true,
    link: "https://leetcode.com/u/JABASTIN/",
  },
  {
    id: "2",
    title: "Academic",
    text: "Maintaining strong academic performance with a focus on computer science fundamentals. CGPA reflects consistency, discipline, and a hunger for learning.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
  },
];

export const socials = [
  {
    id: "0",
    title: "linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/iamjabastin/",
  },
  {
    id: "1",
    title: "gmail",
    iconUrl: gmail,
    url: "mailto:itsmejabastin@gmail.com",
  },
  {
    id: "2",
    title: "github",
    iconUrl: githubfoot,
    url: "https://github.com/iamJABASTIN",
  }
];
