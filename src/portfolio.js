const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://transinh085.github.io/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tran Nhat Sinh',
  role: 'Web Developer',
  description:
    'I am a student at SaiGon University, pursuing a degree in Information Technology. Driven by a passion for coding, I want to become a fullstack developer. My goal is to excel in this field, contribute to technological advancements, and build innovative applications.',
  resume: 'Tran_Nhat_Sinh_Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/transinh085',
    github: 'https://github.com/transinh085',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Educational Management',
    description: [
      'Developed interface and conducted system design analysis for the Information Technology Department at Saigon University.',
      'Computerized processes for registering majors, internships, improvement courses, managing warned students, and enforcing student dismissals.',
      'Developed a platform for students to connect with potential employer',
    ],
    stack: ['Laravel', 'MySQL', 'React', 'MUI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://dkcn.hgbaodev.id.vn',
  },
  {
    name: 'Shoe Shop',
    description: [
      'Designed and developed user interface for an e-commerce platform specializing in shoe sales, incorporating thorough system analysis',
      'Implemented SignalR integration to facilitate real-time updates on new orders, order statuses, and customer feedback within the system',
      'Established secure and efficient payment processing for orders through seamless integration with PayPal',
    ],
    stack: ['ASP.NET Core MVC', 'Bootstrap', 'Jquery', 'MySQL'],
    sourceCode: '#',
    livePreview: '#',
  },
  {
    name: 'Exam Management',
    description: [
      'Handle saving the test progress state if any issues occur during the examination',
      'Handle detecting cheating during the examination process',
    ],
    stack: ['PHP', 'Boostrap', 'Jquery', 'MySQL'],
    sourceCode: 'https://github.com/transinh085/QuanLyThiTracNghiem',
    livePreview: '#',
  },
  {
    name: 'Vy Food',
    description: [
      'Develop interface and functionality for end users and website administration.',
      'Handle login, registration, search, shopping cart, and purchasing using local storage',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/transinh085/VyFood',
    livePreview: 'https://transinh085.github.io/VyFood/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'C#',
  'PHP',
  'Laravel',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Redux',
  'Material UI',
  'Ant Design',
  'Tailwind',
  'Boostrap',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'transinh085@gmail.com',
}

export { header, about, projects, skills, contact }
