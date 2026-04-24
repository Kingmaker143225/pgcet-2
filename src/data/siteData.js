export const quickActions = [
  { title: 'Applicant Registration', desc: 'Create a new candidate account', path: '/registration', icon: 'UserPlus' },
  { title: 'Fill Application Form', desc: 'Complete and submit your application', path: '/application-form', icon: 'FileText' },
  { title: 'Track Application', desc: 'Check submitted application status', path: '/track-application', icon: 'Search' },
  { title: 'Payment Status', desc: 'Verify fee payment confirmation', path: '/payment-status', icon: 'CreditCard' },
  { title: 'Hall Ticket Download', desc: 'Download hall ticket when available', path: '/hall-ticket', icon: 'Download' },
  { title: 'Download Syllabus', desc: 'View course-wise syllabus PDF', path: '/syllabus', icon: 'BookOpen' },
];

export const infoCards = [
  { title: 'Notification', desc: 'Latest examination circulars and admission notices', path: '/notification' },
  { title: 'Important Dates', desc: 'Application, correction, hall ticket and result schedule', path: '/important-dates' },
  { title: 'Syllabus', desc: 'Subject-wise syllabus and exam structure', path: '/syllabus' },
  { title: 'Exam Pattern', desc: 'Question paper pattern, sections and marking scheme', path: '/exam-pattern' },
  { title: 'User Guide', desc: 'Step-by-step candidate portal guide', path: '/user-guide' },
  { title: 'Regional Centers', desc: 'Exam and helpdesk regional center information', path: '/regional-centers' },
];

export const importantDates = [
  ['Issue of notification', '12-03-2026'],
  ['Online application starts', '18-03-2026'],
  ['Last date without late fee', '30-04-2026'],
  ['Last date with late fee', '10-05-2026'],
  ['Application correction window', '12-05-2026 to 15-05-2026'],
  ['Hall ticket download', '25-05-2026'],
  ['Entrance test date', '02-06-2026'],
  ['Preliminary key', '05-06-2026'],
  ['Results / rank card', '20-06-2026'],
];

export const notifications = [
  { title: 'PGCET 2026 Admission Notification Released', date: '12 Mar 2026', type: 'New', file: '/downloads/pgcet-notification-2026.pdf' },
  { title: 'Instructions for Online Application Submission', date: '18 Mar 2026', type: 'Guide', file: '/downloads/application-guide.pdf' },
  { title: 'List of Help Line Centers for Certificate Verification', date: '22 Mar 2026', type: 'Info', file: '/downloads/help-line-centers.pdf' },
  { title: 'Mock Test Link and Exam Day Guidelines', date: '01 Apr 2026', type: 'Exam', file: '/downloads/exam-day-guidelines.pdf' },
];

export const syllabus = [
  { course: 'MBA', topics: ['Analytical Ability', 'Mathematical Ability', 'Communication Ability'], file: '/downloads/mba-syllabus.pdf' },
  { course: 'MCA', topics: ['Mathematics', 'Computer Awareness', 'Analytical Ability'], file: '/downloads/mca-syllabus.pdf' },
  { course: 'M.Tech', topics: ['Engineering Mathematics', 'Core Engineering Subject', 'Aptitude'], file: '/downloads/mtech-syllabus.pdf' },
  { course: 'M.Pharmacy', topics: ['Pharmaceutics', 'Pharmacology', 'Pharmaceutical Chemistry'], file: '/downloads/mpharmacy-syllabus.pdf' },
];

export const centers = [
  ['Hyderabad', 'JNTU Campus Helpdesk', '040-23456789'],
  ['Warangal', 'University Arts & Science College', '0870-2456789'],
  ['Karimnagar', 'Govt Polytechnic Center', '0878-2233445'],
  ['Nizamabad', 'Regional Degree College', '08462-222123'],
  ['Khammam', 'District Help Line Center', '08742-232323'],
  ['Nalgonda', 'Government College Center', '08682-245245'],
];

export const faqs = [
  ['Who can apply for PGCET 2026?', 'Candidates seeking admission into postgraduate professional courses such as MBA, MCA, M.Tech and related programs can apply after checking the eligibility criteria.'],
  ['Can I edit my application after submission?', 'Yes. A correction window is provided as per the published schedule. Critical details may require helpdesk approval.'],
  ['How do I download the hall ticket?', 'Use the Hall Ticket Download link and enter your registration number, date of birth and qualifying exam hall ticket number.'],
  ['Where can I get support?', 'Use the helpline numbers, email support, or visit the nearest regional/help line center listed on this portal.'],
];
