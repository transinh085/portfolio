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
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/transinh085',
    github: 'https://github.com/transinh085',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Educational Management',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Laravel', 'MySQL', 'React', 'MUI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://dkcn.hgbaodev.id.vn',
  },
  {
    name: 'Shoe Shop',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['ASP.NET Core MVC', 'Bootstrap', 'Jquery', 'MySQL'],
    sourceCode: '#',
    livePreview: '#',
  },
  {
    name: 'Exam Management',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['PHP', 'Boostrap', 'Jquery', 'MySQL'],
    sourceCode: 'https://github.com/transinh085/QuanLyThiTracNghiem',
    livePreview: '#',
  },
  {
    name: 'Vy Food',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
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
