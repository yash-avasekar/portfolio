import hello from "../../Assests/Hello.json";
import about from "../../Assests/About.json";
import skills from "../../Assests/Skills.json";

export const LottieFiles = [
  {
    loop: true,
    autoplay: true,
    animationData: hello,
  },
  {
    loop: true,
    autoplay: true,
    animationData: about,
  },
  {
    loop: true,
    autoplay: true,
    animationData: skills,
  },
];

// intro

export const intro_title = [
  ["Hi", "I'm", "Yash Avasekar", "Full-Stack", "Developer"],
];
export const intro_description = [
  "I am a full-stack web developer.",
  "I can provide clean and scalable code with great backend service.",
];
export const intro_link = ["My Projects"];

// about

export const about_title = ["About Me", "Yash", "Avasekar"];
export const about_description = [
  [
    "Hi there! I’m Yash Avasekar, a passionate Web & Backend developer based in Solapur, Maharashtra.",
  ],
  [
    "With a love for clean code and problem-solving, I thrive on turning ideas into functional applications.",
  ],
  [
    "My journey began with a Bachelor’s degree in Computer Science, and since then, I’ve been on an exciting coding adventure.",
  ],
];

// skills

export const skill_title = ["Core", "Skills"];
export const skill_description = [
  ["Frontend Development : ", "HTML, CSS, JavaScript"],
  ["Backend Development : ", "Python"],
  ["Frameworks : ", "React JS, React Native ,Django-Rest"],
  ["Databases : ", "MySQL, MongoDB ,Oracle"],
  ["Version Control : ", "Git, GitHub"],
  ["Aws Services : ", "AWS EC2 ,AWS S3 Bucket ,AWS Elastic-Beanstalk ,AWS RDS"],
];
