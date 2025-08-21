import React from 'react';
import { Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { School, CalendarToday, LocationOn } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const Education = () => {
  const { darkMode } = useTheme();

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'San Francisco, CA',
      duration: '2018 - 2022',
      gpa: '3.8/4.0',
      description: 'Focused on software engineering, web development, and computer systems. Completed coursework in algorithms, data structures, database systems, and software architecture.',
      achievements: [
        'Dean\'s List for 6 semesters',
        'Computer Science Student of the Year 2021',
        'Led development team for senior capstone project'
      ],
      courses: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering']
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      location: 'Online',
      duration: '2022',
      description: 'Intensive 6-month program covering modern web development technologies including React, Node.js, MongoDB, and cloud deployment.',
      achievements: [
        'Top 5% of graduating class',
        'Built 10+ full-stack applications',
        'Mentored junior students'
      ],
      courses: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS Deployment']
    },
    {
      id: 3,
      degree: 'High School Diploma',
      institution: 'Central High School',
      location: 'San Francisco, CA',
      duration: '2014 - 2018',
      gpa: '3.9/4.0',
      description: 'Graduated with honors, focusing on mathematics and computer science courses.',
      achievements: [
        'Valedictorian',
        'National Honor Society',
        'Computer Science Club President'
      ],
      courses: ['AP Computer Science', 'AP Calculus', 'AP Physics', 'Advanced Mathematics']
    }
  ];

  return (
    <section id="education" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
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
            Education
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
            My academic journey and continuous learning
          </Typography>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
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
                          <School sx={{ fontSize: 30 }} />
                        </div>
                        <div className="flex-1">
                          <Typography
                            variant="h4"
                            className={`font-bold mb-2 ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}
                          >
                            {edu.degree}
                          </Typography>
                          <Typography
                            variant="h6"
                            className={`mb-2 ${
                              darkMode ? 'text-purple-400' : 'text-purple-600'
                            }`}
                          >
                            {edu.institution}
                          </Typography>
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center">
                              <CalendarToday sx={{ fontSize: 16, mr: 1 }} />
                              <Typography
                                variant="body2"
                                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                              >
                                {edu.duration}
                              </Typography>
                            </div>
                            <div className="flex items-center">
                              <LocationOn sx={{ fontSize: 16, mr: 1 }} />
                              <Typography
                                variant="body2"
                                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                              >
                                {edu.location}
                              </Typography>
                            </div>
                            {edu.gpa && (
                              <Chip
                                label={`GPA: ${edu.gpa}`}
                                size="small"
                                sx={{
                                  background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                  color: 'white',
                                  fontWeight: 'bold',
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Typography
                        variant="body1"
                        className={`mb-4 leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {edu.description}
                      </Typography>

                      {edu.achievements && (
                        <div className="mb-4">
                          <Typography
                            variant="h6"
                            className={`font-bold mb-2 ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}
                          >
                            Key Achievements
                          </Typography>
                          <ul className={`list-disc list-inside space-y-1 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="col-lg-4">
                      <Typography
                        variant="h6"
                        className={`font-bold mb-3 ${
                          darkMode ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        Key Courses
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <motion.div
                            key={course}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Chip
                              label={course}
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

export default Education;