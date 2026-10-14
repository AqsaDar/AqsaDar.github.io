export const profile = {
  name: 'Aqsa Dar',
  role: 'Software Engineer',
  yearsOfExperience: '4+',
  location: 'Lahore, Pakistan',
  email: 'aqsadar64@gmail.com',
  tagline:
    'Frontend-focused software engineer building fast, accessible interfaces with React, Next.js and Vue — backed by hands-on Django REST API work.',
  about: [
    'I’m a highly adaptive software engineer who specialises in frontend development, with hands-on Django and Django REST Framework experience on the backend that powers it. I enjoy turning complex business rules into interfaces that feel simple.',
    'Over the past few years I’ve architected learning platforms, multi-tenant web apps, admin dashboards and headless-CMS driven sites. I work closely with product managers, designers, QA and mobile teams, and I lean on AI-assisted tooling like Claude Code and Cursor to ship faster without cutting corners.',
  ],
  links: {
    github: 'https://github.com/AqsaDar',
    linkedin:
      'https://www.linkedin.com/in/aqsa-dar-%F0%9F%87%B5%F0%9F%87%B8-%F0%9F%87%B8%F0%9F%87%A9-26a28a19a/',
  },
}

export const stats = [
  { value: profile.yearsOfExperience, label: 'Years of experience' },
  { value: '20+', label: 'Technologies in daily use' },
  { value: 'MSc', label: 'Computer Science' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'Redux', 'React Router', 'Hooks & Context API'],
  },
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3', 'SCSS', 'XML'],
  },
  {
    title: 'Backend & Data',
    items: ['Django', 'Django REST Framework', 'PostgreSQL', 'MySQL', 'Strapi CMS'],
  },
  {
    title: 'UI Engineering',
    items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'React Bootstrap', 'Responsive design', 'Accessibility'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'Webhooks', 'Background tasks', 'Jira', 'Agile / Scrum'],
  },
  {
    title: 'AI-assisted',
    items: ['Claude Code', 'Cursor IDE', 'Prompt engineering'],
  },
]

export const highlights = [
  {
    title: 'Learning Management System',
    body: 'Led the frontend architecture in React — reusable components, state management, routing and Context isolation — and built the Django REST backend: data models, custom views, async background tasks and webhooks for third-party payment workflows.',
    tags: ['React', 'DRF', 'Webhooks', 'Payments'],
  },
  {
    title: 'Multi-tenant domain platform',
    body: 'Built domain-based tenancy that loads per-URL styling, business rules and components, then migrated the legacy Vue/Nuxt codebase to Next.js — turning old mixins into clean composables along the way.',
    tags: ['Next.js', 'Nuxt 3', 'Migration'],
  },
  {
    title: 'Dashboards & admin panels',
    body: 'Designed and shipped interactive client panels, admin dashboards and role-based access-control matrices with React, Redux, Vue and Nuxt.',
    tags: ['React', 'Redux', 'Vue', 'RBAC'],
  },
  {
    title: 'Content management systems',
    body: 'Delivered modular admin panels, end-user panels and CMS products with semantic HTML, modern CSS and React, optimising API fetching and state lifecycles.',
    tags: ['React', 'CMS', 'Performance'],
  },
  {
    title: 'Headless CMS integrations',
    body: 'Scaffolded API structures with Strapi and mapped them cleanly into reactive Vue layouts, decoupling content from presentation.',
    tags: ['Strapi', 'Vue.js', 'REST'],
  },
  {
    title: 'Responsive, accessible UI systems',
    body: 'Standardised fluid layout rules across complex products with Tailwind, MUI, Bootstrap and SCSS while keeping accessibility front and centre.',
    tags: ['Tailwind', 'MUI', 'a11y'],
  },
]

export const projects = [
  {
    title: 'Decent Mind',
    body: 'One of my early React projects — a content site built while learning component-driven UI. Kept online as a snapshot of where I started.',
    tags: ['React'],
    live: 'https://aqsadar.github.io/decent-mind/',
    repo: 'https://github.com/AqsaDar/decent-mind',
  },
  {
    title: 'Quiz App',
    body: 'A lightweight quiz application in Vue with question flow, scoring and results.',
    tags: ['Vue.js'],
    repo: 'https://github.com/AqsaDar/Quiz-app-vuejs',
  },
  {
    title: 'Pets App',
    body: 'A Vue.js app for browsing and managing pets, exploring components, props and state.',
    tags: ['Vue.js'],
    repo: 'https://github.com/AqsaDar/pets-app-vuejs',
  },
  {
    title: 'Todo API',
    body: 'A Django-based todo application covering models, views and CRUD workflows.',
    tags: ['Python', 'Django'],
    repo: 'https://github.com/AqsaDar/todo-django',
  },
]

export const education = [
  { degree: 'MSc Computer Science', school: 'PUCIT', years: '2018 – 2020' },
  {
    degree: 'BSc Statistics, Mathematics & Computer Science',
    school: 'Government Post Graduate College',
    years: '2014 – 2018',
  },
]
