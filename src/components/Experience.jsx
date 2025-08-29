import React from 'react';
import { Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { Work, CalendarToday, LocationOn, TrendingUp } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { darkMode } = useTheme();

  const experienceData = [
    {
      id: 1,
      position: 'Senior Front-End Developer',
      company: 'Techart Trekkies',
      location: 'Kathmandu, Nepal',
      duration: 'Nov 2022 - Aug 2023',
      type: 'Full-time',
      description: 'Leading frontend development for enterprise web applications serving 100k+ users. Architecting scalable React applications and mentoring junior developers.',
      responsibilities: [
        'Delivered 10+ production-grade responsive SPAs and Shopify storefronts boosted user engagement by 25% and reduced bounce rates by 15%.',
        'Customized Shopify Liquid templates and integrated Storefront & Admin APIs for advanced eCommerce features.',
        'Optimized component rendering via lazy loading, code splitting, andmemoization (useMemo, React.memo)',
        'Implemented modular architecture using Atomic Design principles, improving reusability and maintainability.',
        'Contributed to CI/CD pipelines using GitLab CI and GitHub Actions, supporting automated builds, linting, and deployments.',
        'Collaborated cross-functionally to define front-end scope in agile sprints, conducted PR reviews, and enforced coding standards.'
      ],
      technologies: ['React','React-Native','SASS','Docker','Node.js' ,'TypeScript', 'Redux', 'Material UI', 'Jest', 'Azure'],
      achievements: [
        'Reduced application bundle size by 35%',
        'Implemented automated testing increasing coverage to 90%',
        'Led migration from legacy codebase to modern React architecture'
      ]
    },
    {
      id: 2,
      position: 'Frontend Developer',
      company: 'Mavorion System',
      location: 'Kathmandu, Nepal',
      duration: 'May 2022 - Nov 2022',
      type: 'Full-time',
      description: 'Developed responsive web applications for a fast-growing fintech startup. Built user interfaces for mobile and web platforms.',
      responsibilities: [
        'Developed responsive UIs for delivery and restaurant platforms serving 10K+ active users.',
        'Applied Redux-Saga for complex async flows and ensured consistent state hydration.',
        'Integrated RESTful APIs and enhanced user experience by implementing skeleton loaders, accessibility standards, and error boundaries.',
        'Worked closely with QA and product teams to resolve functional and UI bugsacross device matrices.'
     
      ],
      technologies: ['React', 'Vue.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB','Redux-Saga','Ant-Design','Mapbox'],
      achievements: [
        'Built 15+ responsive web components',
        'Improved user engagement by 25%',
        'Delivered projects 20% ahead of schedule'
      ]
    },
    {
      id: 3,
      position: 'Junior  Developer',
      company: 'Info Developers',
      location: 'Kathmandu, Nepal',
      duration: 'April 2021 - May 2022',
      type: 'Full-time',
      description: 'Developed websites and web applications for various clients. Gained experience in multiple technologies and project management.',
      responsibilities: [
        'Developed a Vehicle Management System using React + TypeScript, implementing modular components and clean state management via React Query.',
        'Integrated third-party APIs (Google Maps, SMS, Payment) and ensured performance KPIs through real-time monitoring.',
        'Led team stand-ups and mentored junior interns on Git workflows and reusable UI design patterns.',
        'Optimized websites for SEO and performance',
        'Provided technical support to clients'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress','Shopify', 'Bootstrap','TypeScript','Formik'],
      achievements: [
        'Successfully delivered 20+ client projects',
        'Achieved 98% client satisfaction rate',
        'Reduced website loading times by average of 30%'
      ]
    },
    
  ];

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h2"
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Work Experience
          </Typography>
          <div className={`w-24 h-1 ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          } mx-auto rounded-full`}></div>
          <Typography
            variant="h6"
            className={`mt-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Professional journey and career growth
          </Typography>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: darkMode ? '0 20px 40px rgba(255, 255, 255, 0.1)' : '0 20px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent className="p-8">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="flex items-start mb-4">
                        <div className={`mr-4 mt-1 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                          <Work sx={{ fontSize: 30 }} />
                        </div>
                        <div className="flex-1">
                          <Typography
                            variant="h4"
                            className={`font-bold mb-2 ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}
                          >
                            {exp.position}
                          </Typography>
                          <Typography
                            variant="h6"
                            className={`mb-2 ${
                              darkMode ? 'text-purple-400' : 'text-purple-600'
                            }`}
                          >
                            {exp.company}
                          </Typography>
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center">
                              <CalendarToday sx={{ fontSize: 16, mr: 1 }} />
                              <Typography
                                variant="body2"
                                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                              >
                                {exp.duration}
                              </Typography>
                            </div>
                            <div className="flex items-center">
                              <LocationOn sx={{ fontSize: 16, mr: 1 }} />
                              <Typography
                                variant="body2"
                                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                              >
                                {exp.location}
                              </Typography>
                            </div>
                            <Chip
                              label={exp.type}
                              size="small"
                              sx={{
                                background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                color: 'white',
                                fontWeight: 'bold',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Typography
                        variant="body1"
                        className={`mb-4 leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {exp.description}
                      </Typography>

                      <div className="mb-4">
                        <Typography
                          variant="h6"
                          className={`font-bold mb-2 ${
                            darkMode ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          Key Responsibilities
                        </Typography>
                        <ul className={`list-disc list-inside space-y-1 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <Typography
                          variant="h6"
                          className={`font-bold mb-2 flex items-center ${
                            darkMode ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          <TrendingUp sx={{ fontSize: 20, mr: 1 }} />
                          Key Achievements
                        </Typography>
                        <ul className={`list-disc list-inside space-y-1 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <Typography
                        variant="h6"
                        className={`font-bold mb-3 ${
                          darkMode ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        Technologies Used
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Chip
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                color: darkMode ? 'white' : 'black',
                                '&:hover': {
                                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                                },
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;